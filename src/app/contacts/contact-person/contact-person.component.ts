import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contacts } from '../contacts.model';

@Component({
  selector: 'app-contact-person',
  templateUrl: './contact-person.component.html',
  styleUrls: ['./contact-person.component.css']
})
export class ContactPersonComponent implements OnInit {
  @Input() contact: Contacts;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  onSelected(contact: Contacts){
    //this.selectedContactEvent.emit(contact);
    this.contactService.contactSelectedEvent.emit(contact);
  }
}
