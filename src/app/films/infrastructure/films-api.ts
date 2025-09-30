import {inject, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {map, Observable, tap} from 'rxjs';
import {Film} from '../domain/model/film.entity';
import {HttpClient} from '@angular/common/http';
import {FilmResource} from './film-resource';
import {FilmAssembler} from './film-assembler';

@Injectable({
  providedIn: 'root'
})
export class FilmsApi {
  private baseUrl = environment.filmsProviderApiBaseUrl;
  private filmsEndpointPath = environment.filmsProviderFilmsEndpointPath;
  private http = inject(HttpClient);

  getFilms(): Observable<Film[]> {
    return this.http.get<FilmResource[]>(`${this.baseUrl}${this.filmsEndpointPath}`)
      .pipe(
        tap(data => console.log('👉 Data cruda desde el backend:', data)),
        map(resource => FilmAssembler.toEntitiesFromResponse(resource))
      );
  }

  /*
  getFilms(): Observable<Film[]> {
    return this.http.get<FilmResourceContainer>(`${this.baseUrl}${this.filmsEndpointPath}`)
      .pipe(
        map(resource => FilmAssembler.toEntitiesFromResponse(resource))
      );
  }
  */

}
