import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDisableButton]',
})
export class DisableButtonDirective implements OnChanges {
  @Input('appDisableButton') isValid!: boolean | null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.isValid) {
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    } else {
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
    }
  }
}
