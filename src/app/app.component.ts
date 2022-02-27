// Title: Assignment 8.2
// Author: Evan Durkin
// Date: February 27, 2022


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // string variable to hold assignment name
  assignment: string;

  constructor() {
    this.assignment = "Welcome to In-N-Out-Books"
  }
}
