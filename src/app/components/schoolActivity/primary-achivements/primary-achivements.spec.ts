import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryAchivements } from './primary-achivements';

describe('PrimaryAchivements', () => {
  let component: PrimaryAchivements;
  let fixture: ComponentFixture<PrimaryAchivements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryAchivements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryAchivements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
