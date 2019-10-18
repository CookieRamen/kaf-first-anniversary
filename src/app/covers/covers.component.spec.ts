import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoversComponent} from './covers.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AnimateBgModule} from '../core/animate-bg/animate-bg.module';

describe('CoversComponent', () => {
  let component: CoversComponent;
  let fixture: ComponentFixture<CoversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AnimateBgModule
      ],
      declarations: [CoversComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
