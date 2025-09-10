import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { Skills3DSection } from "@/components/sections/Skills3DSection";
import { Projects3DSection } from "@/components/sections/Projects3DSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CustomCursor } from "@/components/ui/cursor";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-gradient-cosmic">
        <Navigation />
        <HeroSection />
        <Skills3DSection />
        <Projects3DSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
        
        {/* Ambient Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>
      </div>
    </>
  );
};

export default Index;