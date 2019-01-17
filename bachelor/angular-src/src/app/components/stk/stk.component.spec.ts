import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StkComponent } from './stk.component';

describe('StkComponent', () => {
  let component: StkComponent;
  let fixture: ComponentFixture<StkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
