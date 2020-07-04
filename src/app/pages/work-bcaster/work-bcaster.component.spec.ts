import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkBcasterComponent } from './work-bcaster.component';

describe('WorkBcasterComponent', () => {
  let component: WorkBcasterComponent;
  let fixture: ComponentFixture<WorkBcasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkBcasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkBcasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
