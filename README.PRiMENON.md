# README.PRiMENON.md

[![Netlify Status](https://api.netlify.com/api/v1/badges/d57f558a-0e14-49a9-848d-ed5a8d1fa8c6/deploy-status)](https://app.netlify.com/sites/soft-quokka-8ff4c0/deploys)

[動作デモ](https://soft-quokka-8ff4c0.netlify.app/)

このリポジトリは、[gatsbyjs/gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) をフォークし、さらに PRiMENON がカスタマイズした状態です。
Gatsby.js 公式が更新されたら、最新状態に追従します。

## リポジトリ構成
```
[gatsbyjs/gatsby-starter-blog]
    |
    | forked
    |
    `-- [PRiMENON/gatsby-starter-blog] (A)このリポジトリ

[PRiMENON/primenon.github.io] (B)
```

* (A) https://github.com/PRiMENON/gatsby-starter-blog
    * 導入したい機能を開発、トライアンドエラーするサンドボックス的位置づけです。公式リポジトリに対してはマージしません。
* (B) https://github.com/PRiMENON/primenon.github.io
    * (A)で問題なければ動作した機能を導入します。

## gatsby-starter-blog にない、新たに追加した機能

* タグ機能
* URLを記事の日付ベースに変更する
* 下書き機能
* 一部の画像ファイル表示機能
* OGP（Open Graph Protocol） - 動作デモを[OGP確認ツール](https://ogp.buta3.net/)等でお試しください。

## 修正

* [gatsby developでブラウザのdevtool consoleに表示されるエラー修正](https://github.com/PRiMENON/gatsby-starter-blog/pull/3)

## gatsby-starter-blog にはない、このリポジトリのみに必要な点

以下は、`gatsby-starter-blog` でインストールされていません。このリポジトリの運用のためにインストールしています。

* `package.json` にある `gh-pages` 
    * このリポジトリを netlify 経由で閲覧できるようにします。
* `package.json` の `scripts` にある `github-pages`
    * `gh-pages`を実行して `public` ディレクトリを `gh-pages` ブランチにコミットし、netlify で閲覧できるようにします。

## 留意事項

* 最新の環境で動作することを目的としています
* gatsby.js 公式が提供するプラグインを使用します
* Gatsby.js 公式が更新したことで機能が動作しなくなることがあります

## ライセンス

* gatsby-starter-blog のフォークは BSD Zero Clause License
* サンプルとして使用している画像は Public Domain または Creative Commons CC0 1.0
