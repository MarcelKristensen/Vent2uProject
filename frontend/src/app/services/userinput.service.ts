import { Userinput } from '../models/userinput';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

const apiURL = 'http://localhost:3316/api/userinputs';

@Injectable({
  providedIn: 'root',
})
export class UserinputService {

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  getAllUserinputs() {
    return this.httpClient.get(apiURL);
  }

  getSpecificUserinput(id: any) {
    return this.httpClient.get(`${apiURL}/${id}`);
  }

  createUserinput(data: any) {
    return this.httpClient.post(apiURL, data);
  }

  updateUserinput(id: any, data: any) {
    return this.httpClient.post(`${apiURL}/${id}`, data);
  }

  deleteUserinput(id: any) {
    return this.httpClient.delete(`${apiURL}/${id}`);
  }

  getAllUsedZones() {
    return this.httpClient.get(apiURL);
  }

}
