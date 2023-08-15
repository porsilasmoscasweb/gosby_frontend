import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Podcast } from '../models/podcast.model';
import { ApiserviceService } from '../services/api-service.service';
import { LocalStorageService } from '../services/localStorage-service.service';

@Component({
  selector: 'app-podcast-information',
  templateUrl: './podcast-information.component.html',
  styleUrls: ['./podcast-information.component.sass']
})

// TODO 

// DONE :: On the left, show the image, title and description of the podcast.
// DONE :: A click on the image, title, or author on the left bar should navigate to the podcast view.

export class PodcastInformationComponent {

  i: any;
  podcast: Podcast = new Podcast();
  podcasts: any;
  podcastId: any;

  constructor(private route: ActivatedRoute, private _apiservice: ApiserviceService, private _localStorageService: LocalStorageService) { }

  ngOnInit(){
    this.setPodcastId()

    let exists = new Podcast();
    exists = this.podcast.find(this.podcastId)
    
    if (!exists) {
      this.podcasts = this._apiservice.getPodcasts().subscribe((res) => {
        this.podcasts = res;
      });
    }
    
    this.podcast = this.podcast.find(this.podcastId)
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
