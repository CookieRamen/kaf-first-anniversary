import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoversComponent } from './covers.component';

describe('CoversComponent', () => {
  let component: CoversComponent;
  let fixture: ComponentFixture<CoversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoversComponent ]
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
