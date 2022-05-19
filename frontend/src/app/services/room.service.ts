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
export class RoomService {
  apiURL = `${environment.server_url}/api/rooms`;

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  getAllRooms() {
    return this.httpClient.get(`${this.apiURL}`);
  }

  getSpecificRoom(id: any) {
    return this.httpClient.get(`${this.apiURL}/${id}`);
  }

  createRoom(data: any) {
    return this.httpClient.post(`${this.apiURL}`, data);
  }

  updateRoom(id: any, data: any) {
    return this.httpClient.put(`${this.apiURL}/${id}`, data);
  }

  deleteRoom(id: any) {
    return this.httpClient.delete(`${this.apiURL}/${id}`);
  }
}
