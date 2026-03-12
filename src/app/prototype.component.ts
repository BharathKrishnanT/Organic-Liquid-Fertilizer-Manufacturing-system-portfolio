import { AfterViewInit, Component, ElementRef, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { createElement } from 'react';
import { createRoot, Root } from 'react-dom/client';

import { PatternText } from '../components/ui/pattern-text';

@Component({
  selector: 'app-prototype',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="prototype" class="py-24 bg-white/60 backdrop-blur-lg border-t border-gray-100/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="sr-only">Prototype</h2>
          <div class="mb-5 flex justify-center" data-prototype-pattern-text></div>
          <p class="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real-World Testing & Materials
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our system has been physically prototyped and tested with a variety of organic materials to ensure optimal fermentation and nutrient extraction.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <!-- The Tank -->
          <div class="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200">
            <div class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 shadow-sm border border-emerald-200">
              <mat-icon class="text-4xl">science</mat-icon>
            </div>
            
            <h3 class="text-2xl font-bold text-gray-900 mb-4 font-display">The Fermentation Tank</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              The core of the physical system is a robust, sealed green fermentation drum equipped with an array of integrated sensors. This tank is designed to handle the anaerobic digestion process safely and efficiently.
            </p>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <mat-icon class="text-emerald-500 mt-0.5">check_circle</mat-icon>
                <div>
                  <span class="font-bold text-gray-900">Integrated Sensor Array</span>
                  <p class="text-sm text-gray-500">Includes pressure gauges, temperature probes, and methane sensors mounted directly on the lid.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-emerald-500 mt-0.5">check_circle</mat-icon>
                <div>
                  <span class="font-bold text-gray-900">Gas Management</span>
                  <p class="text-sm text-gray-500">Vertical PVC piping system for safe gas venting and biogas collection.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-emerald-500 mt-0.5">check_circle</mat-icon>
                <div>
                  <span class="font-bold text-gray-900">Automated Dispensing</span>
                  <p class="text-sm text-gray-500">Motor-controlled valves for precise liquid fertilizer extraction based on AI recommendations.</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Organic Materials -->
          <div class="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm">
            <div class="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-8 shadow-sm border border-amber-200">
              <mat-icon class="text-4xl">eco</mat-icon>
            </div>
            
            <h3 class="text-2xl font-bold text-gray-900 mb-4 font-display">Tested Organic Ingredients</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              We have rigorously tested various organic inputs to create enriched, balanced liquid fertilizers tailored for specific crop needs.
            </p>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:border-emerald-300 transition-colors">
                <span class="font-bold text-gray-900 text-sm">Animal Slurry</span>
                <span class="text-xs text-gray-500 mt-1">Base nitrogen source</span>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:border-emerald-300 transition-colors">
                <span class="font-bold text-gray-900 text-sm">Rock Phosphate</span>
                <span class="text-xs text-gray-500 mt-1">Phosphorus enrichment</span>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:border-emerald-300 transition-colors">
                <span class="font-bold text-gray-900 text-sm">Dried Neem</span>
                <span class="text-xs text-gray-500 mt-1">Natural pest resistance</span>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:border-emerald-300 transition-colors">
                <span class="font-bold text-gray-900 text-sm">Animal Bone</span>
                <span class="text-xs text-gray-500 mt-1">Calcium & Phosphorus</span>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:border-emerald-300 transition-colors">
                <span class="font-bold text-gray-900 text-sm">Dehydrated Peels</span>
                <span class="text-xs text-gray-500 mt-1">Potassium boost</span>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:border-emerald-300 transition-colors">
                <span class="font-bold text-gray-900 text-sm">Organic Wood Ash</span>
                <span class="text-xs text-gray-500 mt-1">pH balancing & minerals</span>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:border-emerald-300 transition-colors">
                <span class="font-bold text-gray-900 text-sm">Biox Manure</span>
                <span class="text-xs text-gray-500 mt-1">Microbial starter</span>
              </div>
              <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:border-emerald-300 transition-colors">
                <span class="font-bold text-gray-900 text-sm">Enriched Manure</span>
                <span class="text-xs text-gray-500 mt-1">Final balanced output</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  `
})
export class PrototypeComponent implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly elementRef = inject(ElementRef);
  private reactRoot?: Root;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || typeof window === 'undefined') {
      return;
    }

    const container = this.elementRef.nativeElement.querySelector('[data-prototype-pattern-text]');
    if (!container) {
      return;
    }

    this.reactRoot = createRoot(container);
    this.reactRoot.render(
      createElement(PatternText, {
        text: 'Prototype',
        className: 'text-[clamp(3rem,8vw,5rem)] text-emerald-600 leading-none',
      })
    );
  }

  ngOnDestroy(): void {
    this.reactRoot?.unmount();
  }
}
