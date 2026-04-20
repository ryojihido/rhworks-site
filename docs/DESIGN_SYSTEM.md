# RHworks Design System

漫画家・氷堂リョージのポートフォリオサイト `edenthedoors.com` のデザインシステム。

---

## 技術スタック

| レイヤー | 技術 |
|---|---|
| フレームワーク | Astro |
| スタイリング | Tailwind CSS |
| インタラクション | Alpine.js + @alpinejs/collapse |
| ホスティング | (site: `https://edenthedoors.com`) |

---

## カラーシステム

`tailwind.config.mjs` の `brand` ネームスペースで定義。

| トークン | 値 | 用途 |
|---|---|---|
| `brand-beige` | `#f5f5f0` | ページ背景（`<body>` のベース） |
| `brand-surface` | `#fafaf9` | カード・セクションの背景 |
| `brand-light` | `#f8f9fa` | - |
| `brand-dark` | `#1a1a1a` | - |
| `brand-gray` | `#4a4a4a` | 本文・ボタン背景 |
| `brand-pink` | `#fbcfe8` | 淡いアクセント（ボーダー・バッジ背景） |
| `brand-pink-accent` | `#f472b6` | 見出しアクセント・ラベル・CTA文字 |
| `brand-accent` | `#7c3aed` | （予備・現時点では未使用） |

### 使用パターン

- **背景階層**: `brand-beige` → `brand-surface` → `white` の3段階
- **テキスト階層**: `gray-900`（見出し） → `brand-gray` → `brand-gray/80` → `brand-gray/70` → `brand-gray/40`（フッター）
- **アクセント**: `brand-pink` を面・ボーダーに、`brand-pink-accent` を文字・アイコンに
- **テキスト選択**: `selection:bg-brand-pink selection:text-brand-pink-accent`（Layout.astro）

---

## タイポグラフィ

### フォントファミリー

| クラス | フォント | 読み込み |
|---|---|---|
| `font-serif` | Noto Serif JP | Google Fonts |
| `font-sans`（デフォルト） | Inter + Noto Sans JP | Google Fonts |

`<body>` に `font-sans` が当たっており、serif は意識的に指定する形。

### サイズ・スタイルパターン

| 役割 | クラス例 |
|---|---|
| ページタイトル (H1) | `text-6xl md:text-8xl font-serif font-bold tracking-tight` |
| セクション見出し (H2) | `text-sm font-bold tracking-[0.3em] uppercase text-brand-pink-accent/80` |
| カード見出し (H3) | `text-3xl font-serif font-bold italic` |
| バッジ・ラベル | `text-[10px] font-bold tracking-[0.2em] uppercase` |
| 本文（serif） | `font-serif text-lg leading-relaxed` |
| キャプション | `text-xs font-serif italic text-brand-gray/60` |

---

## スペーシング

| 単位 | 使用箇所 |
|---|---|
| `space-y-32` | メインコンテンツ各セクション間 |
| `space-y-8` | セクション内ブロック間 |
| `mb-24` | Hero → Contentのマージン |
| `px-8 py-20` | ページ外側パディング（`max-w-4xl mx-auto`） |
| `p-10` | カードの内側パディング |
| `gap-6` | グリッドカード間 |

---

## レイアウト

- **最大幅**: `max-w-4xl mx-auto`（トップページ）、`container mx-auto`（αβlab）
- **グリッド**: `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`（Works）
- **2カラム**: `grid-cols-1 lg:grid-cols-[minmax(0,280px),1fr]`（Recommended作品カード）
- **レスポンシブ**: モバイルファースト。`md:text-left`・`md:flex-row` で切り替え

---

## 角丸システム

全体的に大きな角丸を多用している。

| クラス | 適用箇所 |
|---|---|
| `rounded-full` | バッジ・SNSアイコン・ボタン（丸形） |
| `rounded-2xl` | 標準ボタン・カード |
| `rounded-[2rem]` | 画像ラッパー |
| `rounded-[2.5rem]` | モーダル・Recommendedカード |
| `rounded-[2.75rem]` | Recommended外枠 |
| `rounded-[3rem]` | AI Stanceセクション・αβlab Heroの画像 |
| `rounded-[3.5rem]` | αβlab各セクション |

---

## ボーダー

- 基本: `border border-brand-pink/10` ～ `border-brand-pink/40`
- ホバー時に強調: `hover:border-brand-pink/40`
- セクション区切り: `border-t border-brand-pink/20`

---

## シャドウ

