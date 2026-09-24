import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  protected startVideo(video: HTMLVideoElement): void {
    video.muted = true;
    video.loop = true;
    void video.play().catch(() => undefined);
  }

  protected scrollToBehindCamera(event: Event): void {
    event.preventDefault();
    document.getElementById('behind-camera')?.scrollIntoView({ behavior: 'smooth' });
  }

  protected scrollToRecordings(event: Event): void {
    event.preventDefault();
    document.getElementById('recordings')?.scrollIntoView({ behavior: 'smooth' });
  }

  protected scrollToEditing(event: Event): void {
    event.preventDefault();
    document.getElementById('editing')?.scrollIntoView({ behavior: 'smooth' });
  }
}
