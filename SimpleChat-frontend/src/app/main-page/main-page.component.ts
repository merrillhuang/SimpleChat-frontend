import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  currRooms: Object[]= [];
  numPages: number = 1;
  currPage: number = 1;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
    .get('http://api.open-notify.org/astros.json')
    .subscribe((response: any) => {
      const maxRooms = 2;
      let length: number = response.people.length;
      if (length % maxRooms !== 0) {
        this.numPages = Math.floor(length / maxRooms) + 1;
      } else {
        this.numPages = length / maxRooms;
      }
      // if (length < maxRooms) {
      //   for (let person of response.people) {
      //     this.currRooms.push(person);
      //   }
      // } else {
      //   if (this.numPages === this.currPage) {
      //     for (let i = (maxRooms * (this.currPage-1)); i < response.people.length; i++) {
      //       this.currRooms.push(response.people[i]);
      //     }
      //   }
        // for (let i = n)
        //   this.numPages = response.people.length / maxRooms;
      // }
    });
  }

  changePage(pageNum: number) {
    this.currPage = pageNum;
  }

  prevPage() {
    if (this.currPage > 1) {
      this.currPage--;
    } 
  }

  nextPage() {
    if (this.currPage < this.numPages) {
      this.currPage++;
    }
  }
 }
