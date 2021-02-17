import { EventEmitter, Injectable } from '@angular/core';
import { Contacts } from './contacts.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';


@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private contacts : Contacts[];
  contactSelectedEvent = new EventEmitter<Contacts>();
  contactChangedEvent = new EventEmitter<Contacts[]>();

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

  deleteDocument(contacts:Contacts){
    if(!contacts){
      return;
    }

    const pos = this.contacts.indexOf(contacts);
    if(pos < 0){
      return;
    }

    this.contacts.splice(pos, 1);
    this.contactChangedEvent.emit(this.contacts.slice());
  }
}
