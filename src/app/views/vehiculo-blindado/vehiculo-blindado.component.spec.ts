import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoBlindadoComponent } from './vehiculo-blindado.component';

describe('VehiculoBlindadoComponent', () => {
  let component: VehiculoBlindadoComponent;
  let fixture: ComponentFixture<VehiculoBlindadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoBlindadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiculoBlindadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
