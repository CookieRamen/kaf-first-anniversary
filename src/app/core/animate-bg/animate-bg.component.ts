import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-animate-bg',
  templateUrl: './animate-bg.component.html',
  styleUrls: ['./animate-bg.component.scss']
})
export class AnimateBgComponent implements OnInit {
  @Input() bgTextData: string[];

  particleStyle: object = {};
  particleParams: object = {};
  particleWidth = 100;
  particleHeight = 100;
  bgText: string[] = [];

  constructor() { }

  ngOnInit() {

    /*
    * 背景歌詞用
    * 指定した回数分繰り返して this.bgTextData からランダムな行を拾い
    * this.bgText に挿入する
    */
    for (let i = 0; i < 20; i++) {
      this.bgText.push(this.bgTextData[Math.floor(Math.random() * this.bgTextData.length)]);
    }

    this.particleStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.particleParams = {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'polygon',
          polygon: {
            nb_sides: 5
          },
        },
        opacity: {
          value: 0.5,
          random: true,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 3,
          direction: 'top',
          random: true,
          straight: false,
          out_mode: 'out',
        }
      },
      retina_detect: true
    };
  }

}
