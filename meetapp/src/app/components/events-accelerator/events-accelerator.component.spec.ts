import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAcceleratorComponent } from './events-accelerator.component';

describe('EventsAcceleratorComponent', () => {
  let component: EventsAcceleratorComponent;
  let fixture: ComponentFixture<EventsAcceleratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsAcceleratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsAcceleratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
