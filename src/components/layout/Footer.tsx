import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Heading, Caption } from '@/components/ui/Typography';

const Footer = () => {
  const footerLinks = [
    { href: '#', label: 'プライバシーポリシー' },
    { href: '#', label: '特定商取引法' },
    { href: '#', label: '会社概要' },
    { href: '#', label: 'お問い合わせ' },
    { href: '#', label: 'よくある質問' },
  ];

  return (
    <footer className="bg-[var(--primary-black)] text-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="text-center">
          <Heading className="text-white mb-6 sm:mb-8">
            Mother Vegetable
          </Heading>
          
          <nav className="mb-6 sm:mb-8">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-[var(--light-gray)] hover:text-accent-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <Caption className="text-[var(--warm-gray)]">
            © 2024 Mother Vegetable. All rights reserved.
          </Caption>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;