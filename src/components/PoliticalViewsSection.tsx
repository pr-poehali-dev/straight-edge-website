import Icon from "@/components/ui/icon";

const PoliticalViewsSection = () => {
  const politicalViews = [
    {
      icon: "Building2",
      title: "Антикорпоративность",
      description:
        "Противостояние крупным корпорациям, которые наживаются на зависимостях. Поддержка местного бизнеса и независимых производителей.",
      color: "text-red-600",
    },
    {
      icon: "Hammer",
      title: "DIY-этика",
      description:
        "«Сделай сам» — философия самостоятельности и независимости. Создание собственной музыки, медиа и сообществ без корпоративного вмешательства.",
      color: "text-blue-600",
    },
    {
      icon: "Leaf",
      title: "Экологическое сознание",
      description:
        "Забота об окружающей среде через осознанное потребление. Многие straight edge активисты поддерживают веганство и защиту животных.",
      color: "text-green-600",
    },
    {
      icon: "Users",
      title: "Социальная справедливость",
      description:
        "Борьба против неравенства, дискриминации и социальной несправедливости. Поддержка угнетенных групп и меньшинств.",
      color: "text-purple-600",
    },
    {
      icon: "Shield",
      title: "Антиавторитарность",
      description:
        "Критика власти и установленной системы. Стремление к личной свободе и независимости от навязанных обществом норм.",
      color: "text-orange-600",
    },
    {
      icon: "Heart",
      title: "Права животных",
      description:
        "Защита животных от эксплуатации и жестокости. Веганство как этический выбор многих представителей движения.",
      color: "text-pink-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Политические взгляды
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Straight Edge — это не только личный выбор, но и политическая
            позиция. Движение часто связано с левыми взглядами и активизмом за
            социальные изменения
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {politicalViews.map((view, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
            >
              <div
                className={`w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 ${view.color}`}
              >
                <Icon name={view.icon} size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {view.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {view.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 md:p-12 text-white">
          <div className="text-center">
            <Icon
              name="Megaphone"
              className="mx-auto mb-6 text-yellow-400"
              size={48}
            />
            <h3 className="text-3xl font-bold mb-6">
              Активизм и сопротивление
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Straight Edge активисты часто участвуют в протестах против войны,
              поддерживают права рабочих и выступают против капиталистической
              эксплуатации. Движение видит связь между личной чистотой и
              политической борьбой.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-gray-700 px-4 py-2 rounded-full">
                Антивоенные протесты
              </span>
              <span className="bg-gray-700 px-4 py-2 rounded-full">
                Права рабочих
              </span>
              <span className="bg-gray-700 px-4 py-2 rounded-full">
                Феминизм
              </span>
              <span className="bg-gray-700 px-4 py-2 rounded-full">
                ЛГБТ+ права
              </span>
              <span className="bg-gray-700 px-4 py-2 rounded-full">
                Расовое равенство
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliticalViewsSection;
