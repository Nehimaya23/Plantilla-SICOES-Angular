import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreBComponent } from './empre-b.component';

describe('EmpreBComponent', () => {
  let component: EmpreBComponent;
  let fixture: ComponentFixture<EmpreBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpreBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpreBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
