import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionnaireComponent} from './questionnaire.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ParticlesModule} from 'ng-particle';
import {AnimateBgModule} from '../core/animate-bg/animate-bg.module';
import {OrderModule} from 'ngx-order-pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireComponent;
  let fixture: ComponentFixture<QuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxChartsModule,
        ParticlesModule,
        AnimateBgModule,
        BrowserAnimationsModule,
        OrderModule,
      ],
      declarations: [QuestionnaireComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
