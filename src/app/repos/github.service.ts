import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl = 'https://api.github.com/users';
  private username = 'vvskchaitanya';

  constructor(private http: HttpClient) { }

  getRepos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/${this.username}/repos`);
  }
}
