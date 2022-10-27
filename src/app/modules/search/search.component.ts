import { Component, OnInit } from '@angular/core';
import { SelectedMediumService } from 'src/app/core/services/selected-medium.service';
import { DataForUnselectedMedium } from 'src/app/core/types/types';
import { UnselectedMediumsService } from 'src/app/core/services/unselected-mediums.service';
import { MediumDataService } from 'src/app/core/services/medium-data.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  results: DataForUnselectedMedium[] = [];
  constructor(
    private selectedMediumService: SelectedMediumService,
    private unselectedMediumsService: UnselectedMediumsService,
    private mediumDataService: MediumDataService
  ) {}

  ngOnInit(): void {
    this.unselectedMediumsService.getTrending('all');
    this.unselectedMediumsService.state$.subscribe(
      (res) =>
        (this.results = this.mediumDataService.filteringByPoster(
          this.mediumDataService.filteringUndefined(res)
        ))
    );
  }

  search(queryFromForm: string): void {
    event?.preventDefault();
    this.unselectedMediumsService.getSearch(queryFromForm);
  }

  switchToTheMoviePage(ID: number, mediaType: string): void {
    this.selectedMediumService.switchToTheMoviePageFunction(ID, mediaType);
  }
}
