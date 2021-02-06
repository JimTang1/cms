import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
  providers: [DocumentService]
})
export class DocumentListComponent implements OnInit {
  @Output() selectDocumentEvent = new EventEmitter<Document>();
  documents:Document[] = [];

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
  }

  onSelected(document: Document){
    this.selectDocumentEvent.emit(document);
    //this.documentService.documentSelectedEvent.emit(document);
  }
}
