import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMicrofinanceComponent } from './work-microfinance.component';

describe('WorkMicrofinanceComponent', () => {
  let component: WorkMicrofinanceComponent;
  let fixture: ComponentFixture<WorkMicrofinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkMicrofinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkMicrofinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
