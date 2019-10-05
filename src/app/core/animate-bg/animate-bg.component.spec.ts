import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AnimateBgComponent} from './animate-bg.component';
import {ParticlesModule} from 'ng-particle';
import {BrowserTestingModule} from '@angular/platform-browser/testing';

describe('AnimateBgComponent', () => {
  let component: AnimateBgComponent;
  let fixture: ComponentFixture<AnimateBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserTestingModule,
        ParticlesModule,
      ],
      declarations: [AnimateBgComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
