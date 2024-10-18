import { Injectable, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  users: User[] = [];


  constructor() {}
  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers(): Promise<User[]> {
    let response = await fetch('assets/data/db.users.json');
    let data = await response.json();
    return data as User[];
  }
  
}
