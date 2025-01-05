import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appToLowerCase]'
})
export class ToLowerCaseDirective implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  @HostListener('keyup', ['$event'])
  onKeyUpLowerCase(eve : Event){
    let inputControl = eve.target as HTMLInputElement;
    inputControl.value = inputControl.value.toLowerCase();
    console.log();
  }

}
