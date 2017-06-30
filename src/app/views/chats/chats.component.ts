import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openChat(){
  	this.router.navigate(['/chat']);
  }

}
