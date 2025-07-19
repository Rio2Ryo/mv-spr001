# Mother Vegetable - 高級栄養補助食品ランディングページ

35億年前から存在する地球最古の生命体から抽出した、完全栄養補助食品「Mother Vegetable」のランディングページです。

## 技術スタック

- **フレームワーク**: Next.js 15.4.2 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **フォント**: 
  - Cormorant Garamond (ディスプレイ用)
  - Montserrat (本文用)
  - Noto Sans JP (日本語用)
  - Inter (数字用)

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm start
```

## Vercelへのデプロイ

このプロジェクトはVercelへのデプロイに最適化されています。

1. [Vercel](https://vercel.com)にアクセスしてアカウントを作成
2. GitHubリポジトリと連携
3. 新しいプロジェクトをインポート
4. ビルド設定はデフォルトのままでOK
5. デプロイボタンをクリック

## プロジェクト構成

```
src/
├── app/
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx        # ホームページ
│   └── globals.css     # グローバルスタイル
└── components/
    ├── layout/
    │   ├── Header.tsx  # ヘッダーコンポーネント
    │   └── Footer.tsx  # フッターコンポーネント
    └── sections/
        ├── HeroSection.tsx           # ヒーローセクション
        ├── HeroBackground.tsx        # ヒーロー背景アニメーション
        ├── ProblemSection.tsx        # 問題提起セクション
        ├── SolutionSection.tsx       # ソリューションセクション
        ├── UsageSection.tsx          # 使い方セクション
        ├── CostComparisonSection.tsx # コスト比較セクション
        ├── ScienceSection.tsx        # 栄養価セクション
        ├── BenefitsSection.tsx       # ベネフィットセクション
        ├── TestimonialsSection.tsx   # お客様の声セクション
        └── CTASection.tsx            # CTAセクション
```

## 主な機能

- レスポンシブデザイン（モバイル・タブレット・デスクトップ対応）
- スムーズスクロールアニメーション
- SVG背景アニメーション
- インタラクティブなホバーエフェクト
- 最適化されたフォントローディング
- SEO最適化

## ライセンス

© 2024 Mother Vegetable. All rights reserved.