import { Routes } from '@angular/router';
import { Page1Component } from './Components/page1/page1.component';
import { Page2Component } from './Components/page2/page2.component';

export const routes: Routes = [
  { path: '', component: Page1Component },
  { path: 'page2', component: Page2Component },
];
