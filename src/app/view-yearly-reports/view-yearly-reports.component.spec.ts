import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewYearlyReportsComponent } from './view-yearly-reports.component';

describe('ViewYearlyReportsComponent', () => {
  let component: ViewYearlyReportsComponent;
  let fixture: ComponentFixture<ViewYearlyReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewYearlyReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewYearlyReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
