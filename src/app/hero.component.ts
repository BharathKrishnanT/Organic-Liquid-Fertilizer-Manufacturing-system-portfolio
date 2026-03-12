import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PatternTextComponent } from './pattern-text.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatIconModule, PatternTextComponent],
  template: `
    <section id="overview" class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white/40 backdrop-blur-sm">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/50 via-white/50 to-white/50 opacity-80"></div>
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100 blur-3xl opacity-50 mix-blend-multiply"></div>
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-emerald-50 blur-3xl opacity-50 mix-blend-multiply"></div>
      </div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/80 backdrop-blur-md border border-emerald-100 text-emerald-700 text-sm font-medium mb-8">
          <mat-icon class="text-sm">bolt</mat-icon>
          <span>Hackfinity 3.2 Project</span>
        </div>
        
        <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
          <app-pattern-text text="Agrisense" className="text-emerald-800"></app-pattern-text>: Smart Organic <br class="hidden md:block" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Liquid Fertilizer System</span>
        </h1>
        
        <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          AI + IoT powered precision nutrition for sustainable farming.
        </p>
        <p class="text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          An integrated platform designed to help farmers monitor soil conditions, manage organic fertilizer production, and receive intelligent crop recommendations to eliminate guesswork and reduce chemical overuse.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#features" class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all hover:-translate-y-0.5">
            Explore Features
            <mat-icon>arrow_downward</mat-icon>
          </a>
          <a href="#prototype" class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-full text-gray-700 bg-white/80 backdrop-blur-md border border-gray-200 hover:bg-white hover:border-gray-300 transition-all">
            View Prototype
            <mat-icon>science</mat-icon>
          </a>
        </div>
        
        <div class="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-gray-200/50 pt-10">
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50/80 backdrop-blur-md flex items-center justify-center text-emerald-600 mb-3">
              <mat-icon>memory</mat-icon>
            </div>
            <span class="text-sm font-medium text-gray-600 uppercase tracking-wider">IoT Sensors</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50/80 backdrop-blur-md flex items-center justify-center text-emerald-600 mb-3">
              <mat-icon>psychology</mat-icon>
            </div>
            <span class="text-sm font-medium text-gray-600 uppercase tracking-wider">AI Analysis</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50/80 backdrop-blur-md flex items-center justify-center text-emerald-600 mb-3">
              <mat-icon>cloud</mat-icon>
            </div>
            <span class="text-sm font-medium text-gray-600 uppercase tracking-wider">Cloud Dashboard</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50/80 backdrop-blur-md flex items-center justify-center text-emerald-600 mb-3">
              <mat-icon>eco</mat-icon>
            </div>
            <span class="text-sm font-medium text-gray-600 uppercase tracking-wider">Crop Engine</span>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}
