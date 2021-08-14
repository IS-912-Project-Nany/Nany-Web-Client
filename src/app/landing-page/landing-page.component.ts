import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private cookiesService: CookieService) { }

  ngOnInit(): void {
    if (this.cookiesService.check('nanyUsuarioId')) {
      this.isLogged = true;
    }
  }
}
