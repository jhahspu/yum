import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  id: any;
  meal = [];
  mealIng: string = '';
  ytLink: string;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {
    this.id = this.route.snapshot.params['id'];
    this.getMeal(this.id.slice(4,99));
  }

  ngOnInit(): void {}

  getMeal(id:string) {
    this.foodService.getMealById(id).subscribe(data =>{
      // console.log(data);
      this.meal.push(data['meals'][0]);
      // console.log(this.meal);
      for (let i = 1; i<=20; i++) {
        this.meal[0][`strIngredient${i}`] ? this.mealIng += `<div>${this.meal[0][`strIngredient${i}`]}</div><div>${this.meal[0][`strMeasure${i}`]}</div>` : null;
      }
      this.ytLink = this.youtube_parser(this.meal[0]['strYoutube']);
    });
  }

  youtube_parser(url){
    let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return `https://www.youtube.com/embed/${(match&&match[7].length==11)? match[7] : false}?controls=1`;
  }

}
