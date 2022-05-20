import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiURL = `${environment.server_url}/api/admins`;

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  getAllAdmins() {
    return this.httpClient.get(`${this.apiURL}`);
  }

  getSpecificAdmin(id: any) {
    return this.httpClient.get(`${this.apiURL}/${id}`);
  }
}
