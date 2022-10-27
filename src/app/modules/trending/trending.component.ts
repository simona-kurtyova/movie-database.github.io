import { Component, OnInit } from '@angular/core';
import { SelectedMediumService } from 'src/app/core/services/selected-medium.service';
import { UnselectedMediumsService } from 'src/app/core/services/unselected-mediums.service';
import { DataForUnselectedMedium } from 'src/app/core/types/types';
import { MediumDataService } from 'src/app/core/services/medium-data.service';

@Component({
  selector: 'trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  trending: DataForUnselectedMedium[] = [];
  allTitle: string = 'All';
  moviesTitle: string = 'Movies';
  tvShowsTitle: string = 'TV Shows';
  selectedButton: string = this.allTitle;
  constructor(
    private selectedMediumService: SelectedMediumService,
    private unselectedMediumsService: UnselectedMediumsService,
    private mediumDataService: MediumDataService
  ) {}

  ngOnInit(): void {
    this.unselectedMediumsService.getTrending('all');
    this.unselectedMediumsService.state$.subscribe((res) => {
      this.trending = this.mediumDataService.filteringByPoster(
        this.mediumDataService.filteringUndefined(res)
      );
    });
  }

  change(clickedButton: string, mediaType: string): void {
    this.selectedButton = clickedButton;
    this.unselectedMediumsService.getTrending(mediaType);
  }

  switchToTheMoviePage(ID: number, mediaType: string): void {
    this.selectedMediumService.switchToTheMoviePageFunction(ID, mediaType);
  }
}
