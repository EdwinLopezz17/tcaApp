import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectiveCostComponent } from './effective-cost.component';

describe('EffectiveCostComponent', () => {
  let component: EffectiveCostComponent;
  let fixture: ComponentFixture<EffectiveCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectiveCostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectiveCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
