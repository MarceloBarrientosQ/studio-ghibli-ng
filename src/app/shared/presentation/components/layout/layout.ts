import {Component, inject} from '@angular/core';
import {FilmList} from '../../../../films/presentation/components/film-list/film-list';
import {FilmsStore} from '../../../../films/application/films.store';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {Footer} from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [
    FilmList,
    LanguageSwitcher,
    Footer
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  protected store = inject(FilmsStore);

  ngOnInit(): void {
    this.store.loadFilms();
  }
}
