import { Component, Input } from '@angular/core';
import { User } from '../../Models/User.model';
import { CommonModule } from '@angular/common';
import { PetitDejService } from '../../Services/petit-dej.service';

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
  //   constructor(private dej: PetitDejService) {
  //     this.BoissonduMatin = this.dej.petit_dej.boisson;
  //   }

  BoissonduMatin: string = '';

  @Input()
  user!: User;

  vieillir() {}
}
