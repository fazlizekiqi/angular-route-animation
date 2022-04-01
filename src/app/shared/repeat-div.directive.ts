import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRepeatDiv]'
})
export class RepeatDivDirective implements OnInit{

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
  ) { }

  public ngOnInit() : void {
    for (let index = 0; index < this.appRepeatDiv; index++) {
      const div = this.renderer.createElement('div');
      this.renderer.addClass(div,`iitem-${index}`)
      this.renderer.appendChild(this.el.nativeElement, div);
    }
  }

  @Input() 
  public appRepeatDiv = 0;
}
