import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSection } from './s-section';

describe('SSection', () => {
  let component: SSection;
  let fixture: ComponentFixture<SSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
