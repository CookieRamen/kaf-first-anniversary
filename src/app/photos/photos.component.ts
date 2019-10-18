import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  bgTextData: string[] = [
    '笑うなら',
    '描くなら今だ',
    '言葉なんかじゃ伝わらない',
    '空に放つライン',
    '狂い合う愛',
    '間違いさえ貫いた',
    '道しるべはここだったのか',
    '全ては君が学ぶのだ',
    'notice notice',
    '愛しいかな？別れは',
    '散るタバコの明かりがサインだったんだ',
    'forget forget',
    '忘れられない',
    'すれ違う視線は知らない',
    '気づけないから',
    '隠しても',
    '壊しても未だ',
    '言葉なんかじゃ言い切れない',
    '肌を交わす夕日の並木道を',
    '何も言わず貫いた',
    '遠くにいるあなただけが',
    '全ての意味を抱くのだ',
    'I believe I believe',
    '何もかも許して',
    'あなただけを感じて生きてきたんだ',
    'forget forget',
    '全部嘘だよ',
    'すれ違う視線は消せない',
    '認めないから',
    '閉ざした意味を探し合うように',
    'お互いの今を気づかぬように',
    'あなただけはわからぬように',
    '全てが君を殺すから',
    'notice notice',
    '愛しいかな？別れは',
    '崩れ合う言い訳で混ざっていくんだ',
    'forget forget',
    '忘れてしまえ',
    'すれ違う視線は知らないから',
    'ホオズキの花が咲いたら',
    '君を連れて街の風になろう',
    'あの日の意味もまやかしも全部忘れないように',
    '君と笑う夏の日々を',
    '何十年だって思い出すんだよ',
    '真実をまやかして',
    '気づいてしまうから'
  ];

  constructor() {
  }

  ngOnInit() {
    // if (environment.production) {
      // load twitter script
      const twitterScript = document.createElement('script');
      twitterScript.async = true;
      twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      twitterScript.setAttribute('charset', 'utf-8');
      // insert twitter embed code to #load-twitter
      const twitterDiv = document.getElementById('load-twitter');
      twitterDiv.parentNode.insertBefore(twitterScript, twitterDiv.nextSibling);
    // }
  }

}
