# README.PRiMENON.md

[![Netlify Status](https://api.netlify.com/api/v1/badges/d57f558a-0e14-49a9-848d-ed5a8d1fa8c6/deploy-status)](https://app.netlify.com/sites/soft-quokka-8ff4c0/deploys)

[動作デモンストレーション](https://soft-quokka-8ff4c0.netlify.app/)

このリポジトリは、[gatsbyjs/gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) をフォークし、さらに PRiMENON がカスタマイズした状態にしてあります。
Gatsby.js の公式の更新があったら、最新状態に追従できるようにしています。

気になる機能があったら、自由に使ってください。

## 用語の定義

* 公式 - gatsby.js の公式リポジトリ、または [gatsbyjs/gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)

## リポジトリ構成
```
[gatsbyjs/gatsby-starter-blog] <-公式
    |
    | forked
    |
    `-- [PRiMENON/gatsby-starter-blog] (A)

[PRiMENON/primenon.github.io] (B)
```

* (A) https://github.com/PRiMENON/gatsby-starter-blog
    * 導入したい機能を開発、トライアンドエラーするサンドボックス的位置づけ。公式リポジトリに対してマージは行いません。
* (B) https://github.com/PRiMENON/primenon.github.io
    * (A)で問題なければ動作した機能を導入、利用する。

## gatsby-starter-blog にはない、新たに追加した機能

* タグ機能
* URLを記事の日付ベースに変更する
* 下書き機能

## 修正

* [gatsby developでブラウザのdevtool consoleに表示されるエラー修正](https://github.com/PRiMENON/gatsby-starter-blog/pull/3)

## gatsby-starter-blog にはない、このリポジトリのみに必要な点

以下は、`gatsby-starter-blog` では使用されていません。このリポジトリの運用のためだけに私がインストールしています。

* `package.json` にあるように `gh-pages` 
    * このリポジトリを netlify 経由で閲覧できるようにします。
* `package.json` にある script `github-pages`
    * 上記に関連するスクリプトです。`gh-pages`を実行して `public` ディレクトリを `gh-pages` ブランチにコミットし、netlify で閲覧できるようにします。

## 留意事項

* 最新の環境で動作することを目的としています
* 機能追加は極力、gatsby.js 公式が提供プラグインを優先して使用します
* [gatsbyjs/gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)とマージする際、コンフリクトが発生しないようにピュアな状態を維持します
* Gatsby.js 公式が更新したことにより、機能が動作しなくなることがあります

## ライセンス

フォーク元と一緒で、BSD Zero Clause License です。
