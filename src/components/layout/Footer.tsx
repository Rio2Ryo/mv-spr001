import Link from 'next/link';

const Footer = () => {
  const footerLinks = [
    { href: '#', label: 'プライバシーポリシー' },
    { href: '#', label: '特定商取引法' },
    { href: '#', label: '会社概要' },
    { href: '#', label: 'お問い合わせ' },
    { href: '#', label: 'よくある質問' },
  ];

  return (
    <footer className="bg-[var(--primary-black)] text-white py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center">
          <h3 className="font-display text-2xl lg:text-3xl font-normal mb-8">
            Mother Vegetable
          </h3>
          
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--light-gray)] hover:text-accent-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <p className="text-xs text-[var(--warm-gray)]">
            © 2024 Mother Vegetable. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;