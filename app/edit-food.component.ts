import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div>
    <div *ngIf="childSelectedFood">
    <h3>{{childSelectedFood.item}}</h3>
      <hr>
      <h3>Edit Entry</h3>
      <label>What did you eat?</label>
      <input [(ngModel)]="childSelectedFood.item">
      <label>Calories:</label>
      <input [(ngModel)]="childSelectedFood.calories">
      <label>Notes:</label>
      <input [(ngModel)]="childSelectedFood.notes">
      <button (click)="editButtonClicked()">Edit</button>
    </div>
  </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() editButtonClickedSender = new EventEmitter();

  editButtonClicked() {
    this.editButtonClickedSender.emit();
  }
}
