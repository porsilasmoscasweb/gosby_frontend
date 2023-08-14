import { Component } from '@angular/core';

import { ApiserviceService } from '../services/api-service.service';
import { LocalStorageService } from '../services/localStorage-service.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.sass']
})

// TODO

// DONE :: Show the 100 main popular podcasts from Apple(more info below)
// Cache the result for a day into the client memory so data will not be retrieved if the page refresh.
// There is a filter where user can search for the podcast title and author’s names.
// Filter as the user is writing.
// When the user click a podcast then navigate to the podcast details view.

export class PodcastComponent {

  podcasts: any;

  searchText: string = '';
  filterMetadata = { count: 0 };

  constructor(private _apiservice: ApiserviceService, private _localStorageService: LocalStorageService) { }

  ngOnInit() {

    this.podcasts = this._localStorageService.getWithExpiry('podcasts');

    if (this.podcasts) {
      this.podcasts = this.podcasts
    }
    else {
      this._apiservice.getPodcasts().subscribe((res) => {
        this.podcasts = res;
      });
    }
    
  }

}
