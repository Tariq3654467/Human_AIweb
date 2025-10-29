import Hero from '@/components/home/Hero';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionSection from '@/components/home/SolutionSection';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';
import SectionProgress from '@/components/SectionProgress';

export default function Home() {
  return (
    <main className="relative z-10 mt-20">
      
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <Testimonials />
      <CTA />
      
      {/* Section Progress Indicator */}
      <SectionProgress currentSection={1} totalSections={5} />
    </main>
  );
}
