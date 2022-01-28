import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSeminarWrapComponent } from './book-seminar-wrap.component';

describe('BookSeminarWrapComponent', () => {
  let component: BookSeminarWrapComponent;
  let fixture: ComponentFixture<BookSeminarWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSeminarWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSeminarWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
