import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparepartsEditDialogComponent } from './spareparts-edit-dialog.component';

describe('SparepartsEditDialogComponent', () => {
  let component: SparepartsEditDialogComponent;
  let fixture: ComponentFixture<SparepartsEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparepartsEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparepartsEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
