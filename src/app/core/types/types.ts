export interface DataForUnselectedMedium {
  id: number;
  title: string;
  poster: string;
  media_type: string;
}

export interface DataForSelectedMedium {
  id: number;
  title: string;
  poster: string;
  media_type: string;
  original_language: string;
  overview: string;
  popularity: number;
  status: string;
  tagline: string;
  runtime?: number;
  number_of_seasons?: number;
  number_of_episodes?: number;
  release_date?: string;
}

export interface SelectedMedium {
  id: number;
  media_type: string;
}
