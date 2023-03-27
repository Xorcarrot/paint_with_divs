import { PencilPickerService } from './services/pencil-picker.service';
import { ScreenSizeService } from './services/screen-size.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'paint';
  screenWidth = this.screenSize.innerWidth;
  screenHight = this.screenSize.innerHeight;
  color = '';

  left = this.pencil.mouseWidth;
  top = this.pencil.mouseHeight;

  @HostListener('window:resize', ['$event'])
  windowResize() {
    this.screenSize.onResize();
    this.screenWidth = this.screenSize.innerWidth;
    this.screenHight = this.screenSize.innerHeight;
  }

  mouseMoved(event: MouseEvent) {
    this.pencil.onMouseMove(event);
    this.left = this.pencil.mouseWidth;
    this.top = this.pencil.mouseHeight;
  }

  ngOnInit(): void {
    this.pencil.loadColor$.subscribe((data) => {
      this.color = data;
    });
  }

  constructor(
    private screenSize: ScreenSizeService,
    private pencil: PencilPickerService
  ) {}
}
