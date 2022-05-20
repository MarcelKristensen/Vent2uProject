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
export class ZoneService {
  apiURL = `${environment.server_url}/api/zones`;

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  getAllZones() {
    return this.httpClient.get(`${this.apiURL}`);
  }

  getSpecificZone(id: any) {
    return this.httpClient.get(`${this.apiURL}/${id}`);
  }

  createZone(data: any) {
    return this.httpClient.post(`${this.apiURL}`, data);
  }

  updateZone(id: any, data: any) {
    return this.httpClient.put(`${this.apiURL}/${id}`, data);
  }

  deleteZone(id: any) {
    return this.httpClient.delete(`${this.apiURL}/${id}`);
  }
}
