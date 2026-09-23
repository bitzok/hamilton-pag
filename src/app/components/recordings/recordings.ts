import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.html',
  styleUrl: './recordings.scss',
})
export class RecordingsComponent implements AfterViewInit, OnDestroy {
  protected readonly galleryVideos = [
    'vid1.mp4',
    'vid2.mp4',
    'vid3.mp4',
    'vid4.mp4',
    'vid5.mp4',
    'vid6.mp4',
    'vid7.mp4',
  ];

  @ViewChildren('galleryVideo')
  private readonly galleryVideoElements!: QueryList<ElementRef<HTMLVideoElement>>;
  private readonly videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target as HTMLVideoElement;

      if (entry.isIntersecting) {
        video.preload = 'auto';
        video.load();
        video.addEventListener('loadeddata', () => {
          void video.play().catch(() => undefined);
        }, { once: true });
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, { rootMargin: '160px 0px', threshold: 0.15 });

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


  ngAfterViewInit(): void {
    this.galleryVideoElements.forEach(({ nativeElement }) => {
      this.videoObserver.observe(nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.videoObserver.disconnect();
  }
}
