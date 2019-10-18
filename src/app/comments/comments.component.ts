import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  bgTextData: string[] = [
    '止まらない闇に',
    '泡に芽吹く花が',
    '空に埋もれ消える',
    '月が輝く塔に今',
    '君の面影を知る',
    '胸に住む確信が',
    '波を呼び',
    '言葉に酔う',
    '何一つ無駄じゃなかった',
    '今言わなくちゃ',
    '涙を合図に',
    '届けに行くんだ',
    '濡れすぎた夜空が',
    '僕らに呼吸を許さなかった',
    '踠き歩いた',
    '満たされた光に',
    '一度きりの言い訳を',
    '夜が降り止む前に',
    '止まらない闇に',
    'あなたの輪郭を',
    '遠く鳴る海が奪い去る',
    '胸が照らすその場所には',
    '知りたい言葉がある',
    'あなたにはわからないわ',
    '何一つ聞こえないや',
    '「今まで」と「これから」は',
    'かき乱した夜に消えていけ',
    '届けに行くんだ',
    '喚き出す夜空が',
    '僕らの明日を信じなかった',
    '裏切り歩いた',
    '満たされた朝日で',
    '熱を意味を捨てていく',
    '濡れ出した街に',
    'あなたの輪郭を',
    '淡い指先でなぞる',
    '夜が降り止む前に'
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