| 用途 | クラス |
|---|---|
| 通常 | `shadow-sm` |
| カードホバー | `hover:shadow-xl` |
| モーダル | `shadow-2xl` |
| CTAボタン押下 | `hover:shadow-xl hover:-translate-y-1` |

---

## インタラクション

### ホバーアニメーション

- スケール: `hover:scale-110`（SNSアイコン）、`group-hover:scale-105`（画像）
- 浮き上がり: `hover:-translate-y-1`（ボタン・リンクカード）
- トランジション: `transition-all duration-300` ～ `duration-700`

### Alpine.js パターン

| パターン | 使用箇所 |
|---|---|
| `x-data="{ lang: 'jp' }"` + `:class` | Profileの JP/EN 切り替え |
| `x-data="{ open: false }"` + `x-show` | Works の展開/折りたたみ |
| `x-data="{ modalOpen: false, activeWork: null }"` + `x-teleport="body"` | Works詳細モーダル |
| `x-data="{ expanded: false }"` + `x-collapse` | AI Stance の Read More |

---

## コンポーネントパターン

### セクション見出し

```html
<h2 class="text-sm font-bold tracking-[0.3em] uppercase text-brand-pink-accent/80">
  Section Title
</h2>
```

### バッジ・ラベル

```html
<div class="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-brand-pink-accent bg-brand-pink/30 rounded-full uppercase">
  Label Text
</div>
```

### プライマリボタン

```html
<a class="inline-block px-8 py-4 bg-brand-gray text-brand-beige rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all text-[11px] tracking-[0.2em] uppercase">
  CTA
</a>
```

### セカンダリボタン

```html
<a class="inline-block px-8 py-4 bg-white border border-brand-pink/30 text-brand-pink-accent rounded-2xl font-bold hover:bg-brand-pink/5 hover:shadow-lg hover:-translate-y-1 transition-all text-[11px] tracking-[0.2em] uppercase">
  Secondary
</a>
```

### カード（Works）

- 背景: `bg-brand-surface/30` → ホバーで `bg-white`
- ボーダー: `border border-brand-pink/10` → `hover:border-brand-pink/40`
- 角丸: `rounded-2xl`
- 画像: `aspect-[3/4]` + ホバーで `scale-110`

### 装飾用背景パターン

- ぼかし円: `absolute ... bg-brand-pink/10 rounded-full` で背景に配置し `group-hover:scale-125` でアニメーション
- グラデーションフェード: `bg-gradient-to-t from-brand-beige ... to-transparent`（Works の省略時フェード）

---

## ページ構成

### トップページ (`/`)

1. **Hero** — 名前・キャッチ・SNSリンク
2. **Profile** — JP/EN切り替えテキスト
3. **Recommended** — フィーチャー作品カード（1点）
4. **Selected Works** — 全作品グリッド + モーダル詳細
5. **Featured Videos** — YouTube 埋め込み
6. **My Stance on AI** — AIポリシー（折りたたみ）
7. **αβlab Promo** — αβlabへのリンクカード
8. **Contact / Location** — メール・所在地

### αβlabページ (`/alphabeta/`)

Astro コンポーネントに分割:
`Hero → Description → CharacterIntro → Rules → FAQ → Gallery → Media → CTA`

### αβlab ガイドライン (`/alphabeta/guidelines/`)

---

## アセット構成

```
public/
  favicon.webp
  images/
    thumbnails/   # 作品サムネイル (jpg/png)
    alphabeta/    # αβlab用画像
    badges/       # 生成AIパスポートバッジ
    sns/          # SNSアイコン (svg)
  og/             # OGP画像 (png/jpg)
  downloads/
    alphabeta/    # キャラクター配布ファイル
```

---

## メタ・SEO

`Layout.astro` に集中管理。Props:

| Prop | デフォルト |
|---|---|
| `title` | 必須 |
| `description` | 必須 |
| `socialImage` | `/og/rhworks-share.png` |
| `socialImageAlt` | `title` と同値 |
| `socialImageWidth` | `1200` |
| `socialImageHeight` | `630` |

OGP (Open Graph) と Twitter Card の両方を設定。`lang="ja"` 固定。

---

## デザインの方向性メモ

- **ベース**: ベージュ系のニュートラルな背景にピンクのアクセント。
- **文体**: 日本語・英語併記を多用。和文はSerif、UIラベルはSansのUPPERCASE。
- **ムード**: 作品ポートフォリオとしての静かな上品さ＋ほのかな温かみ。
- **アニメーション**: 控えめ（`duration-300`〜`700`）。スケールやトランジションで奥行きを演出。
