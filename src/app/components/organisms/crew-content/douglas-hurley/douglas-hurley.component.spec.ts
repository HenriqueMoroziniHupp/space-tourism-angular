import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DouglasHurleyComponent } from './douglas-hurley.component';

describe('DouglasHurleyComponent', () => {
  let component: DouglasHurleyComponent;
  let fixture: ComponentFixture<DouglasHurleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DouglasHurleyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DouglasHurleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
