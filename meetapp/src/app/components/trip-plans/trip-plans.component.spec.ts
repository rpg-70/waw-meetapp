import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPlansComponent } from './trip-plans.component';

describe('TripPlansComponent', () => {
  let component: TripPlansComponent;
  let fixture: ComponentFixture<TripPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
