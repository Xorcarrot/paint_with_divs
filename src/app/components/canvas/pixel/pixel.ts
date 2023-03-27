export class Pixel {
  top!: number;
  left!: number;
  color!: string;

  constructor(top: number, left: number, color: string) {
    this.top = top;
    this.left = left;
    this.color = color;
  }
}
