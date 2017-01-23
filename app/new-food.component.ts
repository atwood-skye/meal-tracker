import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';


@Component({
  selector: 'new-food',
  template: `
  <div class="container">
  <div class="row new-food">
  <div class="col-md-6">
  <h3>Add New Food Item</h3>
    <div>
      <label>What did you eat?</label>
      <input #newItem>
    </div>
    <div>
      <label>Calories:</label>
      <input type="number" #newCalories>
    </div>
    <div>
      <label>Notes:</label>
      <input #newNotes>
    </div>
    <button (click)="submitForm(newItem.value, newCalories.value, newNotes.value); newItem.value=''; newCalories.value=''; newNotes.value='';">Add</button>
    </div>
    </div>
    </div>
  `
})



export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  submitForm(item: string, calories: number, notes: string) {
    var newFood: Food = new Food(item, calories, notes);
    this.newFoodSender.emit(newFood);
  }
}
