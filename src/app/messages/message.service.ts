import { Message } from './message.model';
import { Injectable } from '@angular/core';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages : Message[] =[];

  constructor() {
    this.messages = MOCKMESSAGES;
   }

   getMessages(){
     return this.messages.slice();
   }

}
