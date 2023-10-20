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

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
        this.roomId = params.get('id');
        this.http.get('http://api.open-notify.org/astros.json')
        .subscribe((response: any) => {
          let index = parseInt(this.roomId || '');
          this.room = response.people[index];
        });
    });
  }
}
