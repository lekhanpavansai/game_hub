import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import TournamentPreview from "@/components/home/TournamentPreview";
import LeaderboardPreview from "@/components/home/LeaderboardPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TournamentPreview />
      <LeaderboardPreview />
    </div>
  );
};

export default Index;
