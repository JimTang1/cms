import { EventEmitter, Injectable } from '@angular/core';
import { Contacts } from './contacts.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';


@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private contacts : Contacts[] = [];
  contactSelectedEvent = new EventEmitter<Contacts>();

  constructor() { 
    this.contacts = MOCKCONTACTS;
  }

  getContacts():Contacts[]{
    return this.contacts.slice();
  };

  // getContacts(id:string): Contacts{
  //   for(let contact of contacts){
  //     if(contact.id === this.id){
  //       return contact.id;
  //     }
  //   }
  //   return null;
  // }
}
