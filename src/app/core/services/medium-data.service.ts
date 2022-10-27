import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { DataForSelectedMedium, DataForUnselectedMedium } from '../types/types';
import { round } from 'mathjs';

@Injectable()
export class MediumDataService {
  api_key: string = '976cf08dc08b16ea57e14311d7ecdce1';
  constructor(private httpClient: HttpClient) {}

  getQuery(
    url: string,
    query?: string,
    search: boolean = false
  ): Observable<{}> {
    if (search === false) {
      return this.httpClient.get(
        `https://api.themoviedb.org/3/${url}?api_key=${this.api_key}`
      );
    } else {
      return this.httpClient.get(
        `https://api.themoviedb.org/3/${url}?api_key=${this.api_key}&query=${query}`
      );
    }
  }

  getTrendingData(mediaType: string): Observable<DataForUnselectedMedium[]> {
    const toGetQuery: string = `trending/${mediaType}/week`;
    return this.getQuery(toGetQuery).pipe(
      map((data: any) => {
        return data.results.map((res: object) =>
          this.extractDataForTrending(res)
        );
      })
    );
  }

  getChartData(
    mediaType: string,
    sorting: string
  ): Observable<DataForUnselectedMedium[]> {
    const toGetQuery: string = `${mediaType}/${sorting}`;
    return this.getQuery(toGetQuery).pipe(
      map((data: any) => {
        return data.results.map((res: object) =>
          this.extractDataForChart(res, mediaType)
        );
      })
    );
  }

  getUpcomingData(): Observable<DataForUnselectedMedium[]> {
    const toGetQuery: string = `movie/upcoming`;
    return this.getQuery(toGetQuery).pipe(
      map((data: any) => {
        return data.results.map((res: object) =>
          this.extractDataForUpComing(res)
        );
      })
    );
  }

  getSearchedData(query: string): Observable<DataForUnselectedMedium[]> {
    const toGetQuery: string = `search/multi`;
    return this.getQuery(toGetQuery, query, true).pipe(
      map((data: any) => {
        return data.results.map((res: object) =>
          this.extractDataForSearch(res)
        );
      })
    );
  }

  getSelectedMediumData(
    id: number,
    media_type: string
  ): Observable<DataForSelectedMedium | undefined> {
    const toGetQuery: string = `${media_type}/${id}`;
    return this.getQuery(toGetQuery).pipe(
      map((data: object) => this.extractDataForSelectedMedia(data, media_type))
    );
  }

  extractDataForTrending(data: any): DataForUnselectedMedium | undefined {
    if (data.media_type === 'tv') {
      return {
        id: data.id,
        title: data.name,
        poster: 'https://image.tmdb.org/t/p/w500' + data.poster_path,
        media_type: data.media_type,
      };
    }
    if (data.media_type === 'movie') {
      return {
        id: data.id,
        title: data.title,
        poster: 'https://image.tmdb.org/t/p/w500' + data.poster_path,
        media_type: data.media_type,
      };
    }
    return undefined;
  }

  extractDataForChart(
    data: any,
    mediaType: string
  ): DataForUnselectedMedium | undefined {
    if (mediaType === 'tv') {
      return {
        id: data.id,
        title: data.name,
        poster: 'https://image.tmdb.org/t/p/w500' + data.poster_path,
        media_type: mediaType,
      };
    }
    if (mediaType === 'movie') {
      return {
        id: data.id,
        title: data.title,
        poster: 'https://image.tmdb.org/t/p/w500' + data.poster_path,
        media_type: mediaType,
      };
    } else return undefined;
  }

  extractDataForUpComing(data: any): DataForUnselectedMedium {
    return {
      id: data.id,
      title: data.title,
      poster: 'https://image.tmdb.org/t/p/w500' + data.poster_path,
      media_type: 'movie',
    };
  }

  extractDataForSearch(data: any): DataForUnselectedMedium | undefined {
    if (data.media_type === 'movie') {
      return {
        id: data.id,
        title: data.title,
        poster: 'https://image.tmdb.org/t/p/w500' + data.poster_path,
        media_type: data.media_type,
      };
    }
    if (data.media_type === 'tv') {
      return {
        id: data.id,
        title: data.name,
        poster: 'https://image.tmdb.org/t/p/w500' + data.poster_path,
        media_type: data.media_type,
      };
    } else {
      return undefined;
    }
  }

  extractDataForSelectedMedia(
    data: any,
    media_type: string
  ): DataForSelectedMedium | undefined {
    if (media_type === 'movie') {
      return {
        id: data.id,
        title: data.title,
        poster: 'https://image.tmdb.org/t/p/w500' + data.poster_path,
        media_type: media_type,
        original_language: data.original_language,
        overview: data.overview,
        popularity: round(data.vote_average, 1),
        status: data.status,
        tagline: data.tagline,
        runtime: data.runtime,
        release_date: data.release_date,
      };
    }
    if (media_type === 'tv') {
      return {
        id: data.id,
        title: data.name,
        poster: 'https://image.tmdb.org/t/p/w500' + data.poster_path,
        media_type: media_type,
        original_language: data.original_language,
        overview: data.overview,
        popularity: round(data.vote_average, 1),
        status: data.status,
        tagline: data.tagline,
        number_of_seasons: data.number_of_seasons,
        number_of_episodes: data.number_of_episodes,
      };
    }
    return undefined;
  }

  filteringByPoster(
    data: DataForUnselectedMedium[]
  ): DataForUnselectedMedium[] {
    return data.filter(
      (data: DataForUnselectedMedium) =>
        data.poster != `https://image.tmdb.org/t/p/w500${null}`
    );
  }

  filteringUndefined(
    data: DataForUnselectedMedium[]
  ): DataForUnselectedMedium[] {
    return data.filter((data: DataForUnselectedMedium) => data != undefined);
  }
}
