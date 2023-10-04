import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {

  name: string = 'Name01';

  person: { name: string, age: number } = {
    name: 'Name01',
    age: 18
  };

}
