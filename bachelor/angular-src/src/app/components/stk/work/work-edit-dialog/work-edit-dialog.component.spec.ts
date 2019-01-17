import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEditDialogComponent } from './work-edit-dialog.component';

describe('WorkEditDialogComponent', () => {
  let component: WorkEditDialogComponent;
  let fixture: ComponentFixture<WorkEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
