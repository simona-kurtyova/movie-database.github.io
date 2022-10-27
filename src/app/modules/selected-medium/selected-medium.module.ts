import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedMediumComponent } from './selected-medium.component';
import { SelectedMediumRoutingModule } from './selected-medium.routing.module';

@NgModule({
  declarations: [SelectedMediumComponent],
  imports: [CommonModule, SelectedMediumRoutingModule],
})
export class SelectedMediumModule {}
