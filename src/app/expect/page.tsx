import ExpectHero from '@/components/expect/ExpectHero';
import HowWeBegin from '@/components/expect/HowWeBegin';
import DuringImplementation from '@/components/expect/DuringImplementation';
import AfterGoLive from '@/components/expect/AfterGoLive';
import InvestmentReturns from '@/components/expect/InvestmentReturns';

export default function ExpectPage() {
  return (
    <main className="mt-16">
      <ExpectHero />
      <HowWeBegin />
      <DuringImplementation />
      <AfterGoLive />
      <InvestmentReturns />
    </main>
  );
}

