import { Component, OnInit, Output, EventEmitter, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
    @Output() selectedFeatureEvent = new EventEmitter<string>();

    constructor(private elRef: ElementRef, private renderer:Renderer2){}
    
    ngOnInit(){

    }

    onSelected(selectedEvent:string){
        this.selectedFeatureEvent.emit(selectedEvent);
    }
}