import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Meal Tracker</h1>
    <food-list [childFoodList]="masterFoodList" (editSender)="editFood($event)"></food-list>
    <hr>
    <new-food (newFoodSender)="addFood($event)"></new-food>
    <edit-food [childSelectedFood]="selectedFood" (doneEditingSender)="doneEditing()"></edit-food>
  </div>
  `
})

export class AppComponent {


  masterFoodList: Food[] = [
    new Food('Banana with peanut butter', 180, 'one of my favorite snacks!'),
    new Food('Green curry with tofu', 500, 'forgot to pack lunch today.'),
    new Food('Justins peanut butter cups', 200, 'cant resist these'),
  ];

  selectedFood = null;

  editFood(currentFood) {
    this.selectedFood = currentFood;
  }

  doneEditing() {
    this.selectedFood = null;
  }

  addFood(newFood: Food) {
    this.masterFoodList.push(newFood);
  }
}
