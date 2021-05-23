import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmical',
  templateUrl: './bmical.component.html',
  styleUrls: ['./bmical.component.css']
})
export class BmicalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bmiResult: any;
  category: any;
  onClickSubmit(data) {
    let height = (+data.height);
    let weight = (+data.weight);
    let cat;
    console.log(height);
    console.log(weight);

    let result = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(result);
    this.bmiResult = result;

    if((+result) < 18.6){
      this.category = "Under Weight";
    }
    else if((+result) >= 18.6 && (+result) < 24.9){
      this.category = "Normal";
    }
    else{
      this.category = "Over Weight";
    }
 }

}
