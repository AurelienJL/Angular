import { Component, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private httpService: HttpService) {}

  onSaveData() {
    this.httpService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.httpService.fetchRecipes();
  }
}
