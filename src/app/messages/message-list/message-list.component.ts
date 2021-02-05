import { Component, Input, OnInit } from '@angular/core';
import { CmsService } from 'src/app/cms.service';
import { Message } from '../message.model';
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  providers: [CmsService]
})
export class MessageListComponent implements OnInit {
  messages: Message[]=[
    new Message('1','Subject1','Message1', 'Wei Chun Tang')
  ];

  constructor(private cmsService: CmsService) { }

  ngOnInit(): void {
  }
  onAddMessage(message:Message){
    this.messages.push(message);
  }
}
