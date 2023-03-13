import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullingComponentComponent } from './pulling-component.component';

describe('PullingComponentComponent', () => {
  let component: PullingComponentComponent;
  let fixture: ComponentFixture<PullingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
