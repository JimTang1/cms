import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contacts } from './contacts.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';


@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private contacts : Contacts[];
  contactSelectedEvent = new EventEmitter<Contacts>();
  contactChangedEvent = new Subject<Contacts[]>();
  maxContactId: number;
  contactsListClone: Contacts[];


  constructor() {
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
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

  deleteContact(contacts:Contacts){
    if(!contacts){
      return;
    }

    const pos = this.contacts.indexOf(contacts);
    if(pos < 0){
      return;
    }

    this.contacts.splice(pos, 1);
    this.contactChangedEvent.next(this.contacts.slice());
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
      this.contactsListClone = this.contacts.slice();

      this.contactChangedEvent.next(this.contactsListClone);
  }

  updateContact(originalContact: Contacts, newContact: Contacts){
    if(originalContact === null ||
      originalContact === undefined ||
      newContact === null ||
      newContact === undefined){
        return;
      }

      const pos = this.contacts.indexOf(originalContact);
      if(pos < 0){
        return;
      }

      newContact.id = originalContact.id;
      this.contacts[pos] = newContact;
      this.contactsListClone = this.contacts.slice();
      this.contactChangedEvent.next(this.contactsListClone);
  }
}
