import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BmicalComponent } from './bmical/bmical.component';

import { HomeComponent } from './home/home.component';
import { NutrientsComponent } from './nutrients/nutrients.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "bmi", component: BmicalComponent},
  {path: "nutrients", component: NutrientsComponent},
  {path: "aboutus", component: AboutusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
