import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaichiBenefitsComponent } from './taichi-benefits.component';

describe('TaichiBenefitsComponent', () => {
  let component: TaichiBenefitsComponent;
  let fixture: ComponentFixture<TaichiBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaichiBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaichiBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
