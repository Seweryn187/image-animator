import {Component, OnInit} from '@angular/core';
import {ImageAnimatorService} from "../../services/image-animator.service";

@Component({
  selector: 'ckt-animation-slider',
  templateUrl: './animation-slider.component.html',
  styleUrls: ['./animation-slider.component.scss']
})
export class AnimationSliderComponent implements OnInit {

  constructor(public imageAnimatorService: ImageAnimatorService) {
  }

  ngOnInit(): void {

  }

}
