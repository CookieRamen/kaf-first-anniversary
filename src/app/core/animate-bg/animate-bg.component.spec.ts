import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateBgComponent } from './animate-bg.component';

describe('AnimateBgComponent', () => {
  let component: AnimateBgComponent;
  let fixture: ComponentFixture<AnimateBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateBgComponent ]
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
