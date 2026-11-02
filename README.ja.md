# MacBetter — Macを、もっと使いやすく。

[English](README.md) · [中文](README.zh-CN.md) · **日本語**

無料で使えるオープンソースのMac用ツールを、コミュニティで紹介するディレクトリです。用途に合うアプリを探し、動作要件を確認して、公式サイトへ進めます。

**[アプリ一覧を見る](https://ixiehao.github.io/MacBetter/?lang=ja)** · **[おすすめのアプリを紹介する](https://github.com/ixiehao/MacBetter/issues/new?template=recommend-an-app.yml)**

## このサイトでできること

- 用途別の分類、検索、絞り込みでアプリを探す。
- ホバーで画面例を確認し、タッチやキーボードでも拡大表示する。
- 短い紹介文、おすすめポイント、ライセンス、公式の入手先を確認する。
- 英語・中国語・日本語で読む。
- **io実使用**は、iXiehaoが実際に使ったアプリを示します。その他の掲載情報は、公式の公開情報と照合しています。いずれもセキュリティ監査や、すべての環境での動作保証ではありません。

## おすすめのツールを教えてください

ソースリポジトリ、ライセンス、公式の入手先、macOSの要件と、具体的に何が便利なのかを教えてください。必要な権限や制限も添えてください。

ソースが公開され、オープンソースのライセンスが明確で、無料で使える版があり、Macでの実用的な用途があることを確認します。有料の追加機能や、オープンソースではない別製品は、区別して記載します。Star数だけで品質や安全性は判断しません。

リンク切れや古い説明を見つけたら、[Issue](https://github.com/ixiehao/MacBetter/issues/new)またはPull Requestでお知らせください。[貢献ガイド](CONTRIBUTING.md)は中国語で案内しています。

## ローカルで表示する

静的サイトのため、ビルドは不要です。リポジトリのルートで実行します。

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory website
```

<http://127.0.0.1:8000/>を開いてください。アプリ情報は[`website/data/apps.json`](website/data/apps.json)、翻訳は[`website/app.js`](website/app.js)で管理しています。変更時は3言語をそろえてください。[開発・公開の手順](docs/README.md)は中国語で記載しています。

## ライセンスとクレジット

サイトのコードは[MIT](LICENSE)ライセンスです。掲載アプリには各プロジェクトのライセンスが適用され、名称やアイコンの権利は各権利者に帰属します。掲載は、各作者による本サイトの推奨を意味しません。

[InterとNoto Sans](website/assets/fonts/README.md)はSIL OFL 1.1に基づきサイト内で配信し、[Tabler Icons](website/assets/TABLER-ICONS-LICENSE.md)はMITライセンスで使用しています。ioマークについては[ブランド素材の説明](website/assets/BRAND.md)をご覧ください。
