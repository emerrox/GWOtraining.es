import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutGwoSection } from '@/components/sections/about-gwo-section';
import { CoursesSection } from '@/components/sections/courses-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutGwoSection />
        <CoursesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
