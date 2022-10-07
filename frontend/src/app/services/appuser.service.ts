import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpUrlEncodingCodec } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export class appUser {
  id?: number;
  brand: string;
  model: string;
  price: string;
}

@Injectable({
  providedIn: 'root'
})

export class AppuserService {

  endPoint: string = "http://localhost:8080/appuser";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(private httpClient: HttpClient) { }

  createUser(user: appUser): Observable<any> {
    return this.httpClient.post(this.endPoint, {}, {
      params: {
        brand: user.brand,
        model: user.model,
        price: user.price
      }
    })
      .pipe(
        catchError(this.handleError<appUser>('Error occured'))
      );
  }

  getUser(id): Observable<appUser[]> {
    return this.httpClient.get<appUser[]>(this.endPoint + '/' + id)
      .pipe(
        tap(_ => console.log(`User fetched: ${id}`)),
        catchError(this.handleError<appUser[]>(`Get user id=${id}`))
      );
  }

  getUsers(): Observable<appUser[]> {
    return this.httpClient.get<appUser[]>(this.endPoint)
      .pipe(
        tap(users => console.log('Users retrieved!')),
        catchError(this.handleError<appUser[]>('Get user', []))
      );
  }

  updateUser(id, user: appUser): Observable<any> {
    return this.httpClient.put(this.endPoint + '/' + id, {},{
      params: {
        brand: user.brand,
        model: user.model,
        price: user.price
      }
    })
      .pipe(
        tap(_ => console.log(`User updated: ${id}`)),
        catchError(this.handleError<appUser[]>('Update user'))
      );
  }

  deleteUser(id): Observable<appUser[]> {
    return this.httpClient.delete<appUser[]>(this.endPoint + '/' + id)
      .pipe(
        tap(_ => console.log(`User deleted: ${id}`)),
        catchError(this.handleError<appUser[]>('Delete user'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


}
