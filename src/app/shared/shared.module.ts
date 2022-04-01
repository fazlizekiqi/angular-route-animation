import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepeatDivDirective } from './repeat-div.directive';

@NgModule({
  declarations: [
    RepeatDivDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports:[
    RepeatDivDirective,
  ]
})
export class SharedModule { }
