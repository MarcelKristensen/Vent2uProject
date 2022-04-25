import { UserInput } from '../models/userinput.model';
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
  
  getAllUserInputs(): Observable<UserInput[]> {
    return this.httpClient.get<UserInput[]>(`${apiURL}`);
  }

  getUserInputId(id: any): Observable<any> {
    return this.httpClient.get(`${apiURL}/${id}`);
  }
 
}
