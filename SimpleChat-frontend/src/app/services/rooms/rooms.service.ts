import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  constructor(private http: HttpClient) { }

  get() {
    this.http
    .get('http://api.open-notify.org/astros.json')
    .subscribe((response: any) => console.log(response));
  }
}
