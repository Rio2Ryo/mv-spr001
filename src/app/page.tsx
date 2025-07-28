import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/hero';

// 動的インポートでコード分割
const ProblemSection = dynamic(() => import('@/components/sections/ProblemSection'));
const SolutionSection = dynamic(() => import('@/components/sections/SolutionSection'));
const UsageSection = dynamic(() => import('@/components/sections/UsageSection'));
const CostComparisonSection = dynamic(() => import('@/components/sections/CostComparisonSection'));
const ScienceSection = dynamic(() => import('@/components/sections/ScienceSection'));
const BenefitsSection = dynamic(() => import('@/components/sections/BenefitsSection'));
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'));
const CTASection = dynamic(() => import('@/components/sections/CTASection'));

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20 md:pt-24">
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