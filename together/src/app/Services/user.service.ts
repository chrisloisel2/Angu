import { Injectable } from '@angular/core';
import { User } from '../Models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList: User[] = [
    {
      name: 'Mickael',
      surname: 'Seffar',
      age: 4,
      sexe: true,
      activity: ['Manger', 'Dormir'],
    },
    {
      name: 'Chris',
      surname: 'Loisel',
      age: 2,
      sexe: true,
      activity: ['Manger', 'Dormir', 'respirer'],
    },
    {
      name: 'Allan',
      surname: 'Duminy',
      age: 32,
      sexe: false,
      activity: ['Manger', 'Dormir', 'coder', 'respirer'],
    },
  ];

  listeFiltrer: User[] = this.userList;

  constructor() {}

  filtrageUser(age: number) {
    this.listeFiltrer = this.userList.filter((user) => user.age == age);
  }

  addUser() {
    this.userList.push({
      name: 'Mickael',
      surname: 'Seffar',
      age: 4,
      sexe: true,
      activity: ['Manger', 'Dormir'],
    });
  }
}
