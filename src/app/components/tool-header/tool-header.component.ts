import { Colors } from './../../enums/colors.enum';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ToolBubbleComponent } from 'src/app/tooles/tool-bubble/tool-bubble.component';

@Component({
  selector: 'paint-header',
  templateUrl: './tool-header.component.html',
  styleUrls: ['./tool-header.component.css'],
})
export class ToolHeaderComponent implements OnInit {
  colors: string[] = [Colors.BLUE, Colors.RED, Colors.YELLOW];

  constructor() {}

  ngOnInit(): void {}
}
