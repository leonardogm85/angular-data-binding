import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value: number = 5;

  destroyLifeCicle: boolean = false;

  modifyValue(): void {
    this.value++;
  }

  onDestroyLifeCicle(): void {
    this.destroyLifeCicle = true;
  }

}
