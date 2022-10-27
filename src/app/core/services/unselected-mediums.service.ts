import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataForUnselectedMedium } from '../types/types';
import { MediumDataService } from './medium-data.service';

@Injectable()
export class UnselectedMediumsService {
  _source = new BehaviorSubject<DataForUnselectedMedium[]>([]);
  state$: Observable<DataForUnselectedMedium[]> = this._source.asObservable();

  constructor(private mediumDataService: MediumDataService) {}

  getTrending(mediaType: string): void {
    this.mediumDataService
      .getTrendingData(mediaType)
      .subscribe((res: DataForUnselectedMedium[]) => this._source.next(res));
  }

  getChart(mediaType: string, sorting: string): void {
    this.mediumDataService
      .getChartData(mediaType, sorting)
      .subscribe((res: DataForUnselectedMedium[]) => this._source.next(res));
  }

  getUpcoming(): void {
    this.mediumDataService
      .getUpcomingData()
      .subscribe((res: DataForUnselectedMedium[]) => this._source.next(res));
  }

  getSearch(query: string): void {
    this.mediumDataService
      .getSearchedData(query)
      .subscribe((res: DataForUnselectedMedium[]) => this._source.next(res));
  }
}
