import { Directive, Input, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the HidebackbuttonDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hidebackbutton]', // Attribute selector
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class HidebackbuttonDirective {

  @Input('button') button: HTMLElement;

  constructor(public element: ElementRef, public renderer: Renderer) {
  }

  ngOnInit() {
    this.renderer.setElementStyle(this.button, 'transition', 'ease transform 500ms');    
  }

  onContentScroll(event) {

    if(event.scrollTop > 50) {
      this.renderer.setElementStyle(this.button, 'transform', 'translateX(-100px)');
    }

    if(event.directionY == 'up') {
      this.renderer.setElementStyle(this.button, 'transform', 'translateX(0px)');
    }
  }

}
