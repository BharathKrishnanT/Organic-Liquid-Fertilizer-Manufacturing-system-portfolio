import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { createElement } from 'react';
import { createRoot, Root } from 'react-dom/client';

import { PatternText } from '../components/ui/pattern-text';

interface AchievementSlide {
  image: string;
  imageAlt: string;
  icon: string;
  iconColor: string;
  accentBorder: string;
  title: string;
  code: string;
  introLabel: string;
  introValue: string;
  authorityLabel: string;
  authorityValue: string;
  dateLabel: string;
  dateValue: string;
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <section id="achievements" class="py-24 bg-white/60 backdrop-blur-lg border-t border-gray-100/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="sr-only">Achievements</h2>
          <div class="mb-5 flex justify-center" data-achievements-pattern-text></div>
          <p class="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-gray-900 sm:text-4xl">
            Patent and Startup Registration
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our technology is officially patented and our enterprise is registered as a recognized startup.
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="bg-white/85 backdrop-blur-sm rounded-4xl overflow-hidden border border-gray-200 shadow-sm">
            <div class="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
              <div class="relative h-104 overflow-hidden bg-gray-200 border-b lg:border-b-0 lg:border-r border-gray-200">
                <img
                  [src]="slides[currentSlide].image"
                  [alt]="slides[currentSlide].imageAlt"
                  class="w-full h-full object-cover object-top transition-all duration-700"
                  referrerpolicy="no-referrer"
                />
                <div class="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/25 to-transparent"></div>

                <button
                  type="button"
                  (click)="previousSlide()"
                  class="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/85 text-gray-900 shadow-md border border-white/60 hover:bg-white transition"
                  aria-label="Previous slide"
                >
                  <mat-icon>chevron_left</mat-icon>
                </button>

                <button
                  type="button"
                  (click)="nextSlide()"
                  class="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/85 text-gray-900 shadow-md border border-white/60 hover:bg-white transition"
                  aria-label="Next slide"
                >
                  <mat-icon>chevron_right</mat-icon>
                </button>

                <div class="absolute bottom-6 left-6 text-white">
                  <div class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-3 border border-white/30" [ngClass]="slides[currentSlide].iconColor">
                    <mat-icon class="text-2xl">{{ slides[currentSlide].icon }}</mat-icon>
                  </div>
                  <h3 class="text-2xl font-bold font-display">{{ slides[currentSlide].title }}</h3>
                </div>
              </div>

              <div class="p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-mono text-gray-500 shadow-sm"
                    [ngClass]="slides[currentSlide].accentBorder">
                    <span>{{ currentSlide + 1 }}/{{ slides.length }}</span>
                    <span>{{ slides[currentSlide].code }}</span>
                  </div>

                  <div class="space-y-4 mt-6">
                    <div>
                      <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{{ slides[currentSlide].introLabel }}</p>
                      <p class="text-gray-800 font-medium" [class.italic]="currentSlide === 0" [class.text-xl]="currentSlide === 1" [class.font-bold]="currentSlide === 1">{{ slides[currentSlide].introValue }}</p>
                    </div>

                    <div class="pt-4 border-t border-gray-200">
                      <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{{ slides[currentSlide].authorityLabel }}</p>
                      <p class="text-gray-800 font-medium">{{ slides[currentSlide].authorityValue }}</p>
                    </div>

                    <div class="pt-4 border-t border-gray-200">
                      <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{{ slides[currentSlide].dateLabel }}</p>
                      <p class="text-gray-800 font-medium">{{ slides[currentSlide].dateValue }}</p>
                    </div>
                  </div>
                </div>

                <div class="mt-8 flex items-center justify-between gap-4">
                  <div class="flex items-center gap-2">
                    <button
                      *ngFor="let slide of slides; let index = index"
                      type="button"
                      (click)="goToSlide(index)"
                      class="h-2.5 rounded-full transition-all"
                      [class.w-10]="index === currentSlide"
                      [class.w-2.5]="index !== currentSlide"
                      [class.bg-emerald-500]="index === currentSlide"
                      [class.bg-gray-300]="index !== currentSlide"
                      [attr.aria-label]="'Go to slide ' + (index + 1)"
                    ></button>
                  </div>

                  <p class="text-sm text-gray-500">Slideshow of certificates and registrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AchievementsComponent implements OnInit, AfterViewInit, OnDestroy {
  slides: AchievementSlide[] = [
    {
      image: '/assets/german-patent.jpg',
      imageAlt: 'German Utility Model Patent',
      icon: 'workspace_premium',
      iconColor: 'text-yellow-400',
      accentBorder: 'border-emerald-100 bg-emerald-50/60',
      title: 'German Patent',
      code: 'Nr. 20 2025 104 369',
      introLabel: 'Title',
      introValue: '"System for generating biogas and enriched nutrients"',
      authorityLabel: 'Registration Authority',
      authorityValue: 'Deutsches Patent- und Markenamt (DPMA)',
      dateLabel: 'Date',
      dateValue: 'Registered: 18.08.2025',
    },
    {
      image: '/assets/msme-udyam.jpg',
      imageAlt: 'MSME Udyam Registration',
      icon: 'verified',
      iconColor: 'text-blue-400',
      accentBorder: 'border-blue-100 bg-blue-50/60',
      title: 'MSME Udyam Registration',
      code: 'UDYAM-TN-10-0047786',
      introLabel: 'Enterprise Name',
      introValue: 'AGON',
      authorityLabel: 'Classification',
      authorityValue: 'Micro Enterprise - Manufacturing',
      dateLabel: 'Location',
      dateValue: 'Karur, Tamil Nadu, India',
    },
  ];

  currentSlide = 0;
  private readonly platformId = inject(PLATFORM_ID);
  private readonly elementRef = inject(ElementRef);
  private autoPlayId: ReturnType<typeof setInterval> | null = null;
  private reactRoot?: Root;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || typeof window === 'undefined') {
      return;
    }

    const container = this.elementRef.nativeElement.querySelector('[data-achievements-pattern-text]');
    if (!container) {
      return;
    }

    this.reactRoot = createRoot(container);
    this.reactRoot.render(
      createElement(PatternText, {
        text: 'Achievements',
        className: 'text-[clamp(2.6rem,7vw,4.8rem)] text-emerald-600 leading-none',
      })
    );
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
    this.reactRoot?.unmount();
  }

  previousSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.restartAutoPlay();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.restartAutoPlay();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.restartAutoPlay();
  }

  private startAutoPlay(): void {
    this.autoPlayId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 3000);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayId) {
      clearInterval(this.autoPlayId);
      this.autoPlayId = null;
    }
  }

  private restartAutoPlay(): void {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
