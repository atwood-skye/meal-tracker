import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <ul>
    <select (change)="onChange($event.target.value)">
      <option value="allMeals">All Meals</option>
      <option value="highCalFood" selected="selected">High Calorie Meals(over 500)</option>
      <option value="lowCalFood">Low Calorie Meals(under 500)</option>
    </select>
      <li *ngFor="let currentFood of childFoodList | calories:filterByCalories"><h2>{{currentFood.item}}</h2><br>
      <h3>Calories:   {{currentFood.calories}}</h3><br> <h4>Notes: {{currentFood.notes}}</h4><br>
      <button (click)="editClicked(currentFood)">Edit</button></li>
    </ul>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() editSender = new EventEmitter();

  filterByCalories: string = "highCalFood";

  editClicked(food: Food) {
    this.editSender.emit(food);
  }
  
  onChange(optionSelected) {
    this.filterByCalories = optionSelected;
  }

}
