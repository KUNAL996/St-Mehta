import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePrimaryAchivements } from './pre-primary-achivements';

describe('PrePrimaryAchivements', () => {
  let component: PrePrimaryAchivements;
  let fixture: ComponentFixture<PrePrimaryAchivements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrePrimaryAchivements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrePrimaryAchivements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
