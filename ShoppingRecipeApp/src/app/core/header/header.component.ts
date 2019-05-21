import { Component } from '@angular/core';
import { HttpEvent } from '@angular/common/http';

import { HttpService } from '../../shared/http.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private httpService: HttpService, private authService: AuthService) {}

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  onSaveData() {
    this.httpService.storeRecipes().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.httpService.fetchRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
 }
