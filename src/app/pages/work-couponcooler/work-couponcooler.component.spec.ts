import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCouponcoolerComponent } from './work-couponcooler.component';

describe('WorkCouponcoolerComponent', () => {
  let component: WorkCouponcoolerComponent;
  let fixture: ComponentFixture<WorkCouponcoolerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkCouponcoolerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCouponcoolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
