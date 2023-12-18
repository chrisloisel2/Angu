import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
  // j'ajoute provideHttpClient() pour que le compilateur ne râle pas
  // il sert a donner le service HttpClient à l'application
};
