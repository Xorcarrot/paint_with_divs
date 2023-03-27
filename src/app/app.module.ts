import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { ToolBubbleComponent } from './tooles/tool-bubble/tool-bubble.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { PenTipComponent } from './tooles/pen-tip/pen-tip.component';
import { PaintComponent } from './components/paint/paint.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolHeaderComponent,
    ToolBubbleComponent,
    CanvasComponent,
    PenTipComponent,
    PaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
