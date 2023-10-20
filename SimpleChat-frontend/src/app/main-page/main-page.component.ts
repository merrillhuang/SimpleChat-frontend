import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms/rooms.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private roomsService: RoomsService) { }
}
