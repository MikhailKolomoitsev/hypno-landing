import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { promises as fs } from 'fs';
import path from 'path';
import GuideEmail from '@/emails/GuideEmail';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Path to store emails
const emailsFilePath = path.join(process.cwd(), 'data', 'subscribers.json');

// Function to read existing emails
async function readEmails() {
  try {
    const fileContent = await fs.readFile(emailsFilePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    // If file doesn't exist, return empty array
    return [];
  }
}

// Function to save email
async function saveEmail(email: string) {
  try {
    const emails = await readEmails();

    // Check if email already exists
    const existingEmail = emails.find((e: any) => e.email === email);
    if (existingEmail) {
      return { alreadyExists: true };
    }

    // Add new email with timestamp
    const newEntry = {
      email,
      subscribedAt: new Date().toISOString(),
      ip: null, // You can add IP if needed
    };

    emails.push(newEntry);

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch (err) {
      // Directory might already exist
    }

    // Write to file
    await fs.writeFile(emailsFilePath, JSON.stringify(emails, null, 2));

    return { success: true };
  } catch (error) {
    console.error('Error saving email:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Save email to file
    const saveResult = await saveEmail(email);

    if (saveResult.alreadyExists) {
      return NextResponse.json(
        { message: 'Email already subscribed' },
        { status: 200 }
      );
    }

    // Send email using Resend
    if (!resend) {
      console.warn('Resend API key not configured. Email saved but not sent.');
      return NextResponse.json(
        {
          message: 'Email saved. Configure RESEND_API_KEY to enable email sending.',
          warning: 'Email delivery not configured'
        },
        { status: 200 }
      );
    }

    try {
      const { data, error } = await resend.emails.send({
        from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
        to: [email],
        subject: 'Ваш гайд по принятию решений',
        react: GuideEmail({ userEmail: email }),
      });

      if (error) {
        console.error('Resend error:', error);
        // Email saved but sending failed
        return NextResponse.json(
          {
            message: 'Email saved but sending failed. Please check your Resend configuration.',
            error: error.message
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          message: 'Successfully subscribed and email sent!',
          data
        },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        {
          message: 'Email saved but sending failed',
          error: emailError.message
        },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription', details: error.message },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve all subscribers (protected - you should add authentication)
export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication here
    // const authHeader = request.headers.get('authorization');
    // if (authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const emails = await readEmails();

    return NextResponse.json(
      {
        count: emails.length,
        subscribers: emails
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscribers', details: error.message },
      { status: 500 }
    );
  }
}
