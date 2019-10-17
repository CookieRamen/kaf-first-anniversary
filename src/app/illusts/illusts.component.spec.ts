import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IllustsComponent} from './illusts.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AnimateBgModule} from '../core/animate-bg/animate-bg.module';

describe('IllustsComponent', () => {
  let component: IllustsComponent;
  let fixture: ComponentFixture<IllustsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AnimateBgModule
      ],
      declarations: [IllustsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
