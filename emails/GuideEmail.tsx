import * as React from 'react';
import { Html } from '@react-email/html';
import { Head } from '@react-email/head';
import { Body } from '@react-email/components';
import { Container } from '@react-email/container';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import { Button } from '@react-email/button';
import { Hr } from '@react-email/hr';

interface GuideEmailProps {
  userEmail: string;
}

export default function GuideEmail({ userEmail }: GuideEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={headerText}>
              ГАЙД: Как подружить эмоциональную и рациональную часть
            </Text>
          </Section>

          <Section style={content}>
            <Text style={greeting}>Здравствуйте!</Text>

            <Text style={paragraph}>
              Спасибо за интерес к гипнотерапии и саморазвитию.
            </Text>

            <Text style={paragraph}>
              Вот ваш гайд по принятию решений во благо себе. Нажмите на кнопку ниже, чтобы прочитать полный гайд:
            </Text>

            <Section style={buttonContainer}>
              <Button
                style={button}
                href={`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/guide`}
              >
                Читать гайд
              </Button>
            </Section>

            <Text style={paragraph}>
              В этом гайде вы узнаете:
            </Text>

            <ul style={list}>
              <li style={listItem}>Как признать обе части (эмоциональную и рациональную) как важные</li>
              <li style={listItem}>Как разделить эмоции и быстрые реакции</li>
              <li style={listItem}>Как найти "третье решение"</li>
              <li style={listItem}>Практические техники для гармоничных решений</li>
            </ul>

            <Hr style={divider} />

            <Text style={paragraph}>
              <strong>Если чувствуете, что нужна помощь специалиста</strong> — я всегда готов помочь на консультации.
            </Text>

            <Text style={paragraph}>
              Просто напишите мне в Telegram кодовое слово «Перезапуск».
            </Text>

            <Section style={buttonContainer}>
              <Button
                style={telegramButton}
                href="https://t.me/mykhailo_elmejor"
              >
                Написать в Telegram
              </Button>
            </Section>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              С уважением,<br />
              Профессиональная гипнотерапия
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0',
  marginTop: '20px',
  marginBottom: '20px',
  borderRadius: '8px',
  maxWidth: '600px',
};

const header = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  padding: '30px 40px',
  borderRadius: '8px 8px 0 0',
};

const headerText = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '0',
};

const content = {
  padding: '40px',
};

const greeting = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#2c3e50',
  marginBottom: '20px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#495057',
  marginBottom: '16px',
};

const list = {
  paddingLeft: '20px',
  marginBottom: '20px',
};

const listItem = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#495057',
  marginBottom: '8px',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '30px 0',
};

const button = {
  backgroundColor: '#764ba2',
  borderRadius: '50px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  padding: '14px 28px',
  display: 'inline-block',
};

const telegramButton = {
  backgroundColor: '#26a69a',
  borderRadius: '50px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  padding: '14px 28px',
  display: 'inline-block',
};

const divider = {
  borderColor: '#e1e8ed',
  margin: '30px 0',
};

const footer = {
  padding: '20px 40px',
  borderTop: '1px solid #e1e8ed',
};

const footerText = {
  color: '#6c757d',
  fontSize: '14px',
  textAlign: 'center' as const,
  lineHeight: '20px',
};
