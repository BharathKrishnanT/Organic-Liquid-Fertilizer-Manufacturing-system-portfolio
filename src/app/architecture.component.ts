import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-architecture',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="architecture" class="py-24 bg-white/40 backdrop-blur-md border-t border-gray-100/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">System Architecture</h2>
          <p class="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-gray-900 sm:text-4xl">
            Four Primary Layers of Intelligence
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            A seamless integration of hardware, software, and artificial intelligence to enable data-driven agriculture.
          </p>
        </div>

        <div class="relative">
          <!-- Connecting Line -->
          <div class="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-emerald-100 z-0"></div>

          <div class="space-y-12 lg:space-y-0 relative z-10">
            <!-- Layer 1 -->
            <div class="lg:flex items-center justify-between mb-16">
              <div class="lg:w-5/12 lg:text-right pr-8">
                <div class="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-xl text-emerald-600 mb-4 lg:hidden">
                  <mat-icon>sensors</mat-icon>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 font-display">1. Sensor Layer</h3>
                <p class="mt-3 text-lg text-gray-500">Collects environmental and soil data in real-time, providing the foundational metrics for the entire system.</p>
              </div>
              <div class="hidden lg:flex w-2/12 justify-center">
                <div class="w-16 h-16 bg-white border-4 border-emerald-100 rounded-full flex items-center justify-center shadow-sm z-10">
                  <mat-icon class="text-emerald-500 text-3xl">sensors</mat-icon>
                </div>
              </div>
              <div class="lg:w-5/12 pl-8 hidden lg:block">
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <ul class="space-y-3 text-gray-600">
                    <li class="flex items-center gap-3"><mat-icon class="text-emerald-500 text-sm">check_circle</mat-icon> NPK & pH Sensors</li>
                    <li class="flex items-center gap-3"><mat-icon class="text-emerald-500 text-sm">check_circle</mat-icon> Methane Gas Sensor</li>
                    <li class="flex items-center gap-3"><mat-icon class="text-emerald-500 text-sm">check_circle</mat-icon> Temp & Humidity</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Layer 2 -->
            <div class="lg:flex items-center justify-between mb-16 flex-row-reverse">
              <div class="lg:w-5/12 lg:text-left pl-8">
                <div class="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl text-blue-600 mb-4 lg:hidden">
                  <mat-icon>memory</mat-icon>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 font-display">2. Embedded Processing</h3>
                <p class="mt-3 text-lg text-gray-500">The ESP32 microcontroller acts as the central brain, processing sensor signals and managing Wi-Fi connectivity.</p>
              </div>
              <div class="hidden lg:flex w-2/12 justify-center">
                <div class="w-16 h-16 bg-white border-4 border-blue-100 rounded-full flex items-center justify-center shadow-sm z-10">
                  <mat-icon class="text-blue-500 text-3xl">memory</mat-icon>
                </div>
              </div>
              <div class="lg:w-5/12 pr-8 hidden lg:block text-right">
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 inline-block text-left w-full">
                  <ul class="space-y-3 text-gray-600">
                    <li class="flex items-center gap-3"><mat-icon class="text-blue-500 text-sm">check_circle</mat-icon> Signal Processing</li>
                    <li class="flex items-center gap-3"><mat-icon class="text-blue-500 text-sm">check_circle</mat-icon> Wi-Fi Transmission</li>
                    <li class="flex items-center gap-3"><mat-icon class="text-blue-500 text-sm">check_circle</mat-icon> Low Power Operation</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Layer 3 -->
            <div class="lg:flex items-center justify-between mb-16">
              <div class="lg:w-5/12 lg:text-right pr-8">
                <div class="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-xl text-indigo-600 mb-4 lg:hidden">
                  <mat-icon>cloud</mat-icon>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 font-display">3. Cloud / Dashboard</h3>
                <p class="mt-3 text-lg text-gray-500">Stores and visualizes agricultural data, providing farmers with an intuitive interface accessible from any device.</p>
              </div>
              <div class="hidden lg:flex w-2/12 justify-center">
                <div class="w-16 h-16 bg-white border-4 border-indigo-100 rounded-full flex items-center justify-center shadow-sm z-10">
                  <mat-icon class="text-indigo-500 text-3xl">cloud</mat-icon>
                </div>
              </div>
              <div class="lg:w-5/12 pl-8 hidden lg:block">
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <ul class="space-y-3 text-gray-600">
                    <li class="flex items-center gap-3"><mat-icon class="text-indigo-500 text-sm">check_circle</mat-icon> Real-time Visualization</li>
                    <li class="flex items-center gap-3"><mat-icon class="text-indigo-500 text-sm">check_circle</mat-icon> Data Logging</li>
                    <li class="flex items-center gap-3"><mat-icon class="text-indigo-500 text-sm">check_circle</mat-icon> Alert System</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Layer 4 -->
            <div class="lg:flex items-center justify-between flex-row-reverse">
              <div class="lg:w-5/12 lg:text-left pl-8">
                <div class="inline-flex items-center justify-center p-3 bg-purple-100 rounded-xl text-purple-600 mb-4 lg:hidden">
                  <mat-icon>psychology</mat-icon>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 font-display">4. Intelligent Decision</h3>
                <p class="mt-3 text-lg text-gray-500">Provides AI-driven analysis, plant disease detection, and intelligent farming recommendations based on collected data.</p>
              </div>
              <div class="hidden lg:flex w-2/12 justify-center">
                <div class="w-16 h-16 bg-white border-4 border-purple-100 rounded-full flex items-center justify-center shadow-sm z-10">
                  <mat-icon class="text-purple-500 text-3xl">psychology</mat-icon>
                </div>
              </div>
              <div class="lg:w-5/12 pr-8 hidden lg:block text-right">
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 inline-block text-left w-full">
                  <ul class="space-y-3 text-gray-600">
                    <li class="flex items-center gap-3"><mat-icon class="text-purple-500 text-sm">check_circle</mat-icon> Gemini API Integration</li>
                    <li class="flex items-center gap-3"><mat-icon class="text-purple-500 text-sm">check_circle</mat-icon> Crop Recommendations</li>
                    <li class="flex items-center gap-3"><mat-icon class="text-purple-500 text-sm">check_circle</mat-icon> Disease Detection</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `
})
export class ArchitectureComponent {}
