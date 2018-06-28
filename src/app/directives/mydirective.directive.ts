import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(private re : Renderer2, private el : ElementRef) {
    console.log(el)
    re.setStyle(el.nativeElement,"color","red");
   }

}
