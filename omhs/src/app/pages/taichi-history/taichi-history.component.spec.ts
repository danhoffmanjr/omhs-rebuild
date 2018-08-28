import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaichiHistoryComponent } from './taichi-history.component';

describe('TaichiHistoryComponent', () => {
  let component: TaichiHistoryComponent;
  let fixture: ComponentFixture<TaichiHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaichiHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaichiHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
