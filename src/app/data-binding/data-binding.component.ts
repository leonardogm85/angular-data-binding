import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  courseName: string = 'Angular';

  defaultValue: number = 10;

  onModifiedValue(counter: { newValue: number }): void {
    console.log(counter.newValue);
  }

}
