import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contacts} from '../contacts.model';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  //@Output() selectedContactEvent = new EventEmitter<Contacts>();
  contacts:Contacts[] = [];
  contact:Contacts;
  private contactChangeSub;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();

    this.contactChangeSub = this.contactService.contactChangedEvent
    .subscribe((contacts)=>{
      this.contacts = contacts;
    })
  }

  ngOnDestroy(){
    this.contactChangeSub.unsubscribe();
  }

}
