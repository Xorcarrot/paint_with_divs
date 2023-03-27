import { PencilPickerService } from './../../services/pencil-picker.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pixel } from './pixel/pixel';

@Component({
  selector: 'p-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit {
  pixels: Array<Pixel> = [];
  color = '';

  painting: boolean = false;

  async paint() {
    this.painting = true;
    await this.pencil.loadColor$.subscribe((data) => {
      this.color = data;
    });
    let pixel = new Pixel(
      this.pencil.mouseHeight - 5,
      this.pencil.mouseWidth - 5,
      this.color
    );
    this.pixels.push(pixel);
    while (this.painting && this.color != '') {
      await new Promise((f) => setTimeout(f, 10));
      let pixelTwo = new Pixel(
        this.pencil.mouseHeight - 5,
        this.pencil.mouseWidth - 5,
        this.color
      );
      try {
        this.drawLine(pixel, pixelTwo);
      } catch (err) {
        console.log(err);
      }

      this.pixels.push(pixelTwo);
      pixel = pixelTwo;
    }
  }

  paintStop() {
    this.painting = false;
  }

  drawLine(pixel: Pixel, pixelTwo: Pixel) {
    var minLeft = 0;
    var maxLeft = 0;
    if (pixel.left < pixelTwo.left) {
      minLeft = pixel.left;
      maxLeft = pixelTwo.left;
    } else if (pixel.left > pixelTwo.left) {
      minLeft = pixelTwo.left;
      maxLeft = pixel.left;
    }

    var minTop = 0;
    var maxTop = 0;
    if (pixel.top < pixelTwo.top) {
      minTop = pixel.top;
      maxTop = pixelTwo.top;
    } else if (pixel.top > pixelTwo.top) {
      minTop = pixelTwo.top;
      maxTop = pixel.top;
    }

    if (pixel.top > pixelTwo.top && pixel.left < pixelTwo.left) {
      this.lineUp(minLeft, maxLeft, minTop, maxTop, pixel.color);
    } else if (pixel.top < pixelTwo.top && pixel.left < pixelTwo.left) {
      this.lineDown(minLeft, maxLeft, minTop, maxTop, pixel.color);
    } else if (pixelTwo.left < pixel.left && pixelTwo.top > pixel.top) {
      this.lineUp(minLeft, maxLeft, minTop, maxTop, pixel.color);
    } else if (pixel.top > pixelTwo.top && pixel.left > pixelTwo.left) {
      this.lineDown(minLeft, maxLeft, minTop, maxTop, pixel.color);
    }

    var relTop = this.pencil.mouseHeight - 5 - pixel.top;
    var relLeft = this.pencil.mouseWidth - 5 - pixel.left;
  }

  lineUp(
    minLeft: number,
    maxLeft: number,
    minTop: number,
    maxTop: number,
    color: string
  ) {
    var indexLeft = maxLeft - minLeft;
    var indexTop = maxTop - minTop;
    var index = 0;

    if (indexLeft != 0 && indexTop != 0) {
      if (indexLeft > indexTop) {
        index = indexLeft / indexTop;
        this.upLow(minLeft, maxLeft, minTop, maxTop, index, color);
      } else if (indexTop > indexLeft) {
        index = indexTop / indexLeft;
        this.upHigh(minLeft, maxLeft, minTop, maxTop, index, color);
      }
    } else if (indexLeft == 0 && indexTop != 0) {
      this.justLeft(minLeft, maxLeft, minTop, maxTop, index, color);
    } else if (indexTop == 0 && indexLeft != 0) {
      this.justTop(minLeft, maxLeft, minTop, maxTop, index, color);
    }
  }

  upHigh(
    minLeft: number,
    maxLeft: number,
    minTop: number,
    maxTop: number,
    index: number,
    color: string
  ) {
    let pixelLeft = minLeft;
    let pixelTop = maxTop;

    while (pixelTop > minTop) {
      for (var i = 0; i < index; i++) {
        pixelTop--;
        let pix = new Pixel(pixelTop, pixelLeft, color);
        this.pixels.push(pix);
      }
      pixelLeft++;
      let pix = new Pixel(pixelTop, pixelLeft, color);
      this.pixels.push(pix);
    }
  }

  upLow(
    minLeft: number,
    maxLeft: number,
    minTop: number,
    maxTop: number,
    index: number,
    color: string
  ) {
    let pixelLeft = minLeft;
    let pixelTop = maxTop;

    while (pixelTop > minTop) {
      for (var i = 0; i < index; i++) {
        pixelLeft++;
        let pix = new Pixel(pixelTop, pixelLeft, color);
        this.pixels.push(pix);
      }
      pixelTop--;
      let pix = new Pixel(pixelTop, pixelLeft, color);
      this.pixels.push(pix);
    }
  }

  lineDown(
    minLeft: number,
    maxLeft: number,
    minTop: number,
    maxTop: number,
    color: string
  ) {
    var indexLeft = maxLeft - minLeft;
    var indexTop = maxTop - minTop;
    var index = 0;

    if (indexLeft != 0 && indexTop != 0) {
      if (indexLeft > indexTop) {
        index = indexLeft / indexTop;
        this.downLow(minLeft, maxLeft, minTop, maxTop, index, color);
      } else if (indexTop > indexLeft) {
        index = indexTop / indexLeft;
        this.dowHigh(minLeft, maxLeft, minTop, maxTop, index, color);
      }
    } else if (indexLeft == 0 && indexTop != 0) {
      this.justLeft(minLeft, maxLeft, minTop, maxTop, index, color);
    } else if (indexTop == 0 && indexLeft != 0) {
      this.justTop(minLeft, maxLeft, minTop, maxTop, index, color);
    }
  }

  dowHigh(
    minLeft: number,
    maxLeft: number,
    minTop: number,
    maxTop: number,
    index: number,
    color: string
  ) {
    let pixelLeft = minLeft;
    let pixelTop = minTop;

    while (pixelTop < maxTop) {
      for (var i = 0; i < index; i++) {
        pixelTop++;
        let pix = new Pixel(pixelTop, pixelLeft, color);
        this.pixels.push(pix);
      }
      pixelLeft++;
      let pix = new Pixel(pixelTop, pixelLeft, color);
      this.pixels.push(pix);
    }
  }

  downLow(
    minLeft: number,
    maxLeft: number,
    minTop: number,
    maxTop: number,
    index: number,
    color: string
  ) {
    let pixelLeft = minLeft;
    let pixelTop = minTop;

    while (pixelTop < maxTop) {
      for (var i = 0; i < index; i++) {
        console.log('test');
        pixelLeft++;
        let pix = new Pixel(pixelTop, pixelLeft, color);
        this.pixels.push(pix);
      }
      pixelTop++;
      let pix = new Pixel(pixelTop, pixelLeft, color);
      this.pixels.push(pix);
    }
  }

  justLeft(
    minLeft: number,
    maxLeft: number,
    minTop: number,
    maxTop: number,
    index: number,
    color: string
  ) {
    let pixelLeft = minLeft;
    while (pixelLeft < maxLeft) {
      pixelLeft++;
      let pix = new Pixel(minTop, pixelLeft, color);
      this.pixels.push(pix);
    }
  }

  justTop(
    minLeft: number,
    maxLeft: number,
    minTop: number,
    maxTop: number,
    index: number,
    color: string
  ) {
    let pixelTop = minTop;
    while (pixelTop < maxTop) {
      pixelTop++;
      let pix = new Pixel(pixelTop, minLeft, color);
      this.pixels.push(pix);
    }
  }

  constructor(private pencil: PencilPickerService) {}

  ngOnInit(): void {}
}
