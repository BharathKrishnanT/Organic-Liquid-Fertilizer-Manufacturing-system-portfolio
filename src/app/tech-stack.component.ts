import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="tech" class="py-24 bg-white/60 backdrop-blur-lg border-t border-gray-100/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <!-- Tech Stack -->
          <div>
            <h2 class="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Technology Stack</h2>
            <p class="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Built with Modern Tools
            </p>
            
            <div class="space-y-8">
              <div>
                <h4 class="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <mat-icon class="text-emerald-500">memory</mat-icon> Hardware
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">ESP32</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">NPK Sensor</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">pH Sensor</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Methane Sensor</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Temp/Humidity</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Ultrasonic Sensor</span>
                </div>
              </div>
              
              <div>
                <h4 class="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <mat-icon class="text-blue-500">code</mat-icon> Software & AI
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">IoT Dashboard</span>
                  <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">Embedded C / Arduino</span>
                  <span class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100">Gemini API</span>
                </div>
              </div>
              
              <div>
                <h4 class="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <mat-icon class="text-indigo-500">wifi</mat-icon> Communication
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-100">Wi-Fi Transmission</span>
                  <span class="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-100">Real-time Cloud Updates</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Advantages -->
          <div class="bg-emerald-50 rounded-3xl p-8 lg:p-12 border border-emerald-100">
            <h2 class="text-emerald-800 font-semibold tracking-wide uppercase text-sm mb-3">System Benefits</h2>
            <p class="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-emerald-950 sm:text-4xl mb-8">
              Why Choose This System?
            </p>
            
            <ul class="space-y-4">
              <li class="flex items-start gap-4">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center mt-1">
                  <mat-icon class="text-emerald-700 text-sm">check</mat-icon>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-emerald-900">Reduces Chemical Usage</h4>
                  <p class="text-emerald-700 text-sm mt-1">Promotes organic farming and reduces reliance on harmful chemical fertilizers.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center mt-1">
                  <mat-icon class="text-emerald-700 text-sm">check</mat-icon>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-emerald-900">Improves Soil Health</h4>
                  <p class="text-emerald-700 text-sm mt-1">Continuous monitoring ensures optimal nutrient levels for long-term soil fertility.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center mt-1">
                  <mat-icon class="text-emerald-700 text-sm">check</mat-icon>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-emerald-900">Precise Recommendations</h4>
                  <p class="text-emerald-700 text-sm mt-1">Data-driven insights for crop selection and fertilizer application.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center mt-1">
                  <mat-icon class="text-emerald-700 text-sm">check</mat-icon>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-emerald-900">Early Disease Detection</h4>
                  <p class="text-emerald-700 text-sm mt-1">AI-powered analysis identifies plant diseases early for timely intervention.</p>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  `
})
export class TechStackComponent {}
