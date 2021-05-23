import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BmicalComponent } from './bmical/bmical.component';
import { NutrientsComponent } from './nutrients/nutrients.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import {FoodService} from './food.service';
import { HttpClientModule } from '@angular/common/http';
//import {HttpClient} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BmicalComponent,
    NutrientsComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
