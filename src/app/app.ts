import { Component } from '@angular/core';
import { BehindCameraComponent } from './components/behind-camera/behind-camera';
import { EditingComponent } from './components/editing/editing';
import { HeroComponent } from './components/hero/hero';
import { RecordingsComponent } from './components/recordings/recordings';

@Component({
  imports: [BehindCameraComponent, EditingComponent, HeroComponent, RecordingsComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
