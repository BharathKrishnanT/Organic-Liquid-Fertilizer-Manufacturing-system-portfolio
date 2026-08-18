import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hardware',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="hardware" class="py-24 bg-white/60 backdrop-blur-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Hardware Components</h2>
          <p class="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-gray-900 sm:text-4xl">
            Precision Sensors & Controllers
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- ESP32 -->
          <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div class="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
              <mat-icon class="text-3xl">memory</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display">ESP32 Microcontroller</h3>
            <p class="text-gray-600 mb-4">The central controller that reads sensors, processes signals, and sends real-time data to the cloud via built-in Wi-Fi.</p>
            <ul class="text-sm text-gray-500 space-y-2">
              <li class="flex items-center gap-2"><mat-icon class="text-xs text-emerald-500">done</mat-icon> Built-in Wi-Fi</li>
              <li class="flex items-center gap-2"><mat-icon class="text-xs text-emerald-500">done</mat-icon> Low power consumption</li>
            </ul>
          </div>

          <!-- NPK Sensor -->
          <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <mat-icon class="text-3xl">grass</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display">Soil NPK Sensor</h3>
            <p class="text-gray-600 mb-4">Measures vital soil nutrients to determine deficiency and guide fertilizer application.</p>
            <ul class="text-sm text-gray-500 space-y-2">
              <li class="flex items-center gap-2"><mat-icon class="text-xs text-blue-500">done</mat-icon> Nitrogen (N) - Leaf growth</li>
              <li class="flex items-center gap-2"><mat-icon class="text-xs text-blue-500">done</mat-icon> Phosphorus (P) - Root dev</li>
              <li class="flex items-center gap-2"><mat-icon class="text-xs text-blue-500">done</mat-icon> Potassium (K) - Yield</li>
            </ul>
          </div>

          <!-- pH Sensor -->
          <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
              <mat-icon class="text-3xl">science</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display">pH Sensor</h3>
            <p class="text-gray-600 mb-4">Measures soil acidity or alkalinity, which directly affects nutrient absorption by crops.</p>
            <ul class="text-sm text-gray-500 space-y-2">
              <li class="flex items-center gap-2"><mat-icon class="text-xs text-purple-500">done</mat-icon> Rice: 5.5 - 6.5</li>
              <li class="flex items-center gap-2"><mat-icon class="text-xs text-purple-500">done</mat-icon> Wheat: 6 - 7</li>
            </ul>
          </div>

          <!-- Methane Sensor -->
          <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
              <mat-icon class="text-3xl">air</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display">Methane Gas Sensor</h3>
            <p class="text-gray-600 mb-4">Monitors fermentation activity in the organic fertilizer tank to ensure safe production.</p>
            <ul class="text-sm text-gray-500 space-y-2">
              <li class="flex items-center gap-2"><mat-icon class="text-xs text-orange-500">done</mat-icon> Detect abnormal gas</li>
              <li class="flex items-center gap-2"><mat-icon class="text-xs text-orange-500">done</mat-icon> Ensure safety</li>
            </ul>
          </div>

          <!-- Temp & Humidity -->
          <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
              <mat-icon class="text-3xl">thermostat</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display">Temp & Humidity</h3>
            <p class="text-gray-600 mb-4">Maintains optimal conditions for microbial decomposition and activity in the fermentation tank.</p>
            <ul class="text-sm text-gray-500 space-y-2">
              <li class="flex items-center gap-2"><mat-icon class="text-xs text-red-500">done</mat-icon> Controlled fermentation</li>
              <li class="flex items-center gap-2"><mat-icon class="text-xs text-red-500">done</mat-icon> Improved microbial activity</li>
            </ul>
          </div>

          <!-- Tank Level -->
          <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div class="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 mb-6">
              <mat-icon class="text-3xl">water_drop</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display">Ultrasonic Tank Level</h3>
            <p class="text-gray-600 mb-4">Monitors fertilizer quantity inside the tank to prevent overflow and track usage.</p>
            <ul class="text-sm text-gray-500 space-y-2">
              <li class="flex items-center gap-2"><mat-icon class="text-xs text-cyan-500">done</mat-icon> Detect low levels</li>
              <li class="flex items-center gap-2"><mat-icon class="text-xs text-cyan-500">done</mat-icon> Prevent overflow</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  `
})
export class HardwareComponent {}
