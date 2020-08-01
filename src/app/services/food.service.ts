import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private http: HttpClient
  ) { }

  getCat() {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  }

  getMealByCat(cat: string) {
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
  }

  getMealById(id: string){
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
}
