import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <footer id="contact" class="bg-gray-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div class="col-span-1 lg:col-span-2">
            <div class="flex items-center gap-2 mb-6">
              <div class="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                <mat-icon class="text-2xl">eco</mat-icon>
              </div>
              <div class="flex flex-col">
                <span class="font-display font-bold text-2xl tracking-tight leading-none">Agrisense</span>
                <span class="text-xs font-bold text-emerald-500 tracking-widest uppercase mt-1">By AGON</span>
              </div>
            </div>
            <p class="text-gray-400 text-sm max-w-md leading-relaxed mb-8">
              An integrated IoT-based precision agriculture platform designed to help farmers monitor soil conditions, manage organic fertilizer production, and receive intelligent crop recommendations.
            </p>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors">
                <mat-icon>email</mat-icon>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-colors">
                <mat-icon>link</mat-icon>
              </a>
            </div>
          </div>
          
          <div>
            <h4 class="text-lg font-bold mb-6 font-display">Applications</h4>
            <ul class="space-y-3 text-sm text-gray-400">
              <li class="hover:text-emerald-400 transition-colors cursor-pointer">Smart Farming Systems</li>
              <li class="hover:text-emerald-400 transition-colors cursor-pointer">Organic Fertilizer Production</li>
              <li class="hover:text-emerald-400 transition-colors cursor-pointer">Agricultural Research</li>
              <li class="hover:text-emerald-400 transition-colors cursor-pointer">Precision Agriculture</li>
              <li class="hover:text-emerald-400 transition-colors cursor-pointer">Sustainable Farming</li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-bold mb-6 font-display">Contact Us</h4>
            <div class="text-sm text-gray-400 space-y-4">
              <p class="font-medium text-white text-lg">AGON</p>
              <p class="font-medium text-gray-300">Mr. Bharath Krishnan</p>
              <p class="flex items-center gap-2">
                <mat-icon class="text-emerald-500 text-sm">email</mat-icon>
                bharathkrishnan.t&#64;gmail.com
              </p>
              <p class="flex items-center gap-2">
                <mat-icon class="text-emerald-500 text-sm">location_on</mat-icon>
                Karur, Tamil Nadu, India
              </p>
            </div>
          </div>
          
        </div>
        
        <div class="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm">
            &copy; 2026 AGON (Agrisense). All rights reserved.
          </p>
          <div class="flex gap-6 text-sm text-gray-500">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
