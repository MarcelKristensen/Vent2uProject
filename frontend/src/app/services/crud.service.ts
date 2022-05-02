import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  apiURL = environment.server_url;

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  getRooms() {
    return this.httpClient.get(`${this.apiURL}/api/rooms`);
  }

  getAllUsedZones() {
    return this.httpClient.get(`${this.apiURL}/api/userinputs`);
  }
}
