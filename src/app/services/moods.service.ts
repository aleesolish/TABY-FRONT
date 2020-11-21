import { Injectable } from '@angular/core';
import { Mood } from '../models/mood';
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
export class MoodsService {

  endpoint = 'http://localhost:8080/api/moods';

  constructor(private http: HttpClient) { }
  private extraData(res: Response) {
    let body = res;

    return body;
  }
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  getMoods(): Observable<any> {
    return this.http.get(this.endpoint);
  }
  addMood(mud: Mood): Observable<any>{ 
    return this.http.post(this.endpoint, mud).pipe(map(this.extraData)); 
  } 
  
}
