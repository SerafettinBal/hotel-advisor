import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'hotel-advisor';


  constructor(private http: HttpClient) {}


}


