import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contacts } from './contacts.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private contacts : Contacts[];
  contactSelectedEvent = new EventEmitter<Contacts>();
  contactChangedEvent = new Subject<Contacts[]>();
  contactListChangedEvent = new Subject<Contacts[]>();
  maxContactId: number;
  contactsListClone: Contacts[];
  private databaseUrl = "https://wdd430-cms-80d03-default-rtdb.firebaseio.com/contacts.json";


  constructor(private http:HttpClient) {
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
  }

  storeContacts(){
    let contactStr = JSON.stringify(this.contacts);
    const headers = new HttpHeaders({"Content-Type":"application/json"});

    this.http.put(this.databaseUrl, contactStr, {headers: headers})
      .subscribe(()=>{
        this.sortAndSend();
      })
    }
  
  sortAndSend(){
    this.contacts = this.contacts.sort(
     (a,b)=>a.name.toLowerCase()>b.name.toLowerCase()?1:
      b.name.toLowerCase()>a.name.toLowerCase()? -1:0)

    this.contactListChangedEvent.next(this.contacts.slice());
  }

  getContact(id:string): Contacts{
    for(let contact of this.contacts){
      if(contact.id === id){
        return contact;
      }
    }
    return null;
  }

  getContacts(){
    this.http.get<Contacts[]>(this.databaseUrl)
    .subscribe((contacts:Contacts[])=>{
      this.contacts = contacts;
      this.maxContactId = this.getMaxId();
      this.sortAndSend();
    },(error)=>{
      console.log("Contact Error: " + error);
    })
  }

  deleteContact(contacts:Contacts){
    if(!contacts){
      return;
    }

    const pos = this.contacts.indexOf(contacts);
    if(pos < 0){
      return;
    }

    this.contacts.splice(pos, 1);
    this.sortAndSend();
  }

  getMaxId(){
    let maxId = 0;
    this.contacts.forEach(contact =>{
      let currentId = +contact.id;
      if(currentId > maxId){
        maxId = currentId;
      }
    });

    return maxId;
  }

  addContact(newContact: Contacts){
    if(newContact === null ||
      newContact === undefined){
        return;
      }

      this.maxContactId++;
      newContact.id = this.maxContactId.toString();
      this.contacts.push(newContact);
      this.sortAndSend();
    }

  updateContact(originalContact: Contacts, newContact: Contacts){
    if(!originalContact||!newContact){
        return;
      }

      const pos = this.contacts.indexOf(originalContact);
      if(pos < 0){
        return;
      }

      newContact.id = originalContact.id;
      this.contacts[pos] = newContact;
      this.sortAndSend();
  }
}
