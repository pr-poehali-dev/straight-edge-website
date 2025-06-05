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
      </div>
    </section>
  );
};

export default HistorySection;
