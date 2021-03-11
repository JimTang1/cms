import { Message } from './message.model';
import { EventEmitter, Injectable } from '@angular/core';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private messages : Message[] =[];
  messageChangedEvent = new EventEmitter<Message[]>();
  messageListChangedEvent = new Subject<Message[]>();
  private databaseUrl = "https://wdd430-cms-80d03-default-rtdb.firebaseio.com/messages.json";
  constructor(private http: HttpClient) {
    //this.messages = MOCKMESSAGES;
   }

  //  getMessages(){
  //    return this.messages.slice();
  //  }

   getMessage(id:string): Message{
     for(let message of this.messages){
       if(message.id === id){
          return message;
       }
     }
   }

   getMessages(){
     this.http.get<Message[]>(this.databaseUrl)
     .subscribe((messages:Message[]) =>{
      this.messages = messages;
      this.messageListChangedEvent.next(this.messages.slice());
     });
   }

   addMessage(message: Message){
      this.messages.push(message);
      this.messageListChangedEvent.next(this.messages.slice());
   }
}
