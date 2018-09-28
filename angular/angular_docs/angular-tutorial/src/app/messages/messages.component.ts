import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // Necessario fazer o inject do serviço no componente para ser chamado.
  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
  }

}
