import { Component, HostListener, OnInit, signal } from '@angular/core';

export interface PhotoItem {
  file: string;
  caption: string;
}

@Component({
  selector: 'app-behind-camera',
  templateUrl: './behind-camera.html',
  styleUrl: './behind-camera.scss',
})
export class BehindCameraComponent implements OnInit {
  protected readonly pageSize = 6;
  protected currentPage = 0;
  protected readonly isLoading = signal(true);
  private loadedImages = 0;

  // ── Actores ─────────────────────────────────────────────────────────────
  protected readonly cast = [
    'Edward Santa Cruz',
    'Belen Lazo Ino',
    'Nicolas Esteves',
    'Job Valencia',
    'Santiago Melgar',
    'Mauricio Vazques',
    'Brandon Mateus',
    'Gonzalo Torres',
    'Luna Paredes',
    'Adrian Noriega',
    'Miguel Ángel',
  ];

  // ── Galería: edita caption para personalizar cada descripción ────────────
  protected readonly photos: PhotoItem[] = [
    { file: 'ANIME JAJAJ_5_11zon.webp',          caption: 'Detrás de cámaras' },
    { file: 'DSC03093_2_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'DSC03094_4_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'DSC03113 (1)_1_11zon.webp',          caption: 'Detrás de cámaras' },
    { file: 'DSC03115_4_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'DSC03117 (2)_7_11zon.webp',          caption: 'Detrás de cámaras' },
    { file: 'IMG_6734 (1)_5_11zon.webp',          caption: 'Detrás de cámaras' },
    { file: 'IMG_6736_8_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'IMG_6739_6_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'IMG_6740_3_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'IMG_6741_6_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'IMG_6742_3_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'IMG_6744_7_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'IMG_6745_1_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'IMG_9788_1_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'IMG_9907_4_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'IMG_9910_5_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'IMG_9918 (1)_6_11zon.webp',          caption: 'Detrás de cámaras' },
    { file: 'IMG_9920_3_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'IMG_9922 (1)_8_11zon.webp',          caption: 'Detrás de cámaras' },
    { file: 'IMG_9923_9_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'IMG_9928_2_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'IMG_9941_10_11zon.webp',             caption: 'Detrás de cámaras' },
    { file: 'IMG_9943_7_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'IMG_9947 (2)_11_11zon.webp',         caption: 'Detrás de cámaras' },
    { file: 'IMG_9966 (1)_9_11zon.webp',          caption: 'Detrás de cámaras' },
    { file: 'IMG_9977_2_11zon.webp',              caption: 'Detrás de cámaras' },
    { file: 'IMG_9984_8_11zon.webp',              caption: 'Detrás de cámaras' },
  ];

  protected selectedPhoto: string | null = null;

  ngOnInit(): void {
    this.preloadImages(this.photos.map(p => p.file));
  }

  private preloadImages(files: string[]): void {
    files.forEach((file) => {
      const image = new Image();
      image.onload = () => this.preloadedImageFinished();
      image.onerror = () => this.preloadedImageFinished();
      image.src = `/images/${encodeURIComponent(file).replace(/%2F/g, '/')}`;
    });
  }

  private preloadedImageFinished(): void {
    this.loadedImages += 1;
    if (this.loadedImages === this.photos.length) {
      this.isLoading.set(false);
    }
  }

  protected get visiblePhotos(): PhotoItem[] {
    const start = this.currentPage * this.pageSize;
    return this.photos.slice(start, start + this.pageSize);
  }

  protected get totalPages(): number {
    return Math.ceil(this.photos.length / this.pageSize);
  }

  protected goToPage(page: number): void {
    if (page < 0 || page >= this.totalPages || page === this.currentPage) {
      return;
    }
    this.currentPage = page;
  }

  protected openPhoto(file: string): void {
    this.selectedPhoto = file;
  }

  protected closePhoto(): void {
    this.selectedPhoto = null;
  }

  @HostListener('document:keydown.escape')
  protected closePhotoWithEscape(): void {
    this.closePhoto();
  }
}
