"use client";

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import HeroBackground from '../HeroBackground';

export const HeroSection = () => {
  return (
    <Section
      variant="dark"
      padding="xl"
      className="min-h-screen flex items-center bg-gradient-to-br from-[var(--primary-black)] via-[var(--charcoal)] to-[var(--primary-black)]"
    >
      {/* 背景レイヤー */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary-black)]/50 to-[var(--primary-black)] opacity-50" />
        <HeroBackground />
      </div>

      {/* コンテンツ */}
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <HeroContent />
          <HeroVisual />
        </div>
      </Container>

      {/* 装飾ライン */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-gold)]/50 to-transparent" />
    </Section>
  );
};