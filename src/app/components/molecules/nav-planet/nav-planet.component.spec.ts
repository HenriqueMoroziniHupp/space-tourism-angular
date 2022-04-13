import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPlanetComponent } from './nav-planet.component';

describe('NavPlanetComponent', () => {
  let component: NavPlanetComponent;
  let fixture: ComponentFixture<NavPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPlanetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
