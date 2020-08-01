import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodComponent } from './components/food/food.component';
import { MealComponent } from './components/meal/meal.component';


const routes: Routes = [
  {path: '', component: FoodComponent},
  {path: 'meal/:id', component: MealComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
