import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  view: any[] = [700, 400];

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
      name: '1',
      value: 1,
    }, {
      name: '2',
      value: 1,
    }, {
      name: '3',
      value: 1,
    }, {
      name: '4',
      value: 1,
    }, {
      name: '5',
      value: 1,
    }, {
      name: '6',
      value: 1,
    }, {
      name: '7',
      value: 1,
    }, {
      name: '8',
      value: 1,
    }
  ];

  cover = [
    {
      name: '1',
      value: 1,
    }, {
      name: '2',
      value: 1,
    }, {
      name: '3',
      value: 1,
    }, {
      name: '4',
      value: 1,
    }, {
      name: '5',
      value: 1,
    }, {
      name: '6',
      value: 1,
    }, {
      name: '7',
      value: 1,
    }, {
      name: '8',
      value: 1,
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
