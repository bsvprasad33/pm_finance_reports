import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailReportsComponent } from './view-detail-reports.component';

describe('ViewDetailReportsComponent', () => {
  let component: ViewDetailReportsComponent;
  let fixture: ComponentFixture<ViewDetailReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
