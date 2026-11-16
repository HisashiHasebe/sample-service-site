# sample-service-site

[Kurocoビギナーズガイド](https://kuroco.app/ja/docs/tutorials/beginners-guide/) のサンプルサイトです（Nuxt 4 / SPA・静的生成）。

## 動作環境

- Node.js `^22.22.3 || ^24.15.0 || >=26.0.0`（Nuxt 4 の要件）

## セットアップ

```bash
npm install
```

## 開発サーバー

`APP_ENV` で読み込む設定ファイル（`env.<APP_ENV>.js`）を切り替えます。未指定の場合は `development` になります。

```bash
npm run dev
# http://localhost:3000
```

## 静的生成

```bash
APP_ENV=production npm run generate
# 出力先: .output/public
```

| APP_ENV | 設定ファイル | GitHub Actions |
| --- | --- | --- |
| development | `env.development.js` | `.github/workflows/develop.yml` |
| staging | `env.staging.js` | `.github/workflows/staging.yml` |
| production | `env.production.js` | `.github/workflows/build.yml` |
