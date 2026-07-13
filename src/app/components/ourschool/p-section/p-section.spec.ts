import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSection } from './p-section';

describe('PSection', () => {
  let component: PSection;
  let fixture: ComponentFixture<PSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
