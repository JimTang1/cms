import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent implements OnInit, OnDestroy{
  documents:Document[];
  document:Document;
  private documentChangeSub;

  constructor(private documentService: DocumentService,
    router: Router,
    route: ActivatedRoute) { }

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
    
    this.documentChangeSub = this.documentService.documentChangedEvent
      .subscribe((documents)=>{
        this.documents = documents;
      })
  }

  ngOnDestroy(){
    this.documentChangeSub.unsubscribe();
  }
}
