import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import DashboardPreview from "@/components/DashboardPreview";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import ExperienceSection from "@/components/ExperienceSection";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg relative">
      <FloatingParticles />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <DashboardPreview />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
