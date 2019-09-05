import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  // 魔女 歌詞データ
  bgTextData: string[] = [
    'これは魔法だ',
    '生きた日々を忘れた私の奇跡だ',
    '永遠の時代で',
    '反逆者になったの',
    '偽物の子供達',
    '離さないで今を',
    '許さないで意味を',
    '確信犯で繋がった',
    '見たいものを見せて',
    '教えて',
    '燻る欲望だらけの日々に',
    '言葉に魂はあるか？',
    '答えて',
    '歌って',
    '意味を抱きしめるように',
    'あなたの産声を',
    '頭の悪い号哭を',
    '届いて',
    'なぞって',
    '意味を確かめるように',
    'この世界は私の物だ',
    '月が鳴り響くまで',
    'これが現実だ',
    '楽園を目指した電子の奇跡だ',
    '永遠の世界に',
    '脳髄をくすぐる',
    '偽物の景色達',
    '生きて来た意味と',
    'あがいて来た過去が',
    '仮想世界で舞っている',
    '証明を待ってる',
    '諦めるな今は',
    '目指した己の価値に',
    '存在に確信はあるか？',
    '歌って',
    '喚いて',
    '手に入れた世界に',
    '連なる産声が',
    '文字列に成り舞っている',
    '壊して',
    '奪って',
    '奪われてしまう前に',
    'この世界は私のものだ',
    '音が鳴り響くまで',
    '寂れた過去の礎を踏みにじり',
    '私たちは歌う　',
    '探して',
    'あがいて',
    '生きて来た証明が',
    '私の産声が',
    '文字列に鳴り舞っている',
    '今 己を証明する言葉に魂はあるか？',
    '戦え',
    '抗え',
    '今を抱きしめるように',
    'あなたの産声を',
    '頭の悪い号哭を',
    '答えて',
    '歌って',
    '電子の海を舞い踊って',
    'この世界は私たちの',
    '証明を探している'
  ];

  // 実際に表示されるデータに代入するための変数
  bgText: string[] = [];

  constructor() { }

  // フレームワークの準備が完了した際のトリガー
  ngOnInit() {
    /*
    * 背景歌詞用
    * 指定した回数分繰り返して this.bgTextData からランダムな行を拾い
    * this.bgText に挿入する
    */
    for (let i = 0; i < 20; i++) {
      this.bgText.push(this.bgTextData[Math.floor(Math.random() * this.bgTextData.length)]);
    }
  }

}
