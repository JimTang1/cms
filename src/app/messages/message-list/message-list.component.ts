import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contacts/contact.service';
import { Contacts } from 'src/app/contacts/contacts.model';
import { Message } from '../message.model';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  providers: [MessageService]
})
export class MessageListComponent implements OnInit {
  messages: Message[]=[];
  messageSender :string;

  constructor(private messageService : MessageService,
    private contactService: ContactService) { }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
    this.messageService.messageChangedEvent
    .subscribe(
      (message : Message[]) =>{
        this.messages = message;
      }
    )
  }

}
