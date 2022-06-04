import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IFrame} from './animation.model';
import {ImageAnimatorService} from "../services/image-animator.service";

@Component({
  selector: 'ckt-image-animator',
  templateUrl: './image-animator.component.html',
  styleUrls: ['./image-animator.component.scss']
})
export class ImageAnimatorComponent implements OnInit, OnDestroy {

  @Input()
  imageDirectory!: string;

  @Input()
  backgroundDirectory!: string;

  @Input()
  frameCount!: number;

  @Input()
  frameRate!: number;

  @Input()
  extension!: string;

  @Input()
  loop!: boolean;

  @Input()
  manually!: boolean;

  @Input()
  auto!: boolean;

  //the smaller value the more frames you swipe
  forceOfSwipeConverter: number;
  imageFrames: IFrame[] = [];
  backgroundFrames: IFrame[] = [];
  animationId1: number = 0;
  animationId2: number = 0;

  constructor(public imageAnimatorService: ImageAnimatorService) {
    this.forceOfSwipeConverter = 100;
  }

  ngOnInit(): void {
    for (let i = 1; i <= this.frameCount; i++) {
      this.imageFrames.push({src: this.imageDirectory + '/' + i + '.' + this.extension});
    }
    if(this.backgroundDirectory){
      for (let i = 1; i <= this.frameCount; i++) {
        this.backgroundFrames.push({src: this.backgroundDirectory + '/' + i + '.' + this.extension});
      }
    }
    this.imageAnimatorService.setNumberOfFrames(this.imageFrames.length-1);
    this.imageAnimatorService.initializeService();

    if(this.auto){
      this.animationId1 = window.requestAnimationFrame(this.selfAnimate.bind(this));
    }
  }

  selfAnimate() {
    window.setTimeout(() => {
        this.imageAnimatorService.setActiveFrame(this.imageAnimatorService.getIndexOfVisibleFrame());
        if(this.loop &&  this.imageAnimatorService.getActiveFrame() >= this.imageFrames.length){
          this.imageAnimatorService.setActiveFrame(0);
        }
        if(!this.loop && this.imageAnimatorService.getActiveFrame() >= this.imageFrames.length){
          this.imageAnimatorService.setActiveFrame(this.imageAnimatorService.getNumberOfFrames());
        }
        this.imageAnimatorService.changeFrameVisibility();
        this.animationId2 = window.requestAnimationFrame(this.selfAnimate.bind(this));
      }
      ,1000/this.frameRate);
  }

  //used pan, not swipe because the difference is swipe fires only after swipe movement ends
  panRight(event:any){
    if(this.manually){
      let newActiveFrame;
      if(event.distance){
        newActiveFrame = this.imageAnimatorService.getActiveFrame() + (Math.trunc(event.distance/this.forceOfSwipeConverter)+1);
        if(newActiveFrame >= this.imageFrames.length && this.loop){
          newActiveFrame = 0;
        }
        if(newActiveFrame >= this.imageFrames.length && !this.loop){
          newActiveFrame=this.imageAnimatorService.getNumberOfFrames();
        }

        this.imageAnimatorService.setActiveFrame(newActiveFrame);
        this.imageAnimatorService.changeFrameVisibility();
      }
    }
  }

  panLeft(event: any){
    if(this.manually) {
      let newActiveFrame;
      if(event.distance){
        newActiveFrame = this.imageAnimatorService.getActiveFrame() - (Math.trunc(event.distance/this.forceOfSwipeConverter)+1);
        if(newActiveFrame < 0 && this.loop){
          newActiveFrame = this.imageAnimatorService.getNumberOfFrames();
        }
        if(newActiveFrame < 0 && !this.loop){
          newActiveFrame=0;
        }

        this.imageAnimatorService.setActiveFrame(newActiveFrame);
        this.imageAnimatorService.changeFrameVisibility();
      }
    }
  }

  ngOnDestroy(){
    window.cancelAnimationFrame(this.animationId1);
    window.cancelAnimationFrame(this.animationId2);
    this.auto = false;
  }
}
