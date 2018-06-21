import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBriefsComponent } from './home-briefs.component';

describe('HomeBriefsComponent', () => {
  let component: HomeBriefsComponent;
  let fixture: ComponentFixture<HomeBriefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBriefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBriefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
