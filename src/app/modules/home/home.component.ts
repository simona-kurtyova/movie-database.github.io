import { Component, OnInit } from '@angular/core';
import { DataForUnselectedMedium } from 'src/app/core/types/types';
import { SelectedMediumService } from 'src/app/core/services/selected-medium.service';
import { UnselectedMediumsService } from 'src/app/core/services/unselected-mediums.service';
import { MediumDataService } from 'src/app/core/services/medium-data.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataForUpComing: DataForUnselectedMedium[] = [];

  constructor(
    private selectedMediumService: SelectedMediumService,
    private unselectedMediumsService: UnselectedMediumsService,
    private mediumDataService: MediumDataService
  ) {}

  ngOnInit(): void {
    this.unselectedMediumsService.getUpcoming();

    this.unselectedMediumsService.state$.subscribe((res) => {
      this.dataForUpComing = this.mediumDataService.filteringByPoster(
        this.mediumDataService.filteringUndefined(res)
      );
    });
  }

  switchToTheMoviePage(ID: number, mediaType: string): void {
    this.selectedMediumService.switchToTheMoviePageFunction(ID, mediaType);
  }
}
