import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {

  jwt: string = '';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    this.http.post('http://localhost:8081/auth/login', {"username": username, "password": password})
    .subscribe((response: any) => {
      this.jwt = 'Bearer ' + response.jwt;
      console.log(this.jwt);
    });
  }

  registerUser(username: string, password: string) {
    this.http.post('http://localhost:8081/auth/register', {"username": username, "password": password})
    .subscribe((response1: any) => {
      this.login(username, password);
    });
  }

  getJwt(): string {
    return this.jwt;
  }
}
