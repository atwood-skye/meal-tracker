import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Meal Tracker</h1>
    <food-list [childFoodList]="masterFoodList"></food-list>
  </div>
  `
})

export class AppComponent {

  masterFoodList: Food[] = [
    new Food('Banana with peanut butter', 180, 'one of my favorite snacks!'),
    new Food('Green curry with tofu', 500, 'forgot to pack lunch today.')
    new Food('Justins peanut butter cups', 200, 'cant resist these')
  ];
}
