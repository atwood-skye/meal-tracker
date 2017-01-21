import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe ({
  name: 'calories',
  pure: false
})

export class CaloriesPipe implements PipeTransform {

  transform(input: Food[], filteredList) {
    var output: Food[] = [];
    if(filteredList === "lowCalFood") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].calories <= 500) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (filteredList === "highCalFood") {
    for (var i = 0; i <input.length; i++) {
      if (input[i].calories >= 500) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    for (var i = 0; i < input.length; i++) {
      output.push(input[i]);
    }
    return output;
  }
}

}
