import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
listOfPeople = ['Stephen', 'Elana', 'Kara'];

  addPerson() {
    let newPerson = prompt('Name someone');
    this.listOfPeople.push(newPerson);
  }
}