import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfinishedReportsComponent } from './unfinished-reports.component';

describe('UnfinishedReportsComponent', () => {
  let component: UnfinishedReportsComponent;
  let fixture: ComponentFixture<UnfinishedReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfinishedReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfinishedReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
