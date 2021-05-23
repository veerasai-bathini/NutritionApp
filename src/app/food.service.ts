import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getNutritionReport(query): Observable<any>{
    console.log("Food Service!")
    return this.http.get(
      'https://api.calorieninjas.com/v1/nutrition?query='+query,
      {headers: {
        'X-Api-Key': 'ue/PvO+E2iM+dR8jPY2KhQ==81Q0sMAB6MNBdj6d'
      }}
    )
  }
}
