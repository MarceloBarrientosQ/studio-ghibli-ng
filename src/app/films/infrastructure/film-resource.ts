// Si me llega el json como un objeto contenedor entonces:

// interface FilmResourceContainer {
//   films: FilmResource[];
// }

// Si me llega el json como un array de objetos entonces:
export interface FilmResource {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
}
