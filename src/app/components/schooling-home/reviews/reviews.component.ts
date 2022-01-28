import { Component, OnInit } from '@angular/core';

declare var homeSlider: any;

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      homeSlider();
    }, 0);
  }
}
