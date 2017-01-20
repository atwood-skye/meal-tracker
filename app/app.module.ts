import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FoodListComponent } from './food-list.component';
import { NewFoodComponent } from './new-food.component';
import { EditFoodComponent } from './edit-food.component';
import { CategoriesPipe } from './categories.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule] ,
  declarations: [AppComponent, FoodListComponent, NewFoodComponent, EditFoodComponent, CategoriesPipe ],
  bootstrap:    [AppComponent]
})

export class AppModule { }
