import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { JwtServiceService } from '../jwt-service.service';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.css']
})
export class RoomPageComponent implements OnInit {

  roomId: string | null = '';
  room: any;
  chats: any[] = [];
  users: any[] = [];
  messageField: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private service: JwtServiceService) {}

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      this.roomId = params.get('id');
      this.getChats();
    });
    setInterval(() => {
      this.getChats(); 
    }, 3000);
  }

  getChats() {
    if (this.service.jwt !== '') {
      const header: HttpHeaders = new HttpHeaders().set('Authorization', this.service.jwt);
      this.http.get(`http://localhost:8081/rooms/${this.roomId}`, {headers: header})
      .subscribe((response: any) => {
        this.chats = response.data.chatList;
        console.log(this.chats);
        this.http.get(`http://localhost:8081/rooms/${this.roomId}/chats`, {headers: header})
        .subscribe((response2: any) => {
          this.users = response2.data;
        });
      });
    }
  }

  createNewMessage() {
    if (this.messageField !== '') {
      const header: HttpHeaders = new HttpHeaders().set('Authorization', this.service.jwt);
      this.http.post(`http://localhost:8081/rooms/${this.roomId}`, {"message": this.messageField}, {headers: header})
      .subscribe((response: any) => {
      });
    }
    this.messageField = '';
  }
  
  deleteMessage(chatId: number) {
    const header: HttpHeaders = new HttpHeaders().set('Authorization', this.service.jwt);
    this.http.delete(`http://localhost:8081/rooms/${this.roomId}/chats/${chatId}`, {headers: header})
    .subscribe((response: any) => {
    });
  }
  
  editMessage(chatId: number) {
    let newMessage = prompt("Please enter your new message");
    const header: HttpHeaders = new HttpHeaders().set('Authorization', this.service.jwt);
    this.http.put(`http://localhost:8081/rooms/${this.roomId}/chats/${chatId}`, {"message": newMessage}, {headers: header})
    .subscribe((response: any) => {
    });
  }

  checkUser(chatId: number) {
    // console.log(chatId);
    // let answer: boolean = false;
    const header: HttpHeaders = new HttpHeaders().set('Authorization', this.service.jwt);
    this.http.get(`http://localhost:8081/rooms/${this.roomId}/chats/${chatId}`, {headers: header})
    .subscribe((response: any) => {
      console.log(response);
      return response;
    });
    // return answer;
  }
}
