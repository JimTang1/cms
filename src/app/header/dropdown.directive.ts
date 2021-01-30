import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: "[cmsDropdown]"
})

export class DropdownDirective implements OnInit{
    constructor(private elRef: ElementRef, private renderer:Renderer2){}
    
    @HostBinding('class.open') isOpen: boolean = false;
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
    @HostListener('mouseenter') mouseover(eventData: Event){
        this.renderer.setStyle(this.elRef.nativeElement, "background-color", "#A9A9A9");
    }
 
    @HostListener('mouseleave') mouseleave(eventData: Event){
        this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent");
    }

    ngOnInit(){
        
    }
}