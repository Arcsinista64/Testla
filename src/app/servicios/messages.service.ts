import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string [] = [];

  constructor() { }


  add (message: string)
  {
    let today = new Date();
    let time: string = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    this.messages.push(`${time} - ${message}`);
    console.log(time);
  }

  clear()
  {
    this.messages = [];
  }

}
