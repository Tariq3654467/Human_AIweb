import BenefitsHero from '@/components/benefits/BenefitsHero';
import CMO from '@/components/benefits/CMO';
import VP from '@/components/benefits/VP';
import CEO from '@/components/benefits/CEO';
import ROI from '@/components/benefits/ROI';
import Strategic from '@/components/benefits/Strategic';
import IdealProfile from '@/components/benefits/IdealProfile';

export default function BenefitsPage() {
  return (
    <main className="mt-20 relative z-10">
      <BenefitsHero />
      <CMO />
      <VP />
      <CEO />
      <ROI />
      <Strategic />
      <IdealProfile />
    </main>
  );
}

