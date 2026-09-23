import { Component } from '@angular/core';
import { BehindCameraComponent } from './components/behind-camera/behind-camera';
import { HeroComponent } from './components/hero/hero';
import { RecordingsComponent } from './components/recordings/recordings';

@Component({
  imports: [BehindCameraComponent, HeroComponent, RecordingsComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
