import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.css']
})
export class RoomPageComponent implements OnInit {

  roomId: string | null = '';
  room: any;
  chats: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
        this.roomId = params.get('id');
        this.http.get('http://api.open-notify.org/astros.json')
        .subscribe((response: any) => {
          let index = parseInt(this.roomId || '') - 1;
          this.room = response.people[index];
          // Todo: replace this with real data
          // chats will be set to response.find(id)'s ChatsList
          for (let i = 0; i < 10; i++) {
            this.chats.push({user: `User ${i+1}`, message: `Message ${i+1}`});
          }
        });
    });
  }
}
