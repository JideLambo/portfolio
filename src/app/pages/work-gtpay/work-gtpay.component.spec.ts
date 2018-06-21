import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkGtpayComponent } from './work-gtpay.component';

describe('WorkGtpayComponent', () => {
  let component: WorkGtpayComponent;
  let fixture: ComponentFixture<WorkGtpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkGtpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkGtpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
