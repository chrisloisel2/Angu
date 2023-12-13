import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PresentationComponent } from '../presentation/presentation.component';
import { User } from '../../Models/User.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PresentationComponent], // Class
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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
}
