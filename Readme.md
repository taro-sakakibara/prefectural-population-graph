# 都道府県別の総人口推移グラフの SPA

# DEMO
## PC
![53afc5786b40f7de9af0c3c7798a77d6](https://user-images.githubusercontent.com/82188012/149766752-3d9a040b-1184-4369-bd42-f1f3d55d692d.gif)

## SP
![0e88ed4994b01f531d318fc4036aa0a8](https://user-images.githubusercontent.com/82188012/149768438-4669d897-f398-41a6-8fd5-025358d14107.gif)

## URL

https://prefectural-population-graph.vercel.app/

# 作成者情報

- 課題の取り組み開始から完了までに要した合計時間<br/>
  20 時間（ドキュメント作成時間を除く）
- これまでの総合的なプログラミング歴<br/>
  1 年 3 ヶ月
- これまでの WEB フロントエンドプログラミング歴<br/>
  10 ヶ月

# 要件

1. RESAS(地域経済分析システム) API の「都道府県一覧」から API を取得する
2. API レスポンスから都道府県一覧のチェックボックスを動的に生成する
3. 都道府県にチェックを入れると、RESAS API から選択された都道府県の「人口構成」を取得する
4. 人口構成 API レスポンスから、X 軸:年、Y 軸:人口数の折れ線グラフを動的に生成して表示する

# 制約への対応

## Basic
◯:制約を満たしている,△:未達な部分がある,×:制約を満たしていない
- × React/Vue.js/Angular のいずれかを用いて SPA を構築すること（バージョンはできるだけ最新版をご使用ください）<br/>
  ※ Nuxt.js や Next.js などの、これらを内包したフレームワークの利用も許可する<br/>
  → 制約外の Preact を使用してしまいました。Preact = React という誤った認識、ドキュメントの読み込みが甘い、といった理由から大きなミスをしてしまいました。
  
- ◯ 都道府県一覧および総人口情報は RESAS API のデータを用いること


- ◯ グラフは Highcharts や Rechart.js などのサードパーティ製のグラフライブラリを用いて描画すること。<br/>
  ※ ただし、グラフライブラリは上記のものに限らず、任意のものを用いてよい。<br/>
  → Highcharts を採用
  
- ◯ Google Chrome 最新版で正しく動くこと<br/>
  → chrome ver.97.0.4692.71 で確認
  
- PC/スマートフォン表示に対応すること(レスポンシブデザイン対応)。<br/>
  ※ ただし実機でなく、Google Chrome の検証ツールで確認できればよい<br/>
  → chrome ver.97.0.4692.71 で確認
  
- ◯ リンターやフォーマッターを適切に設定すること。<br/>
  ※ リンターには ESLint、フォーマッターには Prettier を使用すること
  
- ◯ style は自分で記述し、CSS・UI フレームワークなどは原則使用しないこと<br/>
  ※ ただし、chart ライブラリ内包の style、リセット系の CSS ライブラリについてはこの限りではない。また、css-in-js や css-modules、sass などのエコシステムの利用を妨げるものではなく、あくまで css の記述力を測る趣旨に留まる<br/>
  → styled-components を採用し、css-in-js で記述

## Advance

- △ TypeScript で記述すること<br/>
  → event の型定義を any で対応しており、まだ使えきれていない

# 開発の流れ

![無題のプレゼンテーション](https://user-images.githubusercontent.com/82188012/149728171-c0207f9b-d87c-408a-8cd0-255746cc732e.png)


## 開発手法

issue ドリブン開発

# 主な使用技術

- Vite
- preact
- TypeScript
- styled-components
- commitlint
- vercel

## 選定理由
シンプルで1Pのアプリケーションのため、フレームワークを使わず軽量な開発環境を目指しました。まだ比較できる経験が少ないため、時流に乗ったものから選んでいる側面が大きいです。<br/>
preact + viteは今回の考えに適した構成と思い、採用しました。viteは非常に高速であるという点から、開発体験を向上させることを期待して採用しました。<br/>
またまだ触ったことのない技術だったため、良い機会と思ったことも決め手になります。<br/>
ただ冒頭で記した通り、preactの選定は間違っており、Reactを選定するべきでした。

# 振り返り

初めてSPAでのwebアプリケーションを構築しました。総じてとても楽しく開発をさせていただけました。<br/>
今まではwebサイトやLPの制作を中心に学んできましたので、インタラクティブに動くアプリの開発は新しく、自分の引き出しが増えたと感じられました！

## 反省点

- 制約外のpreactを使用してしまった
- commitの粒度に自信を持てていない
- 環境構築に時間がかかりすぎてしまった
- hooksの理解が浅い

## 苦労した点

-　環境構築
-　Typescriptの型定義、設定

今回フレームワークに頼らず初めてスクラッチに近い形で環境を構築しました。<br/>
vercelの環境変数の読み込みや、環境変数の型定義、eslintの設定などに特に手こずりました。

## 今後取り組みたいこと
- 色々なリポジトリを見て、commitの粒度やメッセージを見てみる
- SPAをもっと作ってみて、hooksの理解を体感する
- eslintなど開発環境の設定を意識して情報を見てみる

最後まで拝見いただき、ありがとうございます！<br/>
今後も楽しみながらも、webエンジニアとして学び、色々なものを作っていきます。<br/>
何卒よろしくお願いいたします。
