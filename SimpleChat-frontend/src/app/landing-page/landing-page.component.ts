import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtServiceService } from '../jwt-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  usernameField: string = '';

  passwordField: string = '';

  constructor(private http: HttpClient, public service: JwtServiceService) {}
  
  loginUser() {
    if (this.usernameField !== '' && this.passwordField !== '') {
      this.service.login(this.usernameField, this.passwordField);
    }
  }
  
  loginGuest() {
    this.service.login("Guest", "password")
  }

  registerUser() {
    if (this.usernameField !== '' && this.passwordField !== '') {
      this.service.registerUser(this.usernameField, this.passwordField);
    }
  }
}
