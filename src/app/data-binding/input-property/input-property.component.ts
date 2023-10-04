import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
})
export class InputPropertyComponent {

  @Input() name: string = '';

}
