import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all" selected>All Meals</option>
      <option value="highCal">High Calorie Meals(over 500)</option>
      <option value="lowCal">Low Calorie Meals(under 500)</option>
    </select>
    <ul>
      <li *ngFor="let currentFood of childFoodList | health:filterByHealthyOrNot">{{currentFood.item}}<br>{{IsItHealthy(food)}}Calories:   {{currentFood.calories}}<br>- {{currentFood.notes}}<br>
      <button (click)="editButtonHasBeenClicked(currentFood)">Edit</button></li>
    </ul>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  filterByHealthyOrNot: string = "all";

  isItHealthy(caloriesEaten: Food) {
    if(caloriesEaten.calories < 500) {
      return caloriesEaten.lowCal = true;
    } else {
      return caloriesEaten.lowCal = false;
    }
  }

  onChange(filter) {
    this.filterByHealthyOrNot = filter;
  }

  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

}
