import { Injectable } from '@angular/core';
import { Admin } from '../models/admins';
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
export class AdminsService {
  endpoint = 'http://localhost:8080/api/admins';

  constructor(private http: HttpClient) { }
  private extraData(res: Response) {
    let body = res;

    return body;
  }
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  getAdmins(): Observable<any> {
    return this.http.get(this.endpoint);
  }
  addAdmin(admon: Admin): Observable<any>{ 
    return this.http.post(this.endpoint, admon).pipe(map(this.extraData)); 
  } 
  deleteAdmin(id): Observable<any> { 
    return this.http.delete( this.endpoint+'/'+id)
  }
  updateAdmin(id): Observable<any> {
    return this.http.get(this.endpoint+'/'+id).pipe(map(this.extraData));
  }
  update(id, admon:Admin): Observable <any> {
      return this.http.put(this.endpoint+'/'+id, admon)
  }
}