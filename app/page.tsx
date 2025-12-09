import Image from 'next/image';
import VideoCarousel from './components/VideoCarousel';
import ParticlesBackground from './components/ParticlesBackground';

export default function Home() {

  const testimonials = [
    {
      id: '1',
      title: 'Отзыв Elena',
      youtubeId: 'K8YPEOkdExg', // Replace with actual testimonial video IDs
    },
    {
      id: '2',
      title: 'Отзыв клиента 2',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual testimonial video IDs
    },
    {
      id: '3',
      title: 'Отзыв клиента 3',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual testimonial video IDs
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
