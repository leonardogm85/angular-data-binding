import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  urlCourse: string = 'https://loiane.training';

  isAngularCourse: boolean = true;

  getValue(): number {
    return 1;
  }

  getLikedTheCourse(): boolean {
    return true;
  }

}
