import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-impact-future',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="impact" class="py-24 bg-white/40 backdrop-blur-md border-t border-gray-100/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Impacts -->
          <div>
            <h2 class="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Real-World Impact</h2>
            <p class="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Transforming Agriculture
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <mat-icon>camera_alt</mat-icon>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-gray-900">Instant Nutrient Correction</h4>
                  <p class="text-gray-600 text-sm mt-1">Converts plant images into instant, actionable nutrient correction steps, eliminating guesswork.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <mat-icon>precision_manufacturing</mat-icon>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-gray-900">Precision-Based Dosing</h4>
                  <p class="text-gray-600 text-sm mt-1">Reduces fertilizer wastage by providing plant-specific organic nutrition in real time.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <mat-icon>health_and_safety</mat-icon>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-gray-900">Faster Crop Recovery</h4>
                  <p class="text-gray-600 text-sm mt-1">Accelerates crop recovery using symptom-driven intervention and AI-generated fertilizer ratios.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <mat-icon>recycling</mat-icon>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-gray-900">Circular Economy</h4>
                  <p class="text-gray-600 text-sm mt-1">Strengthens the circular economy via targeted nutrient reuse and simplifies organic farming for non-technical farmers.</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Future Scope -->
          <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
            <div class="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>
            <div class="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            
            <h2 class="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-3">Future Scope</h2>
            <p class="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-white sm:text-4xl mb-8">
              The Road Ahead
            </p>
            
            <ul class="space-y-6">
              <li class="flex items-center gap-4 group">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all">
                  <span class="font-bold text-sm">1</span>
                </div>
                <h4 class="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">Self-Learning Nutrient Intelligence</h4>
              </li>
              
              <li class="flex items-center gap-4 group">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all">
                  <span class="font-bold text-sm">2</span>
                </div>
                <h4 class="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">Predictive Deficiency Forecasting</h4>
              </li>
              
              <li class="flex items-center gap-4 group">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all">
                  <span class="font-bold text-sm">3</span>
                </div>
                <h4 class="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">Autonomous Fertilizer Dispensing</h4>
              </li>
              
              <li class="flex items-center gap-4 group">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all">
                  <span class="font-bold text-sm">4</span>
                </div>
                <h4 class="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">Region-Specific Agronomic Adaptation</h4>
              </li>
              
              <li class="flex items-center gap-4 group">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all">
                  <span class="font-bold text-sm">5</span>
                </div>
                <h4 class="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">Multi-Crop & Seasonal Intelligence</h4>
              </li>
              
              <li class="flex items-center gap-4 group">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all">
                  <span class="font-bold text-sm">6</span>
                </div>
                <h4 class="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">Digital Farmer Ecosystem Integration</h4>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  `
})
export class ImpactFutureComponent {}
