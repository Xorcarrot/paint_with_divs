import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  innerWidth: number = window.innerWidth;
  innerHeight: number = window.innerHeight;

  onResize() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

  constructor() {}
}
