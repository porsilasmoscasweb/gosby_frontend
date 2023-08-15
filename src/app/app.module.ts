import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './filter.pipe';

import { PodcastComponent } from './podcast/podcast.component';
import { PodDetailComponent } from './pod-detail/pod-detail.component';
import { PodEpisodeComponent } from './pod-episode/pod-episode.component';
import { PodcastInformationComponent } from './podcast-information/podcast-information.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    PodcastComponent,
    PodDetailComponent,
    PodEpisodeComponent,
    PodcastInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
