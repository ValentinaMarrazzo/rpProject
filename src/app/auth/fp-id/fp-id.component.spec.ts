import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpIdComponent } from './fp-id.component';

describe('FpIdComponent', () => {
  let component: FpIdComponent;
  let fixture: ComponentFixture<FpIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
