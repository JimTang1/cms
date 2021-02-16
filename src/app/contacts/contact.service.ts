import { EventEmitter, Injectable } from '@angular/core';
import { Contacts } from './contacts.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';


@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private contacts : Contacts[];
  contactSelectedEvent = new EventEmitter<Contacts>();

  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  getContacts():Contacts[]{
    return this.contacts.slice();
  }

  getContactId(id: string){
    return this.contacts[id];
  }

  getContact(id:string): Contacts{
    for(let contact of this.contacts){
      if(contact.id === id){
        return contact;
      }
    }
    return null;
  }
}
