import {computed, inject, Injectable, signal} from '@angular/core';
import {Film} from '../domain/model/film.entity';
import {FilmsApi} from '../infrastructure/films-api';

@Injectable({
  providedIn: 'root'
})
export class FilmsStore {
  private filmsSignal = signal<Film[]>([]);
  private filmApi = inject(FilmsApi);

  readonly films = computed(() => this.filmsSignal());

  loadFilms(): void {
    if(this.filmsSignal().length === 0) {
      this.filmApi.getFilms().subscribe(films => {
        this.filmsSignal.set(films);
      })
    }
  }
}
