import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreAComponent } from './empre-a.component';

describe('EmpreAComponent', () => {
  let component: EmpreAComponent;
  let fixture: ComponentFixture<EmpreAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpreAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpreAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
