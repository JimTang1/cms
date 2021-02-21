import { EventEmitter, Injectable } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import {Document} from './document.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documentSelectedEvent = new EventEmitter<Document>();
  documentChangedEvent = new Subject<Document[]>();
  private documents:Document[];
  maxDocumentId: number;
  documentsListClone: Document[];

  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  } 

  getDocuments(){
    return this.documents.slice();
  };

  getDocument(id: string): Document{
    for(let document of this.documents){
      if(document.id === id){
        return document;
      }
    }
  }

  deleteDocument(document:Document){
    if(!document){
      return;
    }

    const pos = this.documents.indexOf(document);
    if(pos < 0){
      return;
    }

    this.documents.splice(pos, 1);
    this.documentChangedEvent.next(this.documents.slice());
  }

  getMaxId(){
    let maxId = 0;
    this.documents.forEach(document => {
      let currentId = +document.id;
      if(currentId > maxId){
        maxId = currentId;
      }
    });

    return maxId;
  }

  addDocument(newDocument: Document){
    if(newDocument === null || newDocument === undefined){
      return;
    }
    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();
    this.documents.push(newDocument);
    this.documentsListClone = this.documents.slice();

    this.documentChangedEvent.next(this.documentsListClone)

  }

  updateDocument(originalDocument: Document, newDocument: Document){
    if(originalDocument === null ||
      originalDocument === undefined ||
      newDocument === null ||
      newDocument === undefined){
        return;
      }

      const pos = this.documents.indexOf(originalDocument);
      if(pos < 0){
        return;
      }

      newDocument.id = originalDocument.id;
      this.documents[pos] = newDocument;
      this.documentsListClone = this.documents.slice();
      this.documentChangedEvent.next(this.documentsListClone);
  }
}


