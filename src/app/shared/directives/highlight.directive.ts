import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighLightDirective implements AfterViewInit {
  @Input() color = 'green';
  // Comment va faire la directive pour accéder à l'élement sur lequel elle est placée dans le template
  // Le système d'injection d'angular permet dans le constructeur d'injecter
  // ElementRef qui est la référence à l'élement qui contient un natif element
  // qui est l'élement html sur lequel la directive est posée
  // renderer permet d'interagir avec le nativ element f

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit() {
    this.setBackgroundColor(this.color);
  }
  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  // ecoute les évènements sur l'élément html
  @HostListener("mouseenter") onMouseenter(){
    this.setBackgroundColor("lightgreen");
  }

  @HostListener("mouseleave") onMousleave(){
    this.setBackgroundColor(this.color);
  }

//   @HostListener("click") onClick(){
//     this.color = "lightgreen"
//   }
}
