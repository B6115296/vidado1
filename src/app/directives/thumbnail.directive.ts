import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges, HostListener, Attribute } from '@angular/core';
@Directive({
  selector: 'img[imgPreview]'
})

export class ImagePreview {
  @Input() image: any;
  // constructor( 
  //   @Attribute('onErrorSrc') public onErrorSrc: string, 
  //   @Attribute('loader') public loader: string, 
  //   private elementRef: ElementRef<HTMLImageElement>, 
  //   private renderer: Renderer2, 
  //   private el:ElementRef) { 
  //   // this.loader = "https://upload.wikimedia.org/wikipedia/commons/7/7a/Ajax_loader_metal_512.gif" 
  //    
  //   this.nativeElement = this.elementRef.nativeElement; 
  // } 
  constructor(private el: ElementRef, private renderer: Renderer2, @Attribute('onErrorSrc') public onErrorSrc: string,) {
    this.onErrorSrc = "https://avatars.githubusercontent.com/u/40366721?s=88&v=4"
  }
  ngOnChanges(changes: SimpleChanges) {

    let reader = new FileReader();
    let el = this.el;
    reader.onloadend = function (e) {
      el.nativeElement.src = reader.result;
    };
    
    if (this.image) {
      return reader.readAsDataURL(this.image);
    }
  }
  
  @HostListener('error') onError() {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.onErrorSrc)
  }
} 