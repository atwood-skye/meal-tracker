import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <ul>
  <li *ngFor="let currentFood of childFoodList">{{currentFood.item}} {{currentFood.calories}}{{currentFood.notes}}</li>
  </ul>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
}
