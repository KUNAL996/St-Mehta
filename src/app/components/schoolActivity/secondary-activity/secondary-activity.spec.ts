import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryActivity } from './secondary-activity';

describe('SecondaryActivity', () => {
  let component: SecondaryActivity;
  let fixture: ComponentFixture<SecondaryActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryActivity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryActivity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
