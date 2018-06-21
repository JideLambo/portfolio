import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksHeroComponent } from './works-hero.component';

describe('WorksHeroComponent', () => {
  let component: WorksHeroComponent;
  let fixture: ComponentFixture<WorksHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
