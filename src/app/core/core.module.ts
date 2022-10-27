import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { TopBarComponent } from './components/top-bar/top-bar.component';

import { MediumDataService } from './services/medium-data.service';
import { SelectedMediumService } from './services/selected-medium.service';
import { UnselectedMediumsService } from './services/unselected-mediums.service';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, AppRoutingModule, HttpClientModule],
  exports: [TopBarComponent],
  providers: [
    MediumDataService,
    SelectedMediumService,
    UnselectedMediumsService,
  ],
})
export class CoreModule {}
