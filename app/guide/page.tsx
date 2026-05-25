import Image from 'next/image';
import Link from 'next/link';

export default function Guide() {
  return (
    <div className="min-h-screen relative">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 relative z-10">
        {/* Navigation Back */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Вернуться на главную
          </Link>
        </div>

        {/* Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 px-8 sm:px-12 py-12 sm:py-16 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              ГАЙД: Как подружить эмоциональную и рациональную часть
            </h1>
            <p className="text-lg sm:text-xl text-white/95 font-light">
              и научиться принимать решения во благо себе
            </p>
          </div>

          {/* Content */}
          <div className="px-6 sm:px-10 md:px-12 py-10 sm:py-14">
            {/* Intro */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-10 border-l-4 border-purple-600">
              <p className="text-gray-700 mb-4">
                <strong>Большинство внутренних конфликтов возникает не потому, что вы «не знаете, что делать»,</strong> а потому что рациональная и эмоциональная части хотят разного.
              </p>

              <div className="bg-white rounded-xl p-5 my-5 shadow-sm">
                <p className="text-blue-600 italic mb-3">
                  Рациональная часть говорит: «Так будет правильно».
                </p>
                <p className="text-red-600 italic">
                  Эмоциональная отвечает: «А мне страшно/тяжело/не хочется».
                </p>
              </div>

              <p className="text-gray-700 mb-3"><strong>И вы зависаете.</strong></p>
              <p className="text-gray-700">
                Ниже — короткий, но рабочий алгоритм, который поможет им перестать тянуть вас в разные стороны.
              </p>
            </div>

            {/* Divider */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent my-10"></div>

            {/* Step 1 */}
            <div className="mb-12 relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
                Признайте обе части как важные
              </h2>
              <p className="text-gray-700 mb-4">
                Ошибка большинства — пытаться либо «заткнуть эмоции», либо «игнорировать логику».
              </p>

              <div className="bg-gray-50 rounded-xl p-5 my-5">
                <p className="text-gray-800 font-semibold mb-3">Истина простая:</p>
                <ul className="space-y-2">
                  <li className="pl-8 relative text-gray-700">
                    <span className="absolute left-0">✨</span>
                    Рациональная часть отвечает за безопасность и стратегию.
                  </li>
                  <li className="pl-8 relative text-gray-700">
                    <span className="absolute left-0">✨</span>
                    Эмоциональная — за энергию, мотивацию и удовольствие.
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mb-5">
                Если обесценивать одну из них — решения будут либо сухими и безжизненными, либо хаотичными и эмоциональными.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <p className="text-green-900 font-semibold mb-2">Скажите себе вслух:</p>
                <p className="text-green-900 mb-2">
                  «Я слышу свою рациональную часть. Я слышу свою эмоциональную часть. Обе важны».
                </p>
                <p className="text-green-800 italic">
                  Это сразу снижает внутренний конфликт.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent my-10"></div>

            {/* Step 2 */}
            <div className="mb-12 relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
                Разделите "эмоции" и "быстрые реакции"
              </h2>
              <p className="text-gray-700 mb-4"><strong>Эмоции ≠ паника или импульс.</strong></p>
              <p className="text-gray-700 mb-5">
                Настоящая эмоция — это сигнал, а быстрая реакция — это привычка.
              </p>

              <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 my-5">
                <p className="text-yellow-900 font-semibold mb-2">Чтобы различить, спросите себя:</p>
                <p className="text-yellow-900">«Моя эмоция хочет меня защитить — от чего именно?»</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5 my-5">
                <p className="text-gray-800 font-semibold mb-3">Например:</p>
                <p className="text-gray-700 mb-1">• страх = «мне важно быть в безопасности»</p>
                <p className="text-gray-700 mb-1">• злость = «моя граница нарушена»</p>
                <p className="text-gray-700">• грусть = «мне важно отпустить или признать потерю»</p>
              </div>

              <p className="text-gray-700">
                Когда эмоция становится понятным сигналом, её больше не нужно подавлять.
              </p>
            </div>

            {/* Divider */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent my-10"></div>

            {/* Step 3 */}
            <div className="mb-12 relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
                Спросите обе части про одно и то же решение
              </h2>
              <p className="text-gray-700 mb-5">
                Возьмите ситуацию, где вы застряли. И задайте два вопроса:
              </p>

              <div className="bg-gray-50 rounded-xl p-5 my-5">
                <p className="text-gray-800 mb-2">
                  <strong>✔️ Эмоциональной части:</strong> «Что ты пытаешься защитить или сохранить?»
                </p>
                <p className="text-gray-800">
                  <strong>✔️ Рациональной части:</strong> «Что будет самым разумным и долгосрочно полезным?»
                </p>
              </div>

              <p className="text-gray-700 mb-5">
                <strong>Ключ:</strong> не выбирать одну из них, а искать то, что удовлетворяет обе.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
                <p className="text-gray-800 font-semibold mb-2">Пример:</p>
                <p className="text-gray-700 mb-1">Эмоция: «Мне страшно менять работу».</p>
                <p className="text-gray-700 mb-2">Логика: «Эта работа давно не даёт роста».</p>
                <p className="text-gray-800">
                  <strong>Решение:</strong> «Сначала ищу новый вариант, а потом ухожу» — и эмоция спокойна, и логика довольна.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent my-10"></div>

            {/* Step 4 */}
            <div className="mb-12 relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                4
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
                Найдите "третье решение"
              </h2>

              <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-5">
                <p className="text-green-900">
                  <strong>📌 Есть правило:</strong> если две части спорят — всегда есть третье решение, которое они обе готовы принять.
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                Это не компромисс, где обе страдают. Это точка, где обе части чувствуют:
              </p>
              <ul className="space-y-2 mb-5 text-gray-700">
                <li>• «со мной считаются»</li>
                <li>• «я не игнорирована»</li>
                <li>• «решение безопасно и правильно»</li>
              </ul>

              <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
                <p className="text-yellow-900 font-semibold mb-2">Простой вопрос:</p>
                <p className="text-yellow-900 mb-2">«Какое действие устроит нас обеих?»</p>
                <p className="text-yellow-800 italic">Разум удивительно быстро выдаёт ответ.</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent my-10"></div>

            {/* Step 5 */}
            <div className="mb-12 relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                5
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
                Дайте себе 24 часа перед серьёзным выбором
              </h2>
              <p className="text-gray-700 mb-4">
                Внутренние части успевают "синхронизироваться", эмоции — успокоиться, логика — перестроиться.
              </p>
              <p className="text-gray-700">
                <strong>24 часа — идеальный интервал, чтобы решение стало гармоничным, а не реактивным.</strong>
              </p>
            </div>

            {/* Divider */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent my-10"></div>

            {/* Step 6 */}
            <div className="mb-12 relative pl-16">
              <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                6
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
                Если решение правильно — вы чувствуете два состояния
              </h2>

              <div className="flex flex-col sm:flex-row gap-5 my-5">
                <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">✨ Спокойствие</h3>
                  <p className="text-gray-600">(эмоциональная часть)</p>
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">✨ Чёткость и ясность</h3>
                  <p className="text-gray-600">(рациональная часть)</p>
                </div>
              </div>

              <p className="text-gray-700">
                <strong>Если внутри нет борьбы — вы приняли верное решение.</strong>
              </p>
            </div>

            {/* Divider */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent my-10"></div>

            {/* CTA Section */}
            <div className="bg-gray-800 text-white rounded-2xl p-8 sm:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5">
                Это работает у большинства людей, но...
              </h2>
              <p className="mb-5">Если вы:</p>
              <ul className="space-y-3 mb-6 text-left max-w-xl mx-auto">
                <li className="pl-8 relative">
                  <span className="absolute left-0 text-purple-400">•</span>
                  понимаете, что надо делать, но всё равно саботируете
                </li>
                <li className="pl-8 relative">
                  <span className="absolute left-0 text-purple-400">•</span>
                  чувствуете сильный внутренний конфликт
                </li>
                <li className="pl-8 relative">
                  <span className="absolute left-0 text-purple-400">•</span>
                  эмоции «захватывают управление» и не отпускают
                </li>
                <li className="pl-8 relative">
                  <span className="absolute left-0 text-purple-400">•</span>
                  не получается слышать себя или доверять себе
                </li>
                <li className="pl-8 relative">
                  <span className="absolute left-0 text-purple-400">•</span>
                  повторяете одни и те же сценарии
                </li>
              </ul>

              <p className="mb-4"><strong>значит, дело не в вашей воле.</strong></p>
              <p className="mb-4">
                Просто есть глубинная подсознательная программа, которая не даёт этим частям договориться.
              </p>
              <p className="mb-8">
                И как только её снять — решения становятся естественными, спокойными и лёгкими.
              </p>

              <div className="border-t border-white/20 pt-8 mt-8">
                <p className="font-semibold mb-5">
                  Если чувствуете, что хотите научиться этому глубже — приходите на консультацию.
                </p>

                <p className="mb-4">На стратегической сессии мы:</p>
                <ul className="space-y-3 mb-8 text-left max-w-xl mx-auto">
                  <li className="pl-8 relative">
                    <span className="absolute left-0 text-purple-400">•</span>
                    разберём именно ваш конфликт рационального и эмоционального
                  </li>
                  <li className="pl-8 relative">
                    <span className="absolute left-0 text-purple-400">•</span>
                    найдём, что блокирует гармонию
                  </li>
                  <li className="pl-8 relative">
                    <span className="absolute left-0 text-purple-400">•</span>
                    определим, что нужно, чтобы решения стали лёгкими и экологичными
                  </li>
                  <li className="pl-8 relative">
                    <span className="absolute left-0 text-purple-400">•</span>
                    и вы увидите, где именно находится точка внутреннего перекоса
                  </li>
                </ul>

                <p className="mb-4">
                  <strong>Если хотите — просто напишите кодовое слово «Перезапуск».</strong>
                </p>
                <p className="mb-6">
                  Я помогу вам вернуть внутреннюю ясность и настоящую опору.
                </p>

                <a
                  href="https://t.me/mykhailo_elmejor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-green-400 rounded-full hover:bg-green-300 active:bg-green-500 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-100"
                >
                  <Image
                    src="/telegram-svgrepo-com.svg"
                    alt="Telegram"
                    width={24}
                    height={24}
                    className="w-6 h-6 mr-2"
                  />
                  Связаться со мной
                </a>
              </div>
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
