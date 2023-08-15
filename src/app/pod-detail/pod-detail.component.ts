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

// DONE :: On the right
// DONE :: show the number of episodes.
// DONE :: show the list of episodes with the title, date and duration.
// DONE :: Cache data for a day.
// DONE :: When the user click on the title, the app must navigate to the Episode details view.

export class PodDetailComponent {
  
  podcastId: any;
  episode: any;
  totalEpisodes: any;

  constructor(private route: ActivatedRoute, private _apiservice: ApiserviceService, private _localStorageService: LocalStorageService) { }

  ngOnInit() {

    this.setPodcastId()

    this.episode = this._localStorageService.getWithExpiry('episode');

    if (this.episode) {
      this.episode = this.episode

      this.setTotalEpisodes()
    }
    else {
      this.episode = this._apiservice.getEpisodes().subscribe((res) => {
        this.episode = res;

        this.setTotalEpisodes()
      });;
    }

  }

  setTotalEpisodes(){
    this.totalEpisodes = this.episode.length;
  }

  setPodcastId() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const detail = params.get('podcastId')

      if (detail) {
        this.podcastId = + detail;
      }
    })
  }

}
