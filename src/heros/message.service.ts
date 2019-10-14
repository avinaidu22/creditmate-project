import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class MessageService {
  messages:String[] =[];

  constructor() { }

  addMessage(message:String){
    this.messages.push(message);
  }

  clearMessage(){
    this.messages=[];
  }

}