import {FilmResource} from './film-resource';
import {Film} from '../domain/model/film.entity';

// Si el backend devuelve un array directo
export class FilmAssembler {
  static toEntityFromFilmResource(filmResource: FilmResource): Film {
    return {
      title: filmResource.title,
      originalTitle: filmResource.original_title,
      originalTitleRomanised: filmResource.original_title_romanised,
      director: filmResource.director,
      producer: filmResource.producer,
      releaseDate: filmResource.release_date,
      runningTime: filmResource.running_time,
      rtScore: filmResource.rt_score,
      description: filmResource.description,
      image: filmResource.image,
      url: filmResource.url,
    };
  }

  static toEntitiesFromResponse(response: FilmResource[]): Film[]{
    return response.map(filmResource => this.toEntityFromFilmResource(filmResource));
  }
}

// Si el backend devuelve un objeto contendor

/*
export class FilmAssembler {
  static toEntityFromFilmResource(filmResource: FilmResource): Film {
    return {
      title: filmResource.title,
      originalTitle: filmResource.original_title,
      originalTitleRomanised: filmResource.original_title_romanised,
      director: filmResource.director,
      producer: filmResource.producer,
      releaseDate: filmResource.release_date,
      runningTime: filmResource.running_time,
      rtScore: filmResource.rt_score,
      description: filmResource.description,
      image: filmResource.image,
      url: filmResource.url,
    };
  }

  static toEntitiesFromResponse(response: FilmResourceContainer): Film[] {
    return response.films.map(filmResource =>
      this.toEntityFromFilmResource(filmResource)
    );
  }
}
*/
