import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'trending',
    loadChildren: () =>
      import('./modules/trending/trending.module').then(
        (m) => m.TrendingModule
      ),
  },
  {
    path: 'chart',
    loadChildren: () =>
      import('./modules/chart/chart.module').then((m) => m.ChartModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./modules/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'selected-medium',
    loadChildren: () =>
      import('./modules/selected-medium/selected-medium.module').then(
        (m) => m.SelectedMediumModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
