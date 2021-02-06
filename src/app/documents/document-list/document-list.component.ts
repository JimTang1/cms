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


  // documents:Document[] =[
  //   new Document(
  //     '1',
  //     'Wei Chun Tang',
  //     'I am a good person :P',
  //     'https://github.com/JimTang1',
  //     null
  //   ),

  //   new Document(
  //     '2',
  //     'Jim Tang',
  //     'Another good guy!',
  //     'https://github.com/JimTang1',
  //     null
  //   )
  // ]

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
  }

  onSelected(document: Document){
    this.selectDocumentEvent.emit(document);
  }
}
