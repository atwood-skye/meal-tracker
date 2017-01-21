import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div *ngIf="childSelectedFood">
      <h3>Edit Entry</h3>
      <label>What did you eat?</label>
      <input [(ngModel)]="childSelectedFood.item"><br>
      <label>Calories:</label>
      <input [(ngModel)]="childSelectedFood.calories" type="number"><br>
      <label>Notes:</label>
      <input [(ngModel)]="childSelectedFood.notes"><br>
      <button (click)="doneEditingClicked()">Edit</button>
  </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneEditingSender = new EventEmitter();

  doneEditingClicked() {
    this.doneEditingSender.emit();
  }
}
