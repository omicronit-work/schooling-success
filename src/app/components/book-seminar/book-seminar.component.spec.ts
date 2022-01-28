import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSeminarComponent } from './book-seminar.component';

describe('BookSeminarComponent', () => {
  let component: BookSeminarComponent;
  let fixture: ComponentFixture<BookSeminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSeminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSeminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
