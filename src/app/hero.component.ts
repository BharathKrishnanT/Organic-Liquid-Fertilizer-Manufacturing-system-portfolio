import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { createElement } from 'react';
import { createRoot, Root } from 'react-dom/client';

import { PatternText } from '../components/ui/pattern-text';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="overview" class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <!-- Slideshow Background -->
      <div class="absolute inset-0 z-0">
        @for (img of images; track img; let i = $index) {
          <div
            class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            [style.opacity]="i === currentSlide ? '1' : '0'"
          >
            <img
              [src]="img"
              alt="Achievement photo"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        }
        <!-- Dark overlay for text readability -->
        <div class="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70 z-1"></div>
        <!-- Subtle animated grain / texture overlay -->
        <div class="absolute inset-0 z-2 opacity-10 mix-blend-overlay"
             style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');">
        </div>
      </div>

      <!-- Slideshow Indicators -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        @for (img of images; track img; let i = $index) {
          <button
            (click)="goToSlide(i)"
            class="w-2.5 h-2.5 rounded-full transition-all duration-300 border border-white/40"
            [class.bg-emerald-400]="i === currentSlide"
            [class.scale-125]="i === currentSlide"
            [class.bg-white/30]="i !== currentSlide"
            [class.hover:bg-white/60]="i !== currentSlide"
            [attr.aria-label]="'Go to slide ' + (i + 1)"
          ></button>
        }
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-8">
          <mat-icon class="text-sm">bolt</mat-icon>
          <span>Hackfinity 3.2 Project</span>
        </div>

        <h1 class="sr-only">Agrisense: Smart Organic Liquid Fertilizer System</h1>
        <div class="mb-6 max-w-5xl mx-auto text-center drop-shadow-lg">
          <div class="flex justify-center" data-hero-pattern-text></div>
          <p class="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl leading-tight">
            Smart Organic
            <br class="hidden md:block" />
            <span class="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300">Liquid Fertilizer System</span>
          </p>
        </div>

        <p class="mt-4 text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
          AI + IoT powered precision nutrition for sustainable farming.
        </p>
        <p class="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
          An integrated platform designed to help farmers monitor soil conditions, manage organic fertilizer production, and receive intelligent crop recommendations to eliminate guesswork and reduce chemical overuse.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#features" class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-900/30 transition-all hover:-translate-y-0.5">
            Explore Features
            <mat-icon>arrow_downward</mat-icon>
          </a>
          <a href="#prototype" class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-full text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all">
            View Prototype
            <mat-icon>science</mat-icon>
          </a>
        </div>

        <div class="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-white/10 pt-10">
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-md flex items-center justify-center text-emerald-400 mb-3">
              <mat-icon>memory</mat-icon>
            </div>
            <span class="text-sm font-medium text-white/70 uppercase tracking-wider">IoT Sensors</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-md flex items-center justify-center text-emerald-400 mb-3">
              <mat-icon>psychology</mat-icon>
            </div>
            <span class="text-sm font-medium text-white/70 uppercase tracking-wider">AI Analysis</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-md flex items-center justify-center text-emerald-400 mb-3">
              <mat-icon>cloud</mat-icon>
            </div>
            <span class="text-sm font-medium text-white/70 uppercase tracking-wider">Cloud Dashboard</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-md flex items-center justify-center text-emerald-400 mb-3">
              <mat-icon>eco</mat-icon>
            </div>
            <span class="text-sm font-medium text-white/70 uppercase tracking-wider">Crop Engine</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private elementRef = inject(ElementRef);
  private cdr = inject(ChangeDetectorRef);
  private intervalId: any;
  private reactRoot?: Root;

  images: string[] = [];
  currentSlide = 0;

  ngOnInit() {
    // Build the image list
    for (let i = 1; i <= 11; i++) {
      this.images.push(`/achievements/achievement-${i}.jpeg`);
    }

    if (isPlatformBrowser(this.platformId)) {
      this.startSlideshow();
    }
  }

  ngAfterViewInit() {
    this.renderPatternText();
  }

  ngOnDestroy() {
    this.stopSlideshow();
    this.reactRoot?.unmount();
  }

  startSlideshow() {
    if (this.images.length <= 1) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
      this.cdr.detectChanges();
    }, 4000); // Change slide every 4 seconds
  }

  stopSlideshow() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(index: number) {
    if (this.images.length === 0) {
      return;
    }

    this.currentSlide = index;
    this.cdr.detectChanges();
    // Reset the timer so it doesn't jump immediately after manual click
    this.stopSlideshow();
    this.startSlideshow();
  }

  private renderPatternText() {
    if (!isPlatformBrowser(this.platformId) || typeof window === 'undefined') {
      return;
    }

    const container = this.elementRef.nativeElement.querySelector('[data-hero-pattern-text]');
    if (!container) {
      return;
    }

    if (!this.reactRoot) {
      this.reactRoot = createRoot(container);
    }

    this.reactRoot.render(
      createElement(PatternText, {
        text: 'Agrisense',
        className: 'text-7xl md:text-8xl lg:text-9xl text-emerald-300 leading-none',
      })
    );
  }
}
