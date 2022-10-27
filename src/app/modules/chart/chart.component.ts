import { Component, OnInit } from '@angular/core';
import { SelectedMediumService } from 'src/app/core/services/selected-medium.service';
import { DataForUnselectedMedium } from 'src/app/core/types/types';
import { UnselectedMediumsService } from 'src/app/core/services/unselected-mediums.service';
import { MediumDataService } from 'src/app/core/services/medium-data.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  dataForChart: DataForUnselectedMedium[] = [];
  topRatedMovies: string = 'Top Rated Movies';
  mostPopularMovies: string = 'Most Popular Movies';
  topRatedTVShows: string = 'Top Rated TV Shows';
  mostPopularTvShows: string = 'Most Popular TV Shows';
  selectedButton: string = this.topRatedMovies;

  constructor(
    private selectedMediumService: SelectedMediumService,
    private unselectedMediumsService: UnselectedMediumsService,
    private mediumDataService: MediumDataService
  ) {}

  ngOnInit(): void {
    this.unselectedMediumsService.getChart('movie', 'top_rated');

    this.unselectedMediumsService.state$.subscribe((res) => {
      this.dataForChart = this.mediumDataService.filteringByPoster(
        this.mediumDataService.filteringUndefined(res)
      );
    });
  }

  changeChart(mediaType: string, sorting: string, clickedButton: string): void {
    this.selectedButton = clickedButton;
    this.unselectedMediumsService.getChart(mediaType, sorting);
  }

  switchToTheMoviePage(ID: number, mediaType: string): void {
    this.selectedMediumService.switchToTheMoviePageFunction(ID, mediaType);
  }
}
