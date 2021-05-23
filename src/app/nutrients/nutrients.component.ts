import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-nutrients',
  templateUrl: './nutrients.component.html',
  styleUrls: ['./nutrients.component.css']
})
export class NutrientsComponent implements OnInit {

  itemCount: any = 0;
  itemTray: any = [];
  query: string = "";
  nutritionReport:any = [];
  

  constructor(private foodservice: FoodService) { }

  ngOnInit(): void {
  }

  onClickAdd(tray):void {
    let item = tray.item
    this.itemTray.push(item);
    this.itemCount++;
    console.log(this.itemTray);
  }

  onClickReset():void {
    this.itemTray = [];
    this.itemCount = 0;
    this.nutritionReport = [];
    console.log(this.itemTray);
    this.query = "";
  }

  onClickSubmit(): void{
    let len = this.itemTray.length;
    for(let i = 0; i < len-1; i++){
      this.query += (this.itemTray[i] + " and ") 
    }
    this.query += (this.itemTray[len-1]);
    console.log(this.query);

    this.foodservice.getNutritionReport(this.query).subscribe(
      response=>{
        console.log(response.items)
        this.nutritionReport = response.items;
      },
      error=>{
        console.log(error);
      }
    );

    this.itemTray = [];
    this.itemCount = 0;
    this.query = "";

    return this.nutritionReport;
  }
}


