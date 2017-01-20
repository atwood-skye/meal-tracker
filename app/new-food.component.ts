import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';


@Component({
  selector: 'new-food',
  template: `
  <h3>Add New Food Item</h3>
    <div>
      <label>What did you eat?</label>
      <input #newItem>
    </div>
    <div>
      <label>Calories:</label>
      <input #newCalories>
    </div>
    <div>
      <label>Notes:</label>
      <input #newNotes>
    </div>
    <button (click)="submitForm(newItem.value, newCalories.value, newNotes.value)">Add</button>
  `
})



export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  submitForm(item: string, calories: number, notes: string) {
    var newFoodToAdd: Food = new Food(item, calories, notes);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
