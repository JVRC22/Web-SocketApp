import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarComponentComponent } from './modificar-component.component';

describe('ModificarComponentComponent', () => {
  let component: ModificarComponentComponent;
  let fixture: ComponentFixture<ModificarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
