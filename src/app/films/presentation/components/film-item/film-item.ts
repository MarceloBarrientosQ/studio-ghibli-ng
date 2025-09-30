import {Component, inject, input} from '@angular/core';
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
import {MatSnackBar} from '@angular/material/snack-bar';

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

  private snackBar = inject(MatSnackBar);

  async shareFilmUrl(){
    const urlToShare= this.film().url;

    if(navigator.share){
      try {
        await navigator.share({
          title: this.film().title,
          text: `Check out this film: ${this.film().title}`,
          url: urlToShare
        });
        this.snackBar.open('URL shared successfully!', 'Close', { duration: 3000 });
      }catch(e){
        this.snackBar.open('URL shared failed!', 'Close', { duration: 3000 });
      }
    }else {
      try {
        await navigator.clipboard.writeText(urlToShare);
        this.snackBar.open('URL copied to clipboard!', 'Close', { duration: 3000 });
      }catch(e){
        this.snackBar.open('Failed to copy URL!', 'Close', { duration: 3000 });
      }
    }
  }

  openImageInNewTab(){
    const imageUrl = this.film().image;
    window.open(imageUrl, '_blank');
  }

}
