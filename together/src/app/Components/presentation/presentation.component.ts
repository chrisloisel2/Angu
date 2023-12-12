import { Component } from '@angular/core';

// Html = <app-presentation></app-presentation>
@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css',
})
export class PresentationComponent {
  name: string = 'Chris';
  surname: string = 'Benoit';
  age: number = 40;

  vieillir() {
    this.age = this.age + 1;
  }
}
