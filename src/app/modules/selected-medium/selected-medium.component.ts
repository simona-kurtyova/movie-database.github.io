import { Component, OnInit } from '@angular/core';
import { SelectedMediumService } from 'src/app/core/services/selected-medium.service';
import {
  DataForSelectedMedium,
  SelectedMedium,
} from 'src/app/core/types/types';
import { MediumDataService } from 'src/app/core/services/medium-data.service';

@Component({
  selector: 'selected-medium',
  templateUrl: './selected-medium.component.html',
  styleUrls: ['./selected-medium.component.css'],
})
export class SelectedMediumComponent implements OnInit {
  selectedMedium: DataForSelectedMedium | undefined;
  idAndTypeOfSelectedMedium: SelectedMedium | undefined;

  constructor(
    private selectedMediumService: SelectedMediumService,
    private mediumDataService: MediumDataService
  ) {}

  ngOnInit(): void {
    this.idAndTypeOfSelectedMedium =
      this.selectedMediumService.getIdAndMediaType();

    if (this.idAndTypeOfSelectedMedium) {
      this.mediumDataService
        .getSelectedMediumData(
          this.idAndTypeOfSelectedMedium.id,
          this.idAndTypeOfSelectedMedium.media_type
        )
        .subscribe((res) => (this.selectedMedium = res));
    }
  }
}
