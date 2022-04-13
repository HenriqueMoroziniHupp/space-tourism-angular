import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationPlanetComponent } from './presentation-planet.component';

describe('PresentationPlanetComponent', () => {
  let component: PresentationPlanetComponent;
  let fixture: ComponentFixture<PresentationPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationPlanetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
