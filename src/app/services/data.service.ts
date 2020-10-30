import { Injectable } from '@angular/core';
import { Habit } from '../models/habit';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { map, retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  endpoint = 'http://localhost:8080/api/habit';

  constructor(private http: HttpClient) { }
  private extraData(res: Response) {
    let body = res;

    return body;
  }
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  addHabit(jabit: Habit): Observable<any>{ 
    return this.http.post(this.endpoint, jabit).pipe(map(this.extraData)); 
  } 
}
