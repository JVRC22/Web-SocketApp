import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Persona } from '../Interfaces/persona';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private personas_url =environment.API_URL+'/personas';

  constructor(private http:HttpClient) { }

  //CRUD
  getPersonas(): Observable<Persona[]> 
  {
    return this.http.get<Persona[]>(this.personas_url)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  addPersona(persona: Persona):Observable<Persona>
  {
    return this.http.post<Persona>(this.personas_url, persona)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  actualizarPersona(persona: Persona, id: number)
  {
    return this.http.put<Persona>(this.personas_url + '/' + id, persona)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
    
  eliminarPersona(id: number)
  {
    return this.http.delete<Persona>(this.personas_url + '/' + id)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  mostrarUnico(id: number)
  {
    return this.http.get<Persona>(this.personas_url + '/' + id)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  //Error handling
  private handleError(error: HttpErrorResponse)
  {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
