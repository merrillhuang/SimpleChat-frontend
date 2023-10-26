import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtServiceService } from '../jwt-service.service';

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

  constructor(private http: HttpClient, private service: JwtServiceService) { }

  ngOnInit(): void {
    this.getRooms();
    setInterval(() => {
      this.getRooms(); 
    }, 3000);
  }

  getRooms() {
    if (this.service.jwt !== '') {
      const header: HttpHeaders = new HttpHeaders().set('Authorization', this.service.jwt);
      this.http
      .get('http://localhost:8081/rooms', {headers: header})
      .subscribe((response: any) => {
        this.response = response;
        let length: number = response.data.length;
        if (length % this.maxRooms !== 0) {
          this.numPages = Math.floor(length / this.maxRooms) + 1;
        } else {
        this.numPages = length / this.maxRooms;
      }
      this.updateRoomDisplay();
    });
  }
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
      for (let i = (this.maxRooms * (this.currPage-1)); i < this.response.data.length; i++) {
        this.currRooms.push(this.response.data[i]);
      }
    } else {
      let startingIndex = (this.maxRooms * (this.currPage-1));
      for (let i = startingIndex; i < startingIndex + this.maxRooms; i++) {
        this.currRooms.push(this.response.data[i]);
      }
    }
  }

  createNewRoom() {
    const header: HttpHeaders = new HttpHeaders().set('Authorization', this.service.jwt);
    let roomName = prompt("New Room's name:");
    this.http.post('http://localhost:8081/rooms', {"name": roomName}, {headers: header})
    .subscribe((response: any) => {
    });
  }

  signOut() {
    this.service.jwt = '';
  }
}
 
