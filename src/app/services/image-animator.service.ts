import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageAnimatorService {

  activeFrame: number = 0;
  numberOfFrames: number = 0;
  framesVisibility: boolean[] = [];

  constructor() {

  }

  getActiveFrame() {
    return this.activeFrame;
  }

  setActiveFrame(newValue:number) {
    this.activeFrame = newValue;
  }

  getNumberOfFrames() {
    return this.numberOfFrames;
  }

  setNumberOfFrames(newValue:number) {
    this.numberOfFrames = newValue;
  }


  getFrameVisibility(index:number) {
    return this.framesVisibility[index];
  }

  setFrameVisibility(index:number) {
    this.framesVisibility[index] = true;
  }

  fillFramesVisibility() {
    this.framesVisibility.fill(false);
  }

  getIndexOfVisibleFrame() {
    return this.framesVisibility.indexOf(true, 0)+1;
  }

  initializeFramesVisibility(length:number) {
    this.framesVisibility = new Array(length);
  }

  initializeService() {
    this.initializeFramesVisibility(this.getNumberOfFrames());
    this.fillFramesVisibility();
    this.setActiveFrame(0);
    this.setFrameVisibility(0);
  }

  changeFrameVisibility() {
    this.fillFramesVisibility();
    this.setFrameVisibility(this.getActiveFrame());
  }

  handleSliderChange(event:any) {
    this.setActiveFrame(event.value);
    this.framesVisibility.fill(false);
    this.framesVisibility[this.activeFrame] = true;
  }

}
