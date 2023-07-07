import { Component } from '@angular/core';
import { Message } from '../message.string';
import { MESSAGES } from '../messages';

@Component({
  selector: 'app-commsdisplay',
  templateUrl: './commsdisplay.component.html',
  styleUrls: ['./commsdisplay.component.css']
})
export class CommsdisplayComponent {
  msgTypeBroadcast = 1;
  selectedMessage?: Message;
  message: Message = {
    id: 1,
    name: "General Status Poll"
  };
  messages = MESSAGES;
  selectedHero?: Message;
  onSelect(msg: Message): void {
    this.selectedMessage = msg;
  }
}
