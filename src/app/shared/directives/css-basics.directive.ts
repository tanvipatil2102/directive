import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCssBasics]'
})
export class CssBasicsDirective implements OnInit {

  constructor(
    private _eleRef : ElementRef
  ) { }

  ngOnInit(): void {
    this._eleRef.nativeElement.style.backgroundColor = 'red';
    this._eleRef.nativeElement.style.color = '#fff';
    this._eleRef.nativeElement.style.padding = '15px';
  }
}
