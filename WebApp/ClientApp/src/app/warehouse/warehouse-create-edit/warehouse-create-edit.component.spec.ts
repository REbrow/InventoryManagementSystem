import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseCreateEditComponent } from './warehouse-create-edit.component';

describe('WarehouseCreateEditComponent', () => {
  let component: WarehouseCreateEditComponent;
  let fixture: ComponentFixture<WarehouseCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
