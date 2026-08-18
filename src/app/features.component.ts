import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="features" class="py-24 bg-white/40 backdrop-blur-md border-t border-gray-100/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">System Features</h2>
          <p class="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-gray-900 sm:text-4xl">
            Intelligent Farming Capabilities
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            A comprehensive suite of tools designed to optimize organic farming, from soil monitoring to AI-driven disease detection.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Feature 1 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors group">
            <div class="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-100 transition-colors">
              <mat-icon>monitoring</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display">Real-Time Soil Monitoring</h3>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">Continuously displays Nitrogen, Phosphorus, Potassium, and pH values, allowing immediate identification of nutrient deficiencies.</p>
            <div class="bg-gray-50 p-3 rounded-lg text-xs font-mono text-gray-600 border border-gray-100">
              N: Low | P: Medium | K: Low | pH: 6.2
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors group">
            <div class="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-100 transition-colors">
              <mat-icon>science</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display">Fertilizer Ratio Generator</h3>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">Calculates the optimal organic fertilizer mixture required for the soil based on desired volume (e.g., 5L, 10L, 20L).</p>
            <div class="bg-gray-50 p-3 rounded-lg text-xs font-mono text-gray-600 border border-gray-100">
              Output: 4L Compost, 3L Dung, 2L Seaweed, 1L Water
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors group">
            <div class="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-100 transition-colors">
              <mat-icon>propane_tank</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display">Tank Monitoring</h3>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">Monitors tank temperature, methane gas levels, humidity, and fertilizer quantity to ensure safe and optimal fermentation.</p>
            <div class="flex gap-2 mt-4">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Alerts</span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Safe</span>
            </div>
          </div>

          <!-- Feature 4 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors group">
            <div class="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-100 transition-colors">
              <mat-icon>cloud_queue</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display">Weather Display System</h3>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">Integrates weather API services to display current temperature, rain probability, humidity, wind speed, and a 7-10 day forecast.</p>
            <p class="text-xs text-gray-500 italic">Helps avoid fertilizer application before heavy rain.</p>
          </div>

          <!-- Feature 5 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors group">
            <div class="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-100 transition-colors">
              <mat-icon>recommend</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display">Plantation Recommendation</h3>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">Recommends which crop to grow based on soil NPK values, pH, temperature, rainfall prediction, and humidity.</p>
            <div class="bg-emerald-50 p-3 rounded-lg text-xs font-medium text-emerald-800 border border-emerald-100">
              Recommended: Tomato, Brinjal, Chili
            </div>
          </div>

          <!-- Feature 6 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors group">
            <div class="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-100 transition-colors">
              <mat-icon>psychology</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display">Plant AI Disease Detection</h3>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">Analyzes plant leaf photos using Gemini API to detect diseases, identify causes, and recommend treatments and fertilizers.</p>
            <div class="bg-red-50 p-3 rounded-lg text-xs font-medium text-red-800 border border-red-100">
              Detected: Leaf Blight
            </div>
          </div>

          <!-- Feature 7 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors group">
            <div class="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-100 transition-colors">
              <mat-icon>menu_book</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display">Soil Explorer / Crop Guide</h3>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">A digital farming assistant knowledge database containing suitable soil types, ideal pH ranges, and nutrient requirements for various crops.</p>
          </div>

          <!-- Feature 8 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors group">
            <div class="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-100 transition-colors">
              <mat-icon>local_pharmacy</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display">Organic Solution Library</h3>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">Provides eco-friendly remedies for pest control (Neem oil), nutrient deficiency (Banana peel), and disease treatment (Baking soda).</p>
          </div>

          <!-- Feature 9 & 10 -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors group">
            <div class="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-100 transition-colors">
              <mat-icon>analytics</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-display">Simulation & Analytics</h3>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">Run the system without physical sensors for testing, and log all sensor data for long-term soil fertility and crop performance analysis.</p>
          </div>

        </div>
      </div>
    </section>
  `
})
export class FeaturesComponent {}
