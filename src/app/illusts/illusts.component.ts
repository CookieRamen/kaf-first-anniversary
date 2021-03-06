import {Component, OnInit} from '@angular/core';

interface PopupData {
  img: string;
  user: string;
}

@Component({
  selector: 'app-illusts',
  templateUrl: './illusts.component.html',
  styleUrls: ['./illusts.component.scss']
})
export class IllustsComponent implements OnInit {
  group = 'kaf';
  isPopup = false;
  popupData: PopupData;

  bgTextData: string[] = [
    '遠い目をした街灯が今更責めたててくる',
    '夜行バスはあと五分',
    'ざわついた灯りが揺れている',
    '嫌気がさした母に連れられ',
    '二人で浴びた朝日は今も覚えている',
    '角を曲がれば雨が降っていて',
    '通りに出れば人が鳴いていて',
    '野良猫が泣いて',
    '爪を噛んでいる放浪少女が抱きかかえている',
    'そんな情景も風化していく',
    '過疎化した夕焼けが',
    '過ぎ去って夜の街になり',
    '夜に溺れたがる僕たちは',
    '廃ビルの屋上で黄昏れる',
    '遠慮気味の太陽が',
    '何もかも綺麗に焼き払う',
    'そんな街に僕はいた',
    'この街で生きていた',
    '五分も歩けば田舎になって',
    '蛙がいつも待っている',
    'その先の僕の家は今では',
    'ここからはもう見えない',
    'ハエがまとわりついて',
    '駄菓子屋はいつか潰れて',
    '昔通りに生きていけると',
    '思っていたら大違いだ',
    'ラブホ街を抜けた先で',
    '姉の迎えを待っている',
    'そんな街に僕はいた',
    'この街で生きていた',
    'この街に僕はいた'
  ];

  kafIllusts = [
    {
      img: '546287944600780800.png',
      user: 'そらちゃ'
    }, {
      img: '619059947577147394.jpg',
      user: 'オオセグロ粉レモン'
    }, {
      img: '393360899571843072.png',
      user: 'vivitama36'
    }, {
      img: '449157397999517696.jpg',
      user: 'ふく”'
    }, {
      img: '595657555766804499_1.jpg',
      user: 'チャンプルー'
    }, {
      img: '595657555766804499_2.jpg',
      user: 'チャンプルー'
    }, {
      img: '232064619437359114.png',
      user: 'A,M雪の下'
    }, {
      img: '570015423731597334.png',
      user: '春美'
    }, {
      img: '572751269924569089.jpeg',
      user: '星屑'
    }, {
      img: '622599081952280597.jpg',
      user: 'クロラ'
    }, {
      img: '404943139749756930.jpg',
      user: 'ラセンタ'
    }, {
      img: '555312077770588172_1.png',
      user: '🐧'
    }, {
      img: '555312077770588172_2.png',
      user: '🐧'
    }, {
      img: '610123135219400724_1.jpg',
      user: '羽兎牙'
    }, {
      img: '610123135219400724_2.jpg',
      user: '羽兎牙'
    }, {
      img: '610123135219400724_3.jpg',
      user: '羽兎牙'
    }, {
      img: '610123135219400724_4.jpg',
      user: '羽兎牙'
    }
  ];

  LaplacesIllust = [
    {
      img: '232064619437359114.png',
      user: 'A,M雪の下'
    }, {
      img: '547055370774773760_1.png',
      user: 'wmi'
    }, {
      img: '547055370774773760_2.gif',
      user: 'wmi'
    }, {
      img: '547055370774773760_3.gif',
      user: 'wmi'
    }, {
      img: '619059947577147394.jpg',
      user: 'オオセグロ粉レモン'
    }, {
      img: '336471454482694144.png',
      user: 'こぁなぁた'
    }, {
      img: '506457421686898688.png',
      user: 'ｽｼｨｰ'
    }, {
      img: '595657555766804499.jpg',
      user: 'チャンプルー'
    }, {
      img: '589667417085575180.png',
      user: 'はとみ'
    }, {
      img: '535065999029043221.png',
      user: 'わつを'
    }, {
      img: '618755995581153281.jpg',
      user: '藤堂 天音'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
