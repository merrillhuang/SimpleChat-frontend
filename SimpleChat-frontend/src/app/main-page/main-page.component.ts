import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  response: any;
  currRooms: any[] = [];
  numPages: number = 1;
  currPage: number = 1;
  maxRooms: number = 5;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
    .get('http://api.open-notify.org/astros.json')
    .subscribe((response: any) => {
      this.response = response;
      let length: number = response.people.length;
      if (length % this.maxRooms !== 0) {
        this.numPages = Math.floor(length / this.maxRooms) + 1;
      } else {
        this.numPages = length / this.maxRooms;
      }
      if (length < this.maxRooms) {
        for (let person of response.people) {
          this.currRooms.push(person);
        }
      } else {
        for (let i = 0; i < this.maxRooms; i++) {
          this.currRooms.push(response.people[i]);
        }
      }
    });
  }

  changePage(pageNum: number) {
    this.currPage = pageNum;
    this.updateRoomDisplay();
  }

  prevPage() {
    if (this.currPage > 1) {
      this.currPage--;
    }
    this.updateRoomDisplay(); 
  }

  nextPage() {
    if (this.currPage < this.numPages) {
      this.currPage++;
    }
    this.updateRoomDisplay();
  }

  updateRoomDisplay() {
    this.currRooms = [];
    if (this.numPages === this.currPage) {
      for (let i = (this.maxRooms * (this.currPage-1)); i < this.response.people.length; i++) {
        this.currRooms.push(this.response.people[i]);
      }
    } else {
      let startingIndex = (this.maxRooms * (this.currPage-1));
      for (let i = startingIndex; i < startingIndex + this.maxRooms; i++) {
        this.currRooms.push(this.response.people[i]);
      }
    }
  }
}
