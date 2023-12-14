import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-filtre',
  standalone: true,
  imports: [],
  templateUrl: './filtre.component.html',
  styleUrl: './filtre.component.css',
})
export class FiltreComponent {
  constructor(private user: UserService) {}

  filtrer(nb: number) {
    this.user.filtrageUser(nb);
  }
}
