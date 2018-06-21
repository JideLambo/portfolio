import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkGigmComponent } from './work-gigm.component';

describe('WorkGigmComponent', () => {
  let component: WorkGigmComponent;
  let fixture: ComponentFixture<WorkGigmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkGigmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkGigmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
