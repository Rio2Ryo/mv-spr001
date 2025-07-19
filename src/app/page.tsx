import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import UsageSection from '@/components/sections/UsageSection';
import CostComparisonSection from '@/components/sections/CostComparisonSection';
import ScienceSection from '@/components/sections/ScienceSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <UsageSection />
        <CostComparisonSection />
        <ScienceSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}