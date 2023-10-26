import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(private http: HttpClient) {}
  
  loginGuest() {
    const header: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', 'http:localhost/4200/*');
    this.http.post('http://localhost:8081/auth/register', {"username": "Guest", "password": "password"}, {headers: header})
    .subscribe((response: any) => {
      console.log(response);
    })
  }
}
