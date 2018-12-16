import { Component, OnInit, HostBinding, ElementRef, ViewChild, Renderer2, Input } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomthemeDirective } from '../CustomDirecive/customtheme.directive';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @ViewChild(CustomthemeDirective)
  customdirective: ElementRef;

  color = 'accent';
  checked = false;
  disabled = false;

  newtheme: string = 'light';

  constructor(public overlayContainer: OverlayContainer,
    public rederer: Renderer2) { }

  name = 'Angular 6';
  @HostBinding('class') componentCssClass;

  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    //this.rederer.addClass(this.customdirective.nativeElement, "dark-theme");
  }

  ChangeTheme(themeValue) {
    console.log(themeValue);
    console.log(this.customdirective.nativeElement);
    this.rederer.addClass(this.customdirective.nativeElement, themeValue ? 'light-theme' : 'dark-theme');
  }
}
