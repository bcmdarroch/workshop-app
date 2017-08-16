import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoFilterComponent } from './video-filter/video-filter.component';

const routes: Routes = [
  { path: '', component: VideoDashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideoDashboardComponent, VideoPlayerComponent, VideoListComponent, VideoFilterComponent]
})
export class DashboardModule { }
