import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetcherService {
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get('http://82.165.127.44/api/taches');
  }

  getTask(id: number) {
    return this.http.get('http://82.165.127.44/api/taches/' + id);
  }
}
