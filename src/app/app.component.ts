import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { fader, slider, transform, inBetweenAnimation } from './route-animations';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  state,
  keyframes,
} from '@angular/animations';

type AnimationState = 'animationStarted' | 'none';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader,
    inBetweenAnimation,
  ]
})
export class AppComponent {

  public animationState = 'none';

  public animationDoneHandler(): void {
    this.animationState ='none';
  }

 public startAnimation(): void {
    this.animationState = 'animationStarted'
  }

  public prepareRoute(outlet: RouterOutlet) {
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    return outlet && outlet.activatedRouteData;
  }

}