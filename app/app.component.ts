import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <div class="jumbotron">
    <h1>Meal Tracker</h1>
    </div>
    <food-list [childFoodList]="masterFoodList" (editSender)="editFood($event)"></food-list>
    <edit-food [childSelectedFood]="selectedFood" (doneEditingSender)="doneEditing()"></edit-food>
    <new-food (newFoodSender)="addFood($event)"></new-food>
  </div>
  `
})

export class AppComponent {


  masterFoodList: Food[] = [
    new Food('Banana with peanut butter', 180, 'one of my favorite snacks!'),
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
