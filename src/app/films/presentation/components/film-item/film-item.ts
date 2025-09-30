import {Component, input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle,
  MatCardTitle, MatCardTitleGroup
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {Film} from '../../../domain/model/film.entity';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-film-item',
  imports: [
    MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle,
    MatCardSubtitle, MatCardTitleGroup, MatButton, TranslatePipe
  ],
  templateUrl: './film-item.html',
  styleUrl: './film-item.css'
})
export class FilmItem {
  film = input.required<Film>();
}
