import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Author } from '../model/author';

const API_URL = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private http: HttpClient = inject(HttpClient);

  public getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(`${API_URL}authors/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}