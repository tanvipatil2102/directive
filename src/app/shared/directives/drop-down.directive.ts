import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective implements OnInit {

  @Input() toggleClass !: string;

  constructor(
    private _eleRef : ElementRef
  ) { }

  ngOnInit(): void {
    
  }

  @HostListener('click', ['$event'])
  onClickDropDown(eve : Event){
    let x = eve.target
    let nextSibling = this._eleRef.nativeElement.nextSibling;
    console.log(nextSibling);
    nextSibling.classList.toggle(this.toggleClass)
  }

}
