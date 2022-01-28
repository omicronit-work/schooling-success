import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolingHomeComponent } from './schooling-home.component';

describe('SchoolingHomeComponent', () => {
  let component: SchoolingHomeComponent;
  let fixture: ComponentFixture<SchoolingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
