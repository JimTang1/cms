import { Injectable } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documents:Document[]=[];
  constructor() { 
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(){
    return this.documents.slice();
  };

}


