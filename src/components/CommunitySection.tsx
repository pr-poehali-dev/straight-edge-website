import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CommunitySection = () => {
  const benefits = [
    {
      icon: "Heart",
      title: "Здоровье",
      description: "Улучшение физического и психического здоровья",
    },
    {
      icon: "DollarSign",
      title: "Экономия",
      description: "Значительная экономия денежных средств",
    },
    {
      icon: "Clock",
      title: "Время",
      description: "Больше времени для развития и творчества",
    },
    {
      icon: "Smile",
      title: "Отношения",
      description: "Более глубокие и искренние отношения",
    },
  ];

  const resources = [
    {
      title: "Музыка",
      description: "Straight Edge группы и лейблы",
      icon: "Music2",
    },
    {
      title: "Сообщества",
      description: "Онлайн и оффлайн сообщества",
      icon: "Users",
    },
    {
      title: "Литература",
      description: "Книги и статьи о философии",
      icon: "BookOpen",
    },
    {
      title: "События",
      description: "Концерты и встречи",
      icon: "Calendar",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Современная жизнь
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Straight Edge сегодня — это глобальное сообщество людей, выбравших
            сознательную и здоровую жизнь
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit.icon} className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ресурсы и поддержка
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={resource.icon}
                    className="text-gray-600"
                    size={32}
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h4>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-blue-600 rounded-xl p-8 md:p-12 text-white">
          <Icon name="Star" className="mx-auto mb-6" size={48} />
          <h3 className="text-3xl font-bold mb-6">Присоединяйся к движению</h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Начни свой путь к более чистой, здоровой и осознанной жизни уже
            сегодня
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Найти сообщество
              <Icon name="MapPin" className="ml-2" size={20} />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-white hover:bg-blue-700"
            >
              Узнать больше
              <Icon name="ExternalLink" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
