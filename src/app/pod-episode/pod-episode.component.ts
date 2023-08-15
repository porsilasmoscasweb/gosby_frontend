import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Episode } from "../models/episode.model";

import { ApiserviceService } from '../services/api-service.service';
import { LocalStorageService } from '../services/localStorage-service.service';

@Component({
  selector: 'app-pod-episode',
  templateUrl: './pod-episode.component.html',
  styleUrls: ['./pod-episode.component.sass'],
})

// TODO

// DONE :: On the right side show the title and the description of the episode.
// DONE :: Use an HTML5 native player to play the podcast episode.
// DENE :: The description must accept HTML code and must not show the description with html code unescaped.

export class PodEpisodeComponent {
  
  episodes: any;
  podcastId: any;
  episodeId: any;
  episode: Episode = new Episode();
  i: any;
  exists: any;

  constructor(private route: ActivatedRoute, private _apiservice: ApiserviceService) { }

  ngOnInit() {

    this.setEpisodeId()

    let epi_exists = new Episode();
    epi_exists = this.episode.find(this.episodeId)

    if (!epi_exists) {
      this.episodes = this._apiservice.getEpisodes().subscribe((res) => {
        this.episodes = res;
      });
    }

    this.episode = this.episode.find(this.episodeId)

    this.exists = (this.episode.id != undefined)
  }

  setPodcastId() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const detail = params.get('podcastId')

      if (detail) {
        this.podcastId = + detail;
      }
    })
  }
  
  setEpisodeId() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const detail = params.get('episodeId')

      if (detail) {
        this.episodeId = + detail;
      }
    })
  }
}
