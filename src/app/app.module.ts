import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PodcastComponent } from './podcast/podcast.component';
import { PodDetailComponent } from './pod-detail/pod-detail.component';
import { PodEpisodeComponent } from './pod-episode/pod-episode.component';

@NgModule({
  declarations: [
    AppComponent,

    PodcastComponent,
    PodDetailComponent,
    PodEpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
