import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MembersComponent} from './members.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AnimateBgModule} from '../core/animate-bg/animate-bg.module';

describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AnimateBgModule
      ],
      declarations: [MembersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
