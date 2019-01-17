import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByClientComponent } from './search-by-client.component';

describe('SearchByClientComponent', () => {
  let component: SearchByClientComponent;
  let fixture: ComponentFixture<SearchByClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
