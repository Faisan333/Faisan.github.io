import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tokeninterceptor';
  result: any;
  constructor(private http:HttpClient){
    const path="https://jsonplaceholder.typicode.com/posts"
    this.result = http.get(path)
  }
  
}
