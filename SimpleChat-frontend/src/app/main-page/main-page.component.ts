import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  rooms: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
    .get('http://api.open-notify.org/astros.json')
    .subscribe((response: any) => {
      this.rooms = response;
    });
  }
}
