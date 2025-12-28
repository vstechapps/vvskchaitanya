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

  constructor(private githubService: GithubService, private config: ConfigService) { }

  ngOnInit(): void {
    this.githubService.getRepos().subscribe((data: any[]) => {
      for (var i in this.config.config.repos)
        this.repos.push(data.find(x => x.name == this.config.config.repos[i]));
    });
  }

  open(r: any) {
    window.open(r.html_url);

  }
}

