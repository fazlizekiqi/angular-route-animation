import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
// To activate other animations uncomment line 29 and add below animation into the animations array.
import { fader, slider, transform, inBetweenAnimation } from './route-animations';

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

  public animationState: 'animationStarted' | 'none' = 'none';

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