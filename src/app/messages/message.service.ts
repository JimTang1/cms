import { Message } from './message.model';
import { EventEmitter, Injectable } from '@angular/core';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages : Message[] =[];
  messageChangedEvent = new EventEmitter<Message[]>();

  constructor() {
    this.messages = MOCKMESSAGES;
   }

   getMessages(){
     return this.messages.slice();
   }

   getMessage(id:string): Message{
     for(let message of this.messages){
       if(message.id === id){
          return message;
       }
     }
   }

   addMessage(message: Message){
      this.messages.push(message);
      this.messageChangedEvent.emit(this.messages.slice());
   }
}
