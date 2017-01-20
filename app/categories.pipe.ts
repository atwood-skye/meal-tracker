import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe ({
  name: "health",
  pure: false
})

export class CategoriesPipe implements PipeTransform {
  transform(input: Food[], filteredList) {
    var output: Food[] = [];
    if(filteredList === 'highCalMeal') {
    for (var i = 0; i < input.length; i++) {
      if (input[i].lowCal === false) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (filteredList === 'lowCalMeal') {
    for (var i = 0; i <input.length; i++) {
      if (input[i].lowCal === true) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
  }
}

}
