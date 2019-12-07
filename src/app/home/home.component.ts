import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employee: any;

  @Input() set data(value) {
    this.employee = value;
  };

  constructor() { }

  ngOnInit() {
  }

}
