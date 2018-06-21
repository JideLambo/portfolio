import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShareitComponent } from './work-shareit.component';

describe('WorkShareitComponent', () => {
  let component: WorkShareitComponent;
  let fixture: ComponentFixture<WorkShareitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkShareitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkShareitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
