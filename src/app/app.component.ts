import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'hotel-advisor';
 
  readonly ROOT_URL = 'https://4001.hoteladvisor.net/'

  posts: any;

  constructor(private http: HttpClient) {}

getPosts(){
  this.posts = this.http.get(this.ROOT_URL+ '/infos')
}

}
