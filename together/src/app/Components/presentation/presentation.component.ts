import { Component, Input } from '@angular/core';

// Html = <app-presentation></app-presentation>
@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css',
})
export class PresentationComponent {
  @Input()
  name!: string;

  @Input()
  surname: string = 'Benoit';

  @Input()
  age: number = 40;

  vieillir() {
    this.age = this.age + 1;
  }
}
