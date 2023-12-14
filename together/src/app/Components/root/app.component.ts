import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PresentationComponent } from '../presentation/presentation.component';
import { User } from '../../Models/User.model';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PresentationComponent], // Class
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  listeUser: User[] = this.user.userList;

  constructor(private user: UserService) {}

  addUser() {
    this.user.addUser();
  }
}
