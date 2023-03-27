import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pen-tip',
  templateUrl: './pen-tip.component.html',
  styleUrls: ['./pen-tip.component.css'],
})
export class PenTipComponent implements OnInit {
  @Input() color: string = '';
  constructor() {}

  ngOnInit(): void {}
}
