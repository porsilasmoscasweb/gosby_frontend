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
  episodes: Episode[] = [];

  constructor(private _http: HttpClient, private _localStorageService: LocalStorageService) { }

  getPodcasts() {
    return this._http.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json').pipe(
      map(
        response => {
          this.res = response;
          this.res = this.res.feed.entry;

          for (const [key, value] of Object.entries(this.res)) {
            let podcast = new Podcast();

            this.entry = value;

            podcast.setPodcast(
              this.entry['im:image'][0].label,
              this.entry['im:name'].label,
              this.entry['summary'].label,
              this.entry['im:artist'].label,
              this.entry.id.attributes['im:id']
            )

            this.podcasts.push(podcast.getPodcast());
          }

          console.log('api');

          this._localStorageService.setWithExpiry('podcasts', this.podcasts)

          return this.podcasts;
        }
      )
    );
  }

  getEpisodes() {
    return this._http.get('https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20').pipe(
      map(
        response => {
        this.res = response;
        this.res = this.res.results;

        for (const [key, value] of Object.entries(this.res)) {
          let episode = new Episode();

          this.entry = value;

          episode.setEpisode(
            this.entry.trackId,
            this.entry.trackName,
            this.entry.description + '<b>this is a test</b>',
            this.entry.previewUrl,
            this.entry.releaseDate,
            this.entry.trackTimeMillis,
          )

          this.episodes.push(episode.getEpisodes());
        }

        console.log('api');

        this._localStorageService.setWithExpiry('episode', this.episodes)

        return this.episodes;
        }
      )
    );
  }

}
