import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBubbleComponent } from './tool-bubble.component';

describe('ToolBubbleComponent', () => {
  let component: ToolBubbleComponent;
  let fixture: ComponentFixture<ToolBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBubbleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
