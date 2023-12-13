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
  User1: User = {
    name: 'Benoit',
    surname: 'Benoit',
    age: 4,
  };

  User2: User = {
    name: 'CHristopher',
    surname: 'CHristopher',
    age: 2,
  };

  User3: User = {
    name: 'Lucas',
    surname: 'Lucas',
    age: 32,
  };
}
