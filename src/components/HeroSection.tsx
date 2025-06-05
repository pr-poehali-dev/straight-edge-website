import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
            STRAIGHT
            <span className="block text-blue-600">EDGE</span>
          </h1>

          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Философия чистого образа жизни. Без алкоголя, наркотиков и курения.
            Ясность мысли, чистота тела, сила духа.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            Узнать больше
            <Icon name="ArrowDown" className="ml-2" size={20} />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 text-gray-700 px-8 py-3 text-lg"
          >
            Сообщество
            <Icon name="Users" className="ml-2" size={20} />
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100">
            <Icon name="Zap" className="mx-auto mb-4 text-blue-600" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">Энергия</h3>
            <p className="text-gray-600 text-sm">
              Чистая энергия без стимуляторов
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100">
            <Icon
              name="Brain"
              className="mx-auto mb-4 text-blue-600"
              size={32}
            />
            <h3 className="font-semibold text-gray-900 mb-2">Ясность</h3>
            <p className="text-gray-600 text-sm">
              Четкость мышления и восприятия
            </p>
          </div>

          <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100">
            <Icon
              name="Shield"
              className="mx-auto mb-4 text-blue-600"
              size={32}
            />
            <h3 className="font-semibold text-gray-900 mb-2">Контроль</h3>
            <p className="text-gray-600 text-sm">
              Полный контроль над своей жизнью
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
