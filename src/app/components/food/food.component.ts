import { Component, OnInit } from '@angular/core';

import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foodCat = [];
  selected: string = '';
  meals = [];
  update: boolean = false;

  constructor(
    private foodService: FoodService
    ) {}

  ngOnInit(): void {

    

    if (localStorage.getItem('foodCat')) {
      this.foodCat = JSON.parse(localStorage.getItem('foodCat'));
    } else {
      this.foodService.getCat().subscribe(data =>{
        // console.log(data);
        // let tempCat = [];
        for (let res of data['meals']) {
          // console.log(res.strCategory);
          this.foodCat.push(res.strCategory);
        }
        // console.log(this.foodCat);
        localStorage.setItem('foodCat', JSON.stringify(this.foodCat));
      });
    }

    if (localStorage.getItem('mealType')) {
      this.selected = JSON.parse(localStorage.getItem('mealType'));
      this.getMeal(this.selected);
    }

  }

  onSelected(){
    localStorage.setItem('mealType', JSON.stringify(this.selected));
    this.getMeal(this.selected);
  }

  getMeal(mealtype: string) {
    this.foodService.getMealByCat(this.selected).subscribe(data => {
      // console.log(data);
      this.meals = [];
      for (let res of data['meals']) {
        this.meals.push(res);
      }
      // console.log(this.meals);
    });
  }

}
