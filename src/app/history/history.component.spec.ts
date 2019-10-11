import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HistoryComponent} from './history.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AnimateBgModule} from '../core/animate-bg/animate-bg.module';
import {NgxTweetModule} from 'ngx-tweet';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AnimateBgModule,
        NgxTweetModule
      ],
      declarations: [HistoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
