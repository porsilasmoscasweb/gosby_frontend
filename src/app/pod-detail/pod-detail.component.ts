import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ApiserviceService } from '../services/api-service.service';
import { LocalStorageService } from '../services/localStorage-service.service';
@Component({
  selector: 'app-pod-detail',
  templateUrl: './pod-detail.component.html',
  styleUrls: ['./pod-detail.component.sass']
})

// TODO

// DONE :: On the left, show the image, title and description of the podcast.
// DONE :: On the right
// DONE :: show the number of episodes.
// DONE :: show the list of episodes with the title, date and duration.
// DONE :: Cache data for a day.
// DONE :: When the user click on the title, the app must navigate to the Episode details view.

export class PodDetailComponent {

  podcastId: any;
  i: any;
  episode: any;
  podcast: any;
  totalEpisode: any;

  constructor(private route: ActivatedRoute, private _apiservice: ApiserviceService, private _localStorageService: LocalStorageService) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      const detail = params.get('podcastId')

      if(detail) {
        this.podcastId = + detail;
      }
    })

    this.podcast = this._localStorageService.getWithExpiry('podcasts');
    
    this.podcast = Object.values(this.podcast).filter(item => {
      const search = ['detail'];
      return search.some(key => {
        this.i = item;
        return String(this.i[key]).toLowerCase().includes(this.podcastId);
      });
    });

    this.podcast = this.podcast[0];

    this.episode = this._localStorageService.getWithExpiry('episode');

    if (this.episode) {
      this.episode = this.episode

      this.totalEpisode = this.episode.length;
    }
    else {
      this.episode = this._apiservice.getEpisode().subscribe((res) => {
        this.episode = res;

        this.totalEpisode = this.episode.length;
      });;
    }

  }

}
