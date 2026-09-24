import { Component } from '@angular/core';

@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.html',
  styleUrl: './recordings.scss',
})
export class RecordingsComponent {
  protected readonly galleryVideos = [
    'vid1.mp4',
    'vid2.mp4',
    'vid3.mp4',
    'vid4.mp4',
    'vid5.mp4',
    'vid6.mp4',
    'vid7.mp4',
  ];

  protected startVideo(video: HTMLVideoElement): void {
    video.muted = true;
    video.loop = true;
    void video.play().catch(() => undefined);
  }

  protected startGalleryVideo(video: HTMLVideoElement): void {
    video.muted = true;
    video.loop = true;
    void video.play().catch(() => undefined);
  }
}
