import { NgModule } from '@angular/core';
import {BrowserModule, HammerModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageAnimatorComponent } from './image-animator/image-animator.component';
import {CommonModule} from '@angular/common';
import { AnimationSliderComponent } from './image-animator/animation-slider/animation-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ImageAnimatorComponent,
    AnimationSliderComponent,
  ],
    imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        HammerModule,
        MatSliderModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
