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

          {/* Header */}
          <Section style={header}>
            <Text style={headerText}>
              ГАЙД: Как подружить эмоциональную и рациональную часть
            </Text>
            <Text style={headerSub}>
              и научиться принимать решения во благо себе
            </Text>
          </Section>

          <Section style={content}>
            <Text style={greeting}>Здравствуйте!</Text>
            <Text style={paragraph}>
              Большинство внутренних конфликтов возникает не потому, что вы «не знаете, что делать», а потому что рациональная и эмоциональная части хотят разного.
            </Text>
            <Text style={paragraph}>
              Ниже — короткий, но рабочий алгоритм, который поможет им перестать тянуть вас в разные стороны.
            </Text>

            <Hr style={divider} />

            {/* Step 1 */}
            <Text style={stepNumber}>Шаг 1</Text>
            <Text style={stepTitle}>Признайте обе части как важные</Text>
            <Text style={paragraph}>
              Ошибка большинства — пытаться либо «заткнуть эмоции», либо «игнорировать логику».
            </Text>
            <Text style={paragraph}>
              ✨ Рациональная часть отвечает за безопасность и стратегию.{'\n'}
              ✨ Эмоциональная — за энергию, мотивацию и удовольствие.
            </Text>
            <Text style={highlight}>
              Скажите себе вслух: «Я слышу свою рациональную часть. Я слышу свою эмоциональную часть. Обе важны». Это сразу снижает внутренний конфликт.
            </Text>

            <Hr style={divider} />

            {/* Step 2 */}
            <Text style={stepNumber}>Шаг 2</Text>
            <Text style={stepTitle}>Разделите «эмоции» и «быстрые реакции»</Text>
            <Text style={paragraph}>
              Эмоции ≠ паника или импульс. Настоящая эмоция — это сигнал, а быстрая реакция — это привычка.
            </Text>
            <Text style={highlight}>
              Спросите себя: «Моя эмоция хочет меня защитить — от чего именно?»
            </Text>
            <Text style={paragraph}>
              • страх = «мне важно быть в безопасности»{'\n'}
              • злость = «моя граница нарушена»{'\n'}
              • грусть = «мне важно отпустить или признать потерю»
            </Text>
            <Text style={paragraph}>
              Когда эмоция становится понятным сигналом, её больше не нужно подавлять.
            </Text>

            <Hr style={divider} />

            {/* Step 3 */}
            <Text style={stepNumber}>Шаг 3</Text>
            <Text style={stepTitle}>Спросите обе части про одно и то же решение</Text>
            <Text style={paragraph}>
              Возьмите ситуацию, где вы застряли. И задайте два вопроса:{'\n'}
              ✔️ Эмоциональной части: «Что ты пытаешься защитить или сохранить?»{'\n'}
              ✔️ Рациональной части: «Что будет самым разумным и долгосрочно полезным?»
            </Text>
            <Text style={highlight}>
              Ключ: не выбирать одну из них, а искать то, что удовлетворяет обе.
            </Text>
            <Text style={paragraph}>
              Пример: Эмоция — «Мне страшно менять работу». Логика — «Эта работа давно не даёт роста». Решение: «Сначала ищу новый вариант, а потом ухожу» — и эмоция спокойна, и логика довольна.
            </Text>

            <Hr style={divider} />

            {/* Step 4 */}
            <Text style={stepNumber}>Шаг 4</Text>
            <Text style={stepTitle}>Найдите «третье решение»</Text>
            <Text style={highlight}>
              📌 Есть правило: если две части спорят — всегда есть третье решение, которое они обе готовы принять.
            </Text>
            <Text style={paragraph}>
              Это не компромисс, где обе страдают. Это точка, где обе части чувствуют: «со мной считаются», «я не игнорирована», «решение безопасно и правильно».
            </Text>
            <Text style={paragraph}>
              Простой вопрос: «Какое действие устроит нас обеих?» — Разум удивительно быстро выдаёт ответ.
            </Text>

            <Hr style={divider} />

            {/* Step 5 */}
            <Text style={stepNumber}>Шаг 5</Text>
            <Text style={stepTitle}>Дайте себе 24 часа перед серьёзным выбором</Text>
            <Text style={paragraph}>
              Внутренние части успевают «синхронизироваться», эмоции — успокоиться, логика — перестроиться.
            </Text>
            <Text style={highlight}>
              24 часа — идеальный интервал, чтобы решение стало гармоничным, а не реактивным.
            </Text>

            <Hr style={divider} />

            {/* Step 6 */}
            <Text style={stepNumber}>Шаг 6</Text>
            <Text style={stepTitle}>Если решение правильно — вы чувствуете два состояния</Text>
            <Text style={paragraph}>
              ✨ Спокойствие — эмоциональная часть довольна.{'\n'}
              ✨ Чёткость и ясность — рациональная часть согласна.
            </Text>
            <Text style={highlight}>
              Если внутри нет борьбы — вы приняли верное решение.
            </Text>

            <Hr style={divider} />

            {/* CTA */}
            <Text style={paragraph}>
              Полная версия гайда с примерами и практиками — по кнопке ниже:
            </Text>

            <Section style={buttonContainer}>
              <Button
                style={button}
                href="https://www.notion.so/3616c400a058806ab9f6edc9d7761e2d"
              >
                Читать полный гайд →
              </Button>
            </Section>

            <Hr style={divider} />

            <Text style={paragraph}>
              <strong>Если чувствуете, что нужна помощь специалиста</strong> — я всегда готов помочь на консультации. Просто напишите в Telegram кодовое слово «Перезапуск».
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
              С уважением,{'\n'}
              Михаил — Профессиональная гипнотерапия
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
  fontSize: '22px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '0 0 8px 0',
};

const headerSub = {
  color: 'rgba(255,255,255,0.85)',
  fontSize: '15px',
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
  fontSize: '15px',
  lineHeight: '24px',
  color: '#495057',
  marginBottom: '16px',
  whiteSpace: 'pre-line' as const,
};

const stepNumber = {
  fontSize: '12px',
  fontWeight: 'bold',
  color: '#764ba2',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
  margin: '0 0 4px 0',
};

const stepTitle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#2c3e50',
  margin: '0 0 12px 0',
};

const highlight = {
  fontSize: '15px',
  lineHeight: '22px',
  color: '#2c3e50',
  backgroundColor: '#f3f0ff',
  borderLeft: '4px solid #764ba2',
  padding: '12px 16px',
  borderRadius: '0 6px 6px 0',
  marginBottom: '16px',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '24px 0',
};

const button = {
  backgroundColor: '#764ba2',
  borderRadius: '50px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  padding: '14px 32px',
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
  borderColor: '#e9ecef',
  margin: '24px 0',
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
  whiteSpace: 'pre-line' as const,
};
