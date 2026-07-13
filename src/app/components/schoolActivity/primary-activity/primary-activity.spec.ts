import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryActivity } from './primary-activity';

describe('PrimaryActivity', () => {
  let component: PrimaryActivity;
  let fixture: ComponentFixture<PrimaryActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryActivity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryActivity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
