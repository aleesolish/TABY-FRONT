import { Injectable } from '@angular/core';
import { User } from '../models/usuario';
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
export class UsuarioService {
  endpoint = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) { }
  private extraData(res: Response) {
    let body = res;

    return body;
  }
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  addUser(iuser: User): Observable<any>{ 
    return this.http.post(this.endpoint, iuser).pipe(map(this.extraData)); 
  } 
}