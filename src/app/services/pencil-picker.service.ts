import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PencilPickerService {
  mouseWidth: number = 0;
  mouseHeight: number = 0;
  pencilColor: string = '';

  @Output() loadColor$ = new EventEmitter<string>();

  onMouseMove(event: any) {
    this.mouseWidth = event.clientX;
    this.mouseHeight = event.clientY;
  }

  setPencilColor(color: string) {
    this.pencilColor = color;
    this.loadColor$.emit(this.pencilColor);
  }

  constructor() {}
}
