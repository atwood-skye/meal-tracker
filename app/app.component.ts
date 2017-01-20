import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Meal Tracker</h1>
    <food-list [childFoodList]="masterFoodList" (clickSender)="editFood($event)"></food-list>
    <hr>
    <edit-food [childSelectedFood]="selectedFood" (editButtonClickedSender)="finishedEditing()"></edit-food>
    <new-food (newFoodSender)="addFood($event)"></new-food>
  </div>
  `
})

export class AppComponent {
  selectedFood = null;

  masterFoodList: Food[] = [
    new Food('Banana with peanut butter', 180, 'one of my favorite snacks!'),
    new Food('Green curry with tofu', 500, 'forgot to pack lunch today.'),
    new Food('Justins peanut butter cups', 200, 'cant resist these')
  ];

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }

  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }
}
