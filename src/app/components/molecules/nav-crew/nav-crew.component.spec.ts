import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCrewComponent } from './nav-crew.component';

describe('NavCrewComponent', () => {
  let component: NavCrewComponent;
  let fixture: ComponentFixture<NavCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
