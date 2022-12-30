# README.PRiMENON.md

このリポジトリは、[gatsbyjs/gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) をフォークし、PRiMENON がカスタマイズした箇所を含め他状態にしておき、最新の gatsby.js を追跡できるようにしています。

気になる機能があったら、自由に使ってください。

```
リポジトリ構成
[gatsbyjs/gatsby-starter-blog] <-公式
    |
    | forked
    |
    `-- [PRiMENON/gatsby-starter-blog] (A)

[PRiMENON/primenon.github.io] (B)
```

* (A) https://github.com/PRiMENON/gatsby-starter-blog
    * 導入したい機能を開発、トライアンドエラーするサンドボックス的位置づけ。公式リポジトリにマージは行いません。
* (B) https://github.com/PRiMENON/primenon.github.io
    * (A)で問題なければ動作した機能を導入、利用する。

## gatsby-starter-blog にはない、新たに追加した機能

* [タグ機能](https://github.com/PRiMENON/gatsby-starter-blog/pull/1)
* [URLを記事の日付ベースに変更する](https://github.com/PRiMENON/gatsby-starter-blog/pull/2)
* [下書き機能](https://github.com/PRiMENON/gatsby-starter-blog/pull/4)

## 修正

* [gatsby developでブラウザのdevtool consoleに表示されるエラー修正](https://github.com/PRiMENON/gatsby-starter-blog/pull/3)

## 留意事項

* 最新の環境で動作することを目的としています
* 機能の追加は gatsby.js 公式プラグインを優先して使用します
* 追加のパッケージはなるべく追加しないようにします
* ブログ記事（`content/blog/`以下）は、機能追加に影響しない場合、フォーク元からマージするときのコンフリクトを最小限にしたいので同じ状態にしてあります
* Gatsby.js のモジュールやライブラリが変更されたタイミングで動作しなくことがあります

## ライセンス

フォーク元と一緒で、BSD Zero Clause License です。
