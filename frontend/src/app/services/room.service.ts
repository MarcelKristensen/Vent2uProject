import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  apiURL = 'http://localhost:3316';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  getAllRooms() {
    return this.httpClient.get(`${this.apiURL}/api/rooms`);
  }

  getSpecificRoom(id: any) {
    return this.httpClient.get(`${this.apiURL}/api/rooms/${id}`);
  }

  createRoom(data: any) {
    return this.httpClient.post(`${this.apiURL}/api/rooms`, data);
  }

  updateRoom(id: any, data: any) {
    return this.httpClient.post(`${this.apiURL}/api/rooms/${id}`, data);
  }

  deleteRoom(id: any) {
    return this.httpClient.delete(`${this.apiURL}/${id}`);
  }
}
