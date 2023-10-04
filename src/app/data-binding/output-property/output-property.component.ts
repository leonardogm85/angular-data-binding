import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  // outputs: ['modifiedValue']
})
export class OutputPropertyComponent {

  @Input() value: number = 0;

  @Output() modifiedValue: EventEmitter<{ newValue: number }> = new EventEmitter<{ newValue: number }>();

  @ViewChild('inputField') inputFiledValue!: ElementRef;

  decrement(): void {
    // this.modifiedValue.emit({ newValue: --this.value });
    this.modifiedValue.emit({ newValue: --this.inputFiledValue.nativeElement.value });
  }

  increment(): void {
    // this.modifiedValue.emit({ newValue: ++this.value });
    this.modifiedValue.emit({ newValue: ++this.inputFiledValue.nativeElement.value });
  }

}
