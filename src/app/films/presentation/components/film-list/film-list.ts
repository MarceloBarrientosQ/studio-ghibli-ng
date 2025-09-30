import {Component, input} from '@angular/core';
import {Film} from '../../../domain/model/film.entity';
import {FilmItem} from '../film-item/film-item';

@Component({
  selector: 'app-film-list',
  imports: [FilmItem],
  templateUrl: './film-list.html',
  styleUrl: './film-list.css'
})
export class FilmList {
  films = input.required<Array<Film>>();
}
