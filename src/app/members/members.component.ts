import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  bgTextData: string[] = [
    '排気口から香るラーメンの匂い',
    '学校帰りによる駄菓子屋',
    '大層な風景はない',
    '私は普通の人',
    '季節は巡る',
    '雨が雪になって干上がって',
    '知らない人と繋がりあう時代に私はいる',
    '春風巡る',
    '私の歌が誰かの風になる',
    '誰かの風景を塗り替える',
    'それが嬉しかった',
    '人生だとか青春だとか',
    '不条理に思うことなんてなかった',
    '私が歌を歌うのは',
    '歌が好きだったってわけさ',
    '好きなものを',
    '好きなことを',
    '好きでいることに理由はいらない',
    'だから私は歌うのだ',
    '名前のない花が咲いた',
    'あなたが知らなくたってどうでもよかった',
    'でもあなたがいるから私は私になれる',
    '雛鳥は泣く',
    '儚い日々が誰かの涙になる',
    '断ち切れない糸が絡み合ってそれを恋と語った',
    '「忘れてしまえ」',
    '私は私の日々を優先して',
    '溶けきれない雪のようなあなたの声でまた咲いた',
    '人生が続いてく',
    '青春が変わってく',
    'その全ての裏側であなたの言葉を聞いた',
    '私が歌を歌うのは',
    'それが楽しかったから',
    '辛いことも',
    '嫌なことも',
    '何も考えていないだけさ',
    'だから私は歌うのだ',
    'そして不可解な花になる',
    '季節を巡るにはあなたが必要だった',
    '私が知らない私がきっと',
    'まだどこかで眠ってる',
    'あっという間に世界が変わる',
    '人生が秒速で塗り替わる',
    '青春は風になる',
    'そこで生きるあなたと感情が混ざり合えばいいな',
    '何もしれないあなたと生きてみたいな',
    'あなたとならもう怖くはないな',
    '私が歌を歌うのは',
    '歌が好きだったからさ　',
    '好きなことを',
    '好きなように',
    '好きでいることに理由はいらない',
    'だから私は歌うのだ',
    '私は私になるのだ',
    '名前のない花のように',
    '不可解な私たちはきっと同じ',
    'もう何も怖くはないさ'
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
