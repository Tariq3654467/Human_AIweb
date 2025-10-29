import OnboardingHero from '@/components/onboarding/OnboardingHero';
import Phase1 from '@/components/onboarding/Phase1';
import Phase2 from '@/components/onboarding/Phase2';
import Phase3 from '@/components/onboarding/Phase3';
import Phase4 from '@/components/onboarding/Phase4';

export default function OnboardingPage() {
  return (
    <main className="mt-20 relative z-10">
      <OnboardingHero />
      <Phase1 />
      <Phase2 />
      <Phase3 />
      <Phase4 />
    </main>
  );
}
