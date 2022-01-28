import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSeminarsComponent } from './components/all-seminars/all-seminars.component';
import { BookSeminarComponent } from './components/book-seminar/book-seminar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SchoolingHomeComponent } from './components/schooling-home/schooling-home.component';

const routes: Routes = [
  { path: '', component: SchoolingHomeComponent },
  { path: 'book-seminar', component: BookSeminarComponent },
  { path: 'browse-seminar', component: AllSeminarsComponent },
  { path: 'contact', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
