import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { ConfigService } from '../config.service';

@Component({
    selector: 'app-repos',
    templateUrl: './repos.component.html',
    styleUrls: ['./repos.component.less'],
    standalone: false
})
export class ReposComponent implements OnInit {
  repos: any[] = [];

  constructor(private githubService: GithubService, private config:ConfigService) { }

  ngOnInit(): void {
    this.githubService.getRepos().subscribe((data: any[]) => {
      this.repos = data.filter(x=>this.config.config.repos.indexOf(x.name)>-1);
    });
  }

  open(r:any){
    window.open(r.html_url);
    
  }
}

