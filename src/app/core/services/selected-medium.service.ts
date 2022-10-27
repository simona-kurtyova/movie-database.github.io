import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SelectedMedium } from '../types/types';

@Injectable()
export class SelectedMediumService {
  selectedMedium: SelectedMedium | undefined;

  constructor(private router: Router) {}

  switchToTheMoviePageFunction(ID: number, mediaType: string): void {
    this.selectedMedium = {
      id: ID,
      media_type: mediaType,
    };
    this.router.navigate(['/selected-medium']);
  }

  getIdAndMediaType(): SelectedMedium | undefined {
    let copyOfTheMedium: SelectedMedium | undefined = this.selectedMedium;
    return copyOfTheMedium;
  }
}
