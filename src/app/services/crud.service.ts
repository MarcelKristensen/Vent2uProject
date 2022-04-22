import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  apiURL = 'http://localhost:3316';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  getRooms() {
    return this.httpClient.get(`${this.apiURL}/api/rooms`);
  }

  getAllUsedZones() {
    return this.httpClient.get(`${this.apiURL}/api/userinputs`);
  }
}
