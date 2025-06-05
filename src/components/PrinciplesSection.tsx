import Icon from "@/components/ui/icon";

const PrinciplesSection = () => {
  const principles = [
    {
      icon: "Ban",
      title: "Нет алкоголю",
      description:
        "Полный отказ от алкогольных напитков. Трезвость как основа ясного мышления и здорового образа жизни.",
      color: "text-red-600",
    },
    {
      icon: "Cigarette",
      title: "Нет курению",
      description:
        "Отказ от табака и никотина. Чистые легкие и свежее дыхание — основа физического здоровья.",
      color: "text-orange-600",
    },
    {
      icon: "Pill",
      title: "Нет наркотикам",
      description:
        "Полное неприятие любых психоактивных веществ. Естественное состояние сознания — наша сила.",
      color: "text-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Основные принципы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Straight Edge — это не просто отказ от вредных привычек, это
            сознательный выбор в пользу здорового и осознанного образа жизни
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 ${principle.color}`}
              >
                <Icon name={principle.icon} size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
          <div className="text-center">
            <Icon
              name="Target"
              className="mx-auto mb-6 text-blue-600"
              size={48}
            />
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Философия выбора
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Straight Edge — это не ограничения, а освобождение. Освобождение
              от зависимостей, от навязанных обществом стереотипов, от
              необходимости изменять своё сознание искусственными способами. Это
              выбор в пользу аутентичности, самоконтроля и личной силы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
