import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MessageService } from './message-service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [ CommonModule ],
  templateUrl: './message.html',
  styleUrl: './message.css',
})
export class Message implements OnInit {

  
  showMessages = false;
  errors$: Observable<string[]>

  constructor(public messagesService : MessageService ){

  }

  ngOnInit(): void {
      this.errors$ = this.messagesService.errors$.pipe(
        tap(() => this.showMessages = true)
      )
  }


  onClose(){
    this.showMessages = false
  }


}
