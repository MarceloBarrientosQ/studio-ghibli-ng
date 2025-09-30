export class Film {
  title: string;
  originalTitle: string;
  originalTitleRomanised: string;
  director: string
  producer: string;
  releaseDate: string;
  runningTime: string;
  rtScore: string;
  description: string;
  image: string;
  url: string;

  constructor() {
    this.title = '';
    this.originalTitle = '';
    this.originalTitleRomanised = '';
    this.director = '';
    this.producer = '';
    this.releaseDate = '';
    this.runningTime = '';
    this.rtScore = '';
    this.description = '';
    this.image = '';
    this.url = '';
  }
}
