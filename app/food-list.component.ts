import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <ul>
  <li *ngFor="let currentFood of childFoodList">{{currentFood.item}}<br>Calories:   {{currentFood.calories}}<br>- {{currentFood.notes}}<br>
  <button (click)="editButtonHasBeenClicked(currentFood)">Edit</button></li>
  </ul>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
