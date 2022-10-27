import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedMediumComponent } from './selected-medium.component';

const routes: Routes = [
  {
    path: '',
    component: SelectedMediumComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedMediumRoutingModule {}
