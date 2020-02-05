import { Directive, TemplateRef,ViewContainerRef, Input, OnInit, OnChanges  } from '@angular/core';

@Directive({ selector: '[isAuthorized]'})
export class IsAuthorizedDirective implements OnInit, OnChanges{
  @Input() isAuthorizedIn : string[]
  @Input() isAuthorized : string
  private hasView = false;

  constructor(private templateRef: TemplateRef<any>, 
              private vcr: ViewContainerRef) { }

  ngOnInit() {
    this.configureView()
  }

  ngOnChanges(){
    console.log("Sectioned!!")
    this.configureView()
  }

  configureView(){
      console.log(this.isAuthorized, this.isAuthorizedIn)
    const isAuthorized = this.isAuthorizedIn.some(i => i == this.isAuthorized)

    if (isAuthorized && !this.hasView) {
        this.vcr.createEmbeddedView(this.templateRef);
        this.hasView = true;
    } else if (!isAuthorized && this.hasView) {
        this.vcr.clear();
        this.hasView = false;     
    }
  }

}