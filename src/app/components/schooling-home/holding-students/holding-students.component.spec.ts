import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingStudentsComponent } from './holding-students.component';

describe('HoldingStudentsComponent', () => {
  let component: HoldingStudentsComponent;
  let fixture: ComponentFixture<HoldingStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldingStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
