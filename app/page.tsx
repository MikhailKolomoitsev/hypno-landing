'use client';

import Image from 'next/image';
import { useState } from 'react';
import VideoCarousel from './components/VideoCarousel';
import ParticlesBackground from './components/ParticlesBackground';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Гайд отправлен на ваш email! Проверьте входящие.' });
        setEmail('');
      } else {
        setMessage({ type: 'error', text: data.error || 'Что-то пошло не так. Попробуйте снова.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Ошибка подключения. Попробуйте позже.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const testimonials = [
    {
      id: '1',
      title: 'Відгук Оля',
      youtubeId: 'gpPFMAvc2vI', // Replace with actual testimonial video IDs
    },
    {
      id: '2',
      title: '',
      youtubeId: 'Q_HsnObwtwI', // Replace with actual testimonial video IDs
    },
    {
      id: '3',
      title: 'Отзыв Валерия',
      youtubeId: 'Q5sK6CtgGjk', // Replace with actual testimonial video IDs
    },
    {
      id: '4',
      title: 'Отзыв Elena',
      youtubeId: 'K8YPEOkdExg', // Replace with actual testimonial video IDs
    },
    {
      id: '5',
      title: 'Отзыв Александр',
      youtubeId: '4l5cSAPt57U', // Replace with actual testimonial video IDs
    },
    {
      id: '6',
      title: '',
      youtubeId: '-1Ms6Jk2V2M', // Replace with actual testimonial video IDs
    },
    {
      id: '7',
      title: '',
      youtubeId: 'FQ40Du6B4mA', // Replace with actual testimonial video IDs
    },

  ];

  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">
            Трансформация через
            <span className="block text-green-400 mt-2">Гипнотерапию</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
            Откройте путь к внутренней гармонии и освободитесь от того, что вас сдерживает
          </p>
        </div>

        {/* Introduction Video Section */}
        <div className="mb-12 sm:mb-16">
          <div className="max-w-4xl mx-auto px-2 sm:px-4">
            <div className="aspect-video w-full rounded-lg sm:rounded-xl overflow-hidden shadow-xl sm:shadow-2xl bg-black mb-6 sm:mb-8">
              <iframe
                src="https://www.youtube.com/embed/QXFHEe83-EA"
                title="Введение в гипнотерапию"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* CTA Button */}
            <div className="flex justify-center px-4">
              <a
                href="https://t.me/mykhailo_elmejor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-black bg-green-400 rounded-full hover:bg-green-300 active:bg-green-500 transition-all duration-200 shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/60 hover:scale-105 active:scale-100 w-full sm:w-auto max-w-sm"
              >
                <Image
                  src="/telegram-svgrepo-com.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                />
                Забронировать сессию
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-3 sm:mb-4 px-4">
            Отзывы клиентов
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Истории людей, которые изменили свою жизнь благодаря гипнотерапии
          </p>
          <VideoCarousel testimonials={testimonials} />
        </div>

        {/* Email Guide Section */}
        <div className="mt-16 sm:mt-20 md:mt-24 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm rounded-xl border border-purple-400/30 p-6 sm:p-8 md:p-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Получить гайд по Решениям
              </h2>
              <p className="text-base sm:text-lg text-gray-300">
                Узнайте, как подружить эмоциональную и рациональную часть и принимать решения во благо себе
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Введите ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105 active:scale-100 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Отправка...' : 'Получить гайд'}
              </button>
            </form>
            {message && (
              <div className={`mt-4 text-center px-4 py-3 rounded-lg ${
                message.type === 'success'
                  ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                  : 'bg-red-500/20 border border-red-500/30 text-red-300'
              }`}>
                {message.text}
              </div>
            )}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 sm:mt-20 md:mt-24 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-green-500/20">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Безопасно</h3>
              <p className="text-sm sm:text-base text-gray-300">Раскопаем только Ваше, ничего "чужого" закладывать не будем(это почти невозможно)</p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-green-500/20">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Эффективно</h3>
              <p className="text-sm sm:text-base text-gray-300">Быстрые результаты уже после первых сессий. <strong>Нет результата - возвращаю деньги</strong></p>
            </div>

            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-green-500/20 sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Индивидуально</h3>
              <p className="text-sm sm:text-base text-gray-300">Персональный подход к каждому клиенту</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-green-500/20 mt-16 sm:mt-20 md:mt-24 py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center text-sm sm:text-base text-gray-300">
          <p>Профессиональная гипнотерапия</p>
        </div>
      </footer>
    </div>
  );
}
