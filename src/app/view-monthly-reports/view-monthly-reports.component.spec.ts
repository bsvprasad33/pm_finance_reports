import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMonthlyReportsComponent } from './view-monthly-reports.component';

describe('ViewMonthlyReportsComponent', () => {
  let component: ViewMonthlyReportsComponent;
  let fixture: ComponentFixture<ViewMonthlyReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMonthlyReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMonthlyReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
