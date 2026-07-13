import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpSection } from './pp-section';

describe('PpSection', () => {
  let component: PpSection;
  let fixture: ComponentFixture<PpSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PpSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
