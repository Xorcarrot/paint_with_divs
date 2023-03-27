import { PencilPickerService } from './../../services/pencil-picker.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bubble-button',
  templateUrl: './tool-bubble.component.html',
  styleUrls: ['./tool-bubble.component.css'],
})
export class ToolBubbleComponent {
  @Input() color: string = '';

  constructor(private pencil: PencilPickerService) {}

  setPencilColor() {
    this.pencil.setPencilColor(this.color);
  }
}
