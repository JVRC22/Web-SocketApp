import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSourceComponentComponent } from './event-source-component.component';

describe('EventSourceComponentComponent', () => {
  let component: EventSourceComponentComponent;
  let fixture: ComponentFixture<EventSourceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSourceComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSourceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
