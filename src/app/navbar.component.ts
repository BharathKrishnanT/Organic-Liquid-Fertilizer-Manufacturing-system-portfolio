import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <nav class="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
              <mat-icon class="text-xl">eco</mat-icon>
            </div>
            <div class="flex flex-col">
              <span class="font-display font-bold text-xl text-gray-900 tracking-tight leading-none">Agrisense</span>
              <span class="text-[10px] font-bold text-emerald-600 tracking-widest uppercase mt-0.5">By AGON</span>
            </div>
          </div>
          <div class="hidden md:flex space-x-6">
            <a href="#overview" class="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">Overview</a>
            <a href="#architecture" class="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">Architecture</a>
            <a href="#prototype" class="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">Prototype</a>
            <a href="#business" class="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">Business Model</a>
            <a href="#achievements" class="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">Achievements</a>
          </div>
          <div class="flex items-center">
            <a href="#contact" class="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all">
              Contact Us
            </a>
            <button class="md:hidden p-2 text-gray-600">
              <mat-icon>menu</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}
