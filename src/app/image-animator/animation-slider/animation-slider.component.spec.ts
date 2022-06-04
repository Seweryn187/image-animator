import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationSliderComponent } from './animation-slider.component';

describe('AnimationSliderComponent', () => {
  let component: AnimationSliderComponent;
  let fixture: ComponentFixture<AnimationSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
