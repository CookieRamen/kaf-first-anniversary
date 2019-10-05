import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  show = false;

  bgTextData: string[] = [
    'すれちがいをしてたんだ僕らは',
    '痛みを避けて意味を探した',
    '遠回りを二人巡り遊んだ',
    '君のことばかり思って',
    '辛くなるのはきっと',
    '弱かっただけなんだ',
    '喧騒に揉まれてばかりの夜',
    '恋をしよう',
    '僕と君だけで何もいらないこの世界は',
    '汚さすらも全部混ぜれば',
    '何もかもが許されてしまうんだ',
    '騙されていたのかもしれない',
    'それでも信じたいのかもな',
    '正解は自分で決めるものって',
    '自分が一番知ってたのに',
    '庇いあって慰めあって',
    '一時の迷いを',
    '笑いあって探しあって',
    '一時の優しさに惑ろう',
    '最後に出会うのは',
    '痛みか？間違いか？',
    '大丈夫だよ',
    '大丈夫だよ',
    'きっと',
    '何度傷ついて何度つまづいて',
    '怯えた未来が暗い痛い怖い',
    'この足で正解を選ばなきゃいけない',
    'もう逃げられない',
    '歪んで抉れてばら撒いた',
    '愛と憎悪と温もりと　',
    '幼い体で必死に隠した',
    '本物を暴け',
    '本性を暴くたび',
    '真実に足掻くたび',
    '知っていたことを知っていく',
    '君が良いんだ',
    '言葉にならない寂しさを埋める世界を探そう',
    '言葉にならない痛みを埋める世界を選ぼう',
    '二人で',
    '迷いあって巡りあって',
    '痛みも涙も',
    '笑いあって探しあって',
    '二人の血で埋めよう',
    '騙された日々も',
    '曲げられた意思も',
    '間違いじゃない',
    '間違いじゃない',
    'きっと'
  ];

  // アンケートデータ
  original = [
    {
      name: '不可解',
      value: 12
    }, {
      name: 'そして花になる',
      value: 8
    }, {
      name: '忘れてしまえ',
      value: 6
    }, {
      name: '糸',
      value: 5
    }, {
      name: '雛鳥',
      value: 5
    }, {
      name: 'quiz',
      value: 4
    }, {
      name: '心臓と絡繰',
      value: 4
    }, {
      name: '未確認少女進行形',
      value: 4
    }, {
      name: '夜行バスにて',
      value: 3
    }, {
      name: 'Re:HEROINES',
      value: 3
    }, {
      name: 'エリカ',
      value: 2
    }, {
      name: '過去を喰らう',
      value: 2
    }, {
      name: '祭壇',
      value: 2
    }, {
      name: '魔女',
      value: 2
    }, {
      name: '夜が降り止む前に',
      value: 1
    }
  ];

  cover = [
    {
      name: '死神',
      value: 17
    }, {
      name: 'フロントメモリー',
      value: 7
    }, {
      name: '告白',
      value: 6
    }, {
      name: '回る空うさぎ',
      value: 5
    }, {
      name: '猛独が襲う',
      value: 3
    }, {
      name: '死んでしまったのだろうか',
      value: 3
    }, {
      name: '少女レイ',
      value: 3
    }, {
      name: 'アストロノーツ',
      value: 3
    }, {
      name: 'またねがあれば',
      value: 3
    }, {
      name: '想像フォレスト',
      value: 2
    }, {
      name: '忘れたいことばっかだ',
      value: 2
    }, {
      name: 'ダンスが僕の恋人',
      value: 2
    }, {
      name: 'うつくしいひと',
      value: 2
    }, {
      name: 'ハミングがきこえる',
      value: 1
    }, {
      name: 'bin',
      value: 1
    }, {
      name: '白ゆき',
      value: 1
    }, {
      name: 'さよならミッドナイト',
      value: 1
    }, {
      name: '五月雨',
      value: 1
    }, {
      name: '凍えそうだ',
      value: 1
    }
  ];

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 3000);
  }

}
