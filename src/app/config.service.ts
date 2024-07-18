import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config: any;

  constructor(private http: HttpClient) {
    this.loadConfig();
  }

  loadConfig() {
    this.http.get('/assets/config.json').subscribe(config => {
      this.config = config;
    });
  }
}
