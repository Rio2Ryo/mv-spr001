import type { Metadata } from "next";
import { 
  Cormorant_Garamond, 
  Montserrat, 
  Noto_Sans_JP,
  Inter,
  DM_Sans 
} from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['200', '300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-japanese',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-number',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "いつもの食事に、完璧な栄養を。 | Mother Vegetable",
  description: "カレー、スープ、スムージー。どんな料理にも溶け込む、味を邪魔しない栄養補助食品。高価な健康食品を買い揃える必要は、もうありません。",
  keywords: "Mother Vegetable, 栄養補助食品, オーガニック, 健康食品, 完全栄養",
  openGraph: {
    title: "Mother Vegetable - いつもの食事に、完璧な栄養を。",
    description: "35億年の生命の源から生まれた究極の栄養補助食品",
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} ${notoSansJP.variable} ${inter.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}