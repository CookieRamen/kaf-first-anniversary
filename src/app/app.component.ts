import {Component, OnInit} from '@angular/core';
import {AnimationItem, LottieOptions} from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isWait = true;
  isLoading = true;

  options: LottieOptions = {
    path: '/assets/animation.json'
  };

  ngOnInit(): void {
    setTimeout(() => this.isWait = false, 1000);
    setTimeout(() => this.isLoading = false, 6000);
  }

  animationCreated(animationItem: AnimationItem): void {}
}
