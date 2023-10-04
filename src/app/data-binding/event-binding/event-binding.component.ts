import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  // styleUrls: ['./event-binding.component.css'],
  styles: [
    `
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
    `
  ]
})
export class EventBindingComponent {

  isMouseOver: boolean = false;

  currentValue: string = '';
  valueSaved: string = '';

  buttonClicked(): void {
    alert('Button clicked!');
  }

  saveValue(value: string): void {
    this.valueSaved = value;
  }

  onKeyUp(event: KeyboardEvent): void {
    this.currentValue = (<HTMLInputElement>event.target).value;
  }

  onMouseOverOut(): void {
    this.isMouseOver = !this.isMouseOver;
  }

}
