import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PetitDejService {
  // Data stockée dans le service
  petit_dej = {
    boisson: 'café',
    viennoiserie: 'croissant',
    fruit: 'pomme',
    discussion: ['météo', 'politique', 'sport'],
  };

  constructor() {}

  // Methodes stockées dans le service

  manger() {
    console.log('manger');
  }

  boire() {
    console.log('boire');
  }
}
