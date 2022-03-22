import { Component, OnInit } from '@angular/core';
import { User } from '../Model/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: User[] = [
    { name: 'Mahesh', age: 25 },
    { name: 'Shakti', age: 23 },
    { name: 'Krishna', age: 23 },
    { name: 'Radha', age: 21 },
    { name: 'Rishab', age: 25 }
  ];
  isValid: boolean = true;
  constructor() {}
  toggle(event: any) {
    this.isValid = event.target.checked;
  }
}
