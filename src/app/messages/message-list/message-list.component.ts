import { Component, Input, OnInit } from '@angular/core';
import { CmsService } from 'src/app/cms.service';
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

  constructor(private messageService : MessageService) { }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }
  onAddMessage(message:Message){
    this.messages.push(message);
  }
}
