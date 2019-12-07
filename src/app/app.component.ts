import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  employeeData$: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.employeeData$ = this.http.get('http://localhost:4200/assets/data.json');
  }
  
}
