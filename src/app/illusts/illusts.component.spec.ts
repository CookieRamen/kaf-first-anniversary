import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IllustsComponent} from './illusts.component';

describe('IllustsComponent', () => {
  let component: IllustsComponent;
  let fixture: ComponentFixture<IllustsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
