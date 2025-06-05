import Icon from "@/components/ui/icon";

const HistorySection = () => {
  const timeline = [
    {
      year: "1981",
      title: "Рождение движения",
      description:
        'Minor Threat выпускает песню "Straight Edge", давшую название всему движению',
    },
    {
      year: "1980s",
      title: "Хардкор-панк сцена",
      description:
        "Движение распространяется в хардкор-панк сообществе как альтернатива наркокультуре",
    },
    {
      year: "1990s",
      title: "Глобальное распространение",
      description:
        "Straight Edge выходит за рамки музыки и становится полноценной философией жизни",
    },
    {
      year: "2000s",
      title: "Современное развитие",
      description:
        "Движение адаптируется к новым реалиям, сохраняя основные принципы",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            История движения
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От хардкор-панк сцены 80-х до глобального движения за здоровый образ
            жизни
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gray-900 rounded-xl p-8 text-white">
              <Icon name="Music" className="mb-6 text-blue-400" size={40} />
              <h3 className="text-2xl font-bold mb-4">Minor Threat</h3>
              <p className="text-gray-300 mb-6">
                Группа из Вашингтона, округ Колумбия, возглавляемая Иэном
                Маккаем, стала основателем движения Straight Edge в 1981 году.
              </p>
              <blockquote className="border-l-4 border-blue-400 pl-4 italic text-blue-200">
                "I don't smoke, I don't drink, I don't fuck
                <br />
                At least I can fucking think"
              </blockquote>
            </div>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.year}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="text-center">
            <Icon
              name="Flame"
              className="mx-auto mb-6 text-orange-600"
              size={48}
            />
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Панк-этика
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Straight Edge возник как ответ на наркокультуру, которая
              доминировала в панк-сцене. Основатели движения видели противоречие
              между бунтарским духом панка и саморазрушительным поведением. Они
              предложили новый путь — бунт через самоконтроль и ясность
              сознания.
            </p>
          </div>
        </div>

        {/* Новый блок о влиянии на панк-молодежь */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Влияние на панк-молодежь
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-8 text-white">
              <Icon name="Users" className="mb-6 text-purple-200" size={40} />
              <h4 className="text-2xl font-bold mb-4">
                Альтернативная идентичность
              </h4>
              <p className="text-purple-100 leading-relaxed">
                Straight Edge предложил молодым панкам новый способ быть
                бунтарем — через самодисциплину и отказ от саморазрушения.
                Движение показало, что можно оставаться панком, не следуя
                стереотипам о наркотиках и алкоголе.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-8 text-white">
              <Icon name="Shield" className="mb-6 text-green-200" size={40} />
              <h4 className="text-2xl font-bold mb-4">
                Защита от саморазрушения
              </h4>
              <p className="text-green-100 leading-relaxed">
                Многие молодые люди в панк-сцене столкнулись с проблемами
                зависимости. Straight Edge стал спасательным кругом, предлагая
                поддержку и сообщество единомышленников без давления употреблять
                вещества.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h5 className="text-lg font-bold text-gray-900 mb-3">
                Музыкальное влияние
              </h5>
              <p className="text-gray-600 text-sm">
                Появились десятки straight edge групп: Youth of Today, Gorilla
                Biscuits, Bold, Judge — музыка стала мощным инструментом
                распространения идей.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <h5 className="text-lg font-bold text-gray-900 mb-3">
                Сцена и концерты
              </h5>
              <p className="text-gray-600 text-sm">
                Straight edge концерты стали безопасными пространствами для
                молодежи, где можно было наслаждаться музыкой без алкоголя и
                наркотиков.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <h5 className="text-lg font-bold text-gray-900 mb-3">
                Молодежные клубы
              </h5>
              <p className="text-gray-600 text-sm">
                Возникли молодежные центры и клубы, ориентированные на straight
                edge аудиторию — места для творчества и общения без вредных
                привычек.
              </p>
            </div>
          </div>
        </div>

        {/* Блок о глобальном распространении среди молодежи */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <Icon
              name="Globe"
              className="mx-auto mb-6 text-blue-400"
              size={48}
            />
            <h3 className="text-3xl font-bold mb-6">
              Молодежное движение по всему миру
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-blue-400 mb-4">
                Распространение в 90-х
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <Icon
                    name="ArrowRight"
                    className="mr-2 mt-1 text-blue-400"
                    size={16}
                  />
                  Европа: straight edge сцены в Великобритании, Германии, Швеции
                </li>
                <li className="flex items-start">
                  <Icon
                    name="ArrowRight"
                    className="mr-2 mt-1 text-blue-400"
                    size={16}
                  />
                  Бразилия: мощное движение среди молодежи в Сан-Паулу
                </li>
                <li className="flex items-start">
                  <Icon
                    name="ArrowRight"
                    className="mr-2 mt-1 text-blue-400"
                    size={16}
                  />
                  Япония: уникальное сочетание с местной панк-культурой
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-blue-400 mb-4">
                Влияние на поколения
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Тысячи молодых людей по всему миру нашли в straight edge не
                просто музыкальный жанр, а образ жизни. Движение помогло многим
                преодолеть давление сверстников и найти силу в трезвости и
                самоконтроле.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
