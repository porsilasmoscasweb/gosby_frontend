import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Podcast } from '../models/podcast.model';
import { Episode } from '../models/episode.model';
import { LocalStorageService } from './localStorage-service.service';

@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {

  res: any;
  entry: any;
  podcasts: Podcast[] = [];
  episode: Episode[] = [];

  constructor(private _http: HttpClient, private _localStorageService: LocalStorageService) { }

  getPodcasts() {
    return this._http.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json').pipe(
      map(
        response => {
          this.res = response;
          this.res = this.res.feed.entry;

          for (const [key, value] of Object.entries(this.res)) {

            this.entry = value;

            this.podcasts.push(new Podcast(
              this.entry['im:image'][0].label,
              this.entry['im:name'].label,
              this.entry['summary'].label,
              this.entry['im:artist'].label,
              this.entry.id.attributes['im:id']
            ));
          }

          console.log('api');

          this._localStorageService.setWithExpiry('podcasts', this.podcasts)

          return this.podcasts;
        }
      )
    );
  }

  getEpisode() {
    return this._http.get('https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20').pipe(
      map(
        response => {
        this.res = response;
        this.res = this.res.results;

        for (const [key, value] of Object.entries(this.res)) {

          this.entry = value;

          this.episode.push(new Episode(
            this.entry.trackId,
            this.entry.trackName,
            this.entry.releaseDate,
            this.entry.trackTimeMillis,
          ));
        }

        console.log('api');

        this._localStorageService.setWithExpiry('episode', this.episode)

        return this.episode;
        }
      )
    );
  }

}
