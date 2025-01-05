import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCssRendrer]'
})
export class CssRendrerDirective implements OnInit {

  @HostBinding('style.backgroundColor') bgColor !: string;
  @Input() hoverColor !: string;

  constructor(
    private _eleRef : ElementRef,
    private _renderer : Renderer2
  ) { }

  ngOnInit(): void {
    this._renderer.setStyle(this._eleRef.nativeElement, "background-color", "yellow");
    this._renderer.setStyle(this._eleRef.nativeElement, "padding", "15px");
    this._renderer.addClass(this._eleRef.nativeElement, "text-center")
  }

  @HostListener('mouseover')
  onMouseHover(){
    this.bgColor = this.hoverColor
  }

  @HostListener('mouseout')
  onMouseOutCb(){
    this.bgColor = 'transparent'

  }

}
