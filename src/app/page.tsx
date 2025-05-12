import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactForm } from "@/components/sections/contact-form"; // Assuming ContactForm is the component for the contact section UI

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <section id="contact" className="bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            {/* ContactSection could wrap ContactForm if more elements are needed around it */}
            {/* For now, ContactForm serves as the section content */}
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
