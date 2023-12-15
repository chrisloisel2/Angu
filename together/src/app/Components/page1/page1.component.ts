import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PresentationComponent } from '../presentation/presentation.component';
import { User } from '../../Models/User.model';
import { UserService } from '../../Services/user.service';
import { FiltreComponent } from '../filtre/filtre.component';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule, PresentationComponent, FiltreComponent],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css',
})
export class Page1Component {
  listeUser: User[] = this.user.userList;

  constructor(public user: UserService) {}

  addUser() {
    this.user.addUser();
  }
}
