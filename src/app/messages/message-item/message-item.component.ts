import { Message } from '../message.model';
import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contacts/contact.service';
import { Contacts } from 'src/app/contacts/contacts.model';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() message:Message;
  messageSender :string;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    const contact: Contacts = this.contactService.getContacts(this.message.sender);
    this.messageSender = contact.name;
  }

}
