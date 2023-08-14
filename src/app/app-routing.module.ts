import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PodcastComponent } from './podcast/podcast.component';
import { PodDetailComponent } from './pod-detail/pod-detail.component';
import { PodEpisodeComponent } from './pod-episode/pod-episode.component';

const routes: Routes = [
  { path: '', component: PodcastComponent },
  { path: 'podcast/:podcastId', component: PodDetailComponent },
  { path: 'podcast/:podcastId/episode/:episodeId', component: PodEpisodeComponent },

  { path: 'podcast', redirectTo: '', pathMatch: 'full' },
  
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
