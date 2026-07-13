import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryAchivements } from './secondary-achivements';

describe('SecondaryAchivements', () => {
  let component: SecondaryAchivements;
  let fixture: ComponentFixture<SecondaryAchivements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryAchivements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryAchivements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
