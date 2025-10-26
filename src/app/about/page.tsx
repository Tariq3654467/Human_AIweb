import AboutHero from '@/components/about/AboutHero';
import Mission from '@/components/about/Mission';
import Vision from '@/components/about/Vision';
import WhyNow from '@/components/about/WhyNow';
import Approach from '@/components/about/Approach';
import Different from '@/components/about/Different';
import CoreValues from '@/components/about/CoreValues';

export default function AboutPage() {
  return (
    <main className="mt-16">
      <AboutHero />
      <Mission />
      <Vision />
      <WhyNow />
      <Approach />
      <Different />
      <CoreValues />
    </main>
  );
}

