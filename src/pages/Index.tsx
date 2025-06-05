import HeroSection from "@/components/HeroSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import PoliticalViewsSection from "@/components/PoliticalViewsSection";
import HistorySection from "@/components/HistorySection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PrinciplesSection />
      <PoliticalViewsSection />
      <HistorySection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
