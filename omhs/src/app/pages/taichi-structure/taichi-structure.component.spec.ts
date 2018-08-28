import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaichiStructureComponent } from './taichi-structure.component';

describe('TaichiStructureComponent', () => {
  let component: TaichiStructureComponent;
  let fixture: ComponentFixture<TaichiStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaichiStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaichiStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
