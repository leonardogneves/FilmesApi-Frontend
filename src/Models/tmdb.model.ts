export class Tmdb {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  constructor () {
    this.adult = false || true;
    this.backdrop_path = '';
    this.budget = 0;
    this.homepage = '';
    this.id = 0;
    this.imdb_id = '';
    this.original_language = '';
    this.original_title = '';
    this.overview = '';
    this.popularity = 0;
    this.poster_path = '';
    this.release_date = '';
    this.revenue = 0;
    this.runtime = 0;
    this.status = '';
    this.tagline = '';
    this.title = '';
    this.video = false || true;
    this.vote_average = 0;
    this.vote_count = 0;
  }
}
