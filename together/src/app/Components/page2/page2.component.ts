import { Component } from '@angular/core';
import { FetcherService } from '../../Services/fetcher.service';
import { User } from '../../Models/User.model';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css',
})
export class Page2Component {
  constructor(private fetcher: FetcherService) {}

  onClick() {
    this.fetcher.getTasks().subscribe((data) => console.log(data));
  }
}
