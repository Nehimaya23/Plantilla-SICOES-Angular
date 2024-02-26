import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreCComponent } from './empre-c.component';

describe('EmpreCComponent', () => {
  let component: EmpreCComponent;
  let fixture: ComponentFixture<EmpreCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpreCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpreCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
