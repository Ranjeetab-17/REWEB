import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  Renderer,
  Input
} from '@angular/core';

@Directive({
  selector: '[appCustomtheme]'
})
export class CustomthemeDirective {

  @Input('appCustomtheme') appCustomtheme: string;

  constructor(public element: ElementRef, public rederer: Renderer2) {    
    this.element.nativeElement.style.color="red";
  }

  @HostListener('click')
  changeTheme(event) {   
    console.log(this.appCustomtheme);
    this.rederer.addClass(this.element.nativeElement,"dark-theme");
  }
}
