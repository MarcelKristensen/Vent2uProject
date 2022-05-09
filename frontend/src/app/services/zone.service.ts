import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ZoneService {
  apiURL = 'http://localhost:3316/api/zones';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  getAllZone() {
    return this.httpClient.get(`${this.apiURL}`);
  }

  getSpecificZone(id: any) {
    return this.httpClient.get(`${this.apiURL}/${id}`);
  }

  createZone(data: any) {
    return this.httpClient.post(`${this.apiURL}`, data);
  }

  updateZone(id: any, data: any) {
    return this.httpClient.post(`${this.apiURL}/${id}`, data);
  }

  deleteZone(id: any) {
    return this.httpClient.delete(`${this.apiURL}/${id}`);
  }
}
