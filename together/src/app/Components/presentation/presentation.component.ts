import { Component, Input } from '@angular/core';
import { User } from '../../Models/User.model';
import { CommonModule } from '@angular/common';

// Html = <app-presentation></app-presentation>
@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css',
})
export class PresentationComponent {
  //   @Input()
  //   name!: string;

  //   @Input()
  //   surname: string = 'Benoit';

  //   @Input()
  //   age: number = 40;

  @Input()
  user!: User;

  vieillir() {
    this.user.age = this.user.age + 1;
  }
}
