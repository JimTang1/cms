import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documentSelectedEvent = new EventEmitter<Document>();
  documentChangedEvent = new Subject<Document[]>();
  private documents:Document[] = [];
  maxDocumentId: number;
  documentsListClone: Document[];
  documentListChangedEvent = new Subject<Document[]>();
  private databaseUrl = "https://wdd430-cms-80d03-default-rtdb.firebaseio.com/documents.json";


  constructor(private http:HttpClient) {
    this.maxDocumentId = this.getMaxId();
  } 
  
  storeDocuments(){
    let documentStr = JSON.stringify(this.documents);
    const headers = new HttpHeaders({"Content-Type": "application/json"});

    this.http.put(this.databaseUrl, documentStr,{headers: headers})
    .subscribe(()=>{
      this.sortAndSend();
    })
  }

  sortAndSend(){
    this.documents = this.documents.sort(
      (a,b)=>a.name.toLowerCase()>b.name.toLowerCase()?1:
      b.name.toLowerCase()>a.name.toLowerCase()?-1:0);
    this.documentListChangedEvent.next(this.documents.slice());
  }

  getDocument(id: string): Document{
    for(let document of this.documents){
      if(document.id === id){
        return document;
      }
    }
  }

  getDocuments(){
    this.http.get<Document[]>(this.databaseUrl)
      .subscribe(
        (documents:Document[]) =>{
          this.documents = documents;
          this.maxDocumentId = this.getMaxId();
          this.sortAndSend();
        },(error)=>{
          console.log("Document Error " + error);
        }
      )
  }

  
  addDocument(newDocument: Document){
    if(!newDocument){
      return;
    }
    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();
    this.documents.push(newDocument);
    this.sortAndSend();
  }

  updateDocument(originalDocument: Document, newDocument: Document){
    if(!originalDocument ||!newDocument){
        return;
      }

      const pos = this.documents.indexOf(originalDocument);
      if(pos < 0){
        return;
      }

      newDocument.id = originalDocument.id;
      this.documents[pos] = newDocument;
      this.sortAndSend();
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
    this.sortAndSend();
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
}