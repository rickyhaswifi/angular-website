import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { OurWorkComponent } from './our-work/our-work.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-company', component: AboutComponent },
  { path: 'our-work', component: OurWorkComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
