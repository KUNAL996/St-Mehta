import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePrimaryActivity } from './pre-primary-activity';

describe('PrePrimaryActivity', () => {
  let component: PrePrimaryActivity;
  let fixture: ComponentFixture<PrePrimaryActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrePrimaryActivity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrePrimaryActivity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
