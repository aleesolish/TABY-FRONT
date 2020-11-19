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

  getUsers(): Observable<any> {
    return this.http.get(this.endpoint);
  }
  addUser(iuser: User): Observable<any>{ 
    return this.http.post(this.endpoint, iuser).pipe(map(this.extraData)); 
  } 
  deleteUser(id): Observable<any> { 
    return this.http.delete( this.endpoint+'/'+id)
  }
  updateUser(id): Observable<any> {
    return this.http.get(this.endpoint+'/'+id).pipe(map(this.extraData));
  }
  update(id, iuser:User): Observable <any> {
      return this.http.put(this.endpoint+'/'+id, iuser)
  }
}