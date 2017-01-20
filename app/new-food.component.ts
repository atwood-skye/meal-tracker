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
    <div>
      <label>Category:</label>
      <select #newCategory>
        <option [value]="1"> Breakfast </option>
        <option [value]="1"> Lunch </option>
        <option [value]="1"> Dinner </option>
        <option [value]="1"> Snack/Dessert </option>
    <button (click)="submitForm(newItem.value, newCalories.value, newNotes.value, newCategory.value);">Add</button>
  `
})






export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  submitForm(item: string, calories: number, notes: string, category: number) {
    var newFoodToAdd: Food = new Food(item, calories, notes, category);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
