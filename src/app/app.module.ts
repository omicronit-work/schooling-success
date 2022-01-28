import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SchoolingHomeComponent } from './components/schooling-home/schooling-home.component';
import { AttainmentComponent } from './components/schooling-home/attainment/attainment.component';
import { WhatWeDoComponent } from './components/schooling-home/what-we-do/what-we-do.component';
import { ReviewsComponent } from './components/schooling-home/reviews/reviews.component';
import { HoldingStudentsComponent } from './components/schooling-home/holding-students/holding-students.component';
import { TestimonialComponent } from './components/schooling-home/testimonial/testimonial.component';
import { FounderInfoComponent } from './components/schooling-home/founder-info/founder-info.component';
import { AllSeminarsComponent } from './components/all-seminars/all-seminars.component';
import { BookSeminarWrapComponent } from './components/schooling-home/book-seminar-wrap/book-seminar-wrap.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AttainmentComponent,
    WhatWeDoComponent,
    ReviewsComponent,
    HoldingStudentsComponent,
    TestimonialComponent,
    FounderInfoComponent,
    SchoolingHomeComponent,
    AllSeminarsComponent,
    BookSeminarWrapComponent,
    ContactUsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
