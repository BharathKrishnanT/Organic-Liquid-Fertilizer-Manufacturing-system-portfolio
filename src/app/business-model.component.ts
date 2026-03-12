import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-business-model',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="business" class="py-24 bg-white/40 backdrop-blur-md border-t border-gray-100/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Business Model</h2>
          <p class="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-gray-900 sm:text-4xl">
            Flexible Pricing & Target Audience
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Designed to be accessible for individual farmers while scaling for agricultural research institutions and organic fertilizer producers.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <!-- Target Audience -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
              <mat-icon>groups</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 font-display">Customer Segments</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-center gap-3"><mat-icon class="text-blue-500 text-sm">check_circle</mat-icon> Individual Farmers</li>
              <li class="flex items-center gap-3"><mat-icon class="text-blue-500 text-sm">check_circle</mat-icon> Organic Fertilizer Producers</li>
              <li class="flex items-center gap-3"><mat-icon class="text-blue-500 text-sm">check_circle</mat-icon> Agricultural Research Institutions</li>
              <li class="flex items-center gap-3"><mat-icon class="text-blue-500 text-sm">check_circle</mat-icon> Agritech Organizations</li>
            </ul>
          </div>

          <!-- Value Proposition -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div class="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
              <mat-icon>diamond</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 font-display">Value Proposition</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start gap-3"><mat-icon class="text-emerald-500 text-sm mt-0.5">check_circle</mat-icon> <span>Improves crop productivity and reduces chemical fertilizer usage.</span></li>
              <li class="flex items-start gap-3"><mat-icon class="text-emerald-500 text-sm mt-0.5">check_circle</mat-icon> <span>Enables early plant disease detection through AI-based analysis.</span></li>
              <li class="flex items-start gap-3"><mat-icon class="text-emerald-500 text-sm mt-0.5">check_circle</mat-icon> <span>Supports sustainable farming with optimal liquid fertilizer ratios.</span></li>
            </ul>
          </div>

          <!-- Cost Structure -->
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-6">
              <mat-icon>account_balance_wallet</mat-icon>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 font-display">Cost Structure</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center border-b border-gray-100 pb-2">
                <span class="text-gray-600">Fermentation Tank</span>
                <span class="font-mono font-medium text-gray-900">₹1,000</span>
              </div>
              <div class="flex justify-between items-center border-b border-gray-100 pb-2">
                <span class="text-gray-600">Analysis Kit</span>
                <span class="font-mono font-medium text-gray-900">₹4,000</span>
              </div>
              <div class="flex justify-between items-center pt-2">
                <span class="font-bold text-gray-900">Total Approx Cost</span>
                <span class="font-mono font-bold text-emerald-600">₹5,000</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Revenue Streams -->
        <div class="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm relative overflow-hidden">
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-50 rounded-full blur-2xl opacity-50"></div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-8 font-display text-center">Revenue Streams</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Type 1 -->
            <div class="border-2 border-gray-100 rounded-2xl p-8 hover:border-emerald-200 transition-colors relative">
              <div class="absolute top-0 right-0 bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">Type 1</div>
              <h4 class="text-xl font-bold text-gray-900 mb-2">One-Time Purchase</h4>
              <p class="text-gray-500 mb-6 text-sm">Complete hardware and software package with no recurring fees.</p>
              <div class="text-4xl font-display font-bold text-emerald-600 mb-6">
                ₹6,000 <span class="text-xl text-gray-400 font-normal">- 8,000</span>
              </div>
              <ul class="space-y-3 text-gray-600 text-sm">
                <li class="flex items-center gap-2"><mat-icon class="text-emerald-500 text-sm">done</mat-icon> Full Fermentation Tank</li>
                <li class="flex items-center gap-2"><mat-icon class="text-emerald-500 text-sm">done</mat-icon> Complete Analysis Kit</li>
                <li class="flex items-center gap-2"><mat-icon class="text-emerald-500 text-sm">done</mat-icon> Lifetime Dashboard Access</li>
              </ul>
            </div>

            <!-- Type 2 -->
            <div class="border-2 border-emerald-500 rounded-2xl p-8 relative shadow-md shadow-emerald-100">
              <div class="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">Type 2 (Popular)</div>
              <h4 class="text-xl font-bold text-gray-900 mb-2">Subscription Based</h4>
              <p class="text-gray-500 mb-6 text-sm">Hardware kit provided for free, pay only for the software platform.</p>
              <div class="text-4xl font-display font-bold text-emerald-600 mb-2">
                ₹399 <span class="text-lg text-gray-500 font-normal">/ month</span>
              </div>
              <p class="text-xs text-emerald-600 font-medium mb-6 bg-emerald-50 inline-block px-2 py-1 rounded">2 Years Lock-in Period</p>
              <ul class="space-y-3 text-gray-600 text-sm">
                <li class="flex items-center gap-2"><mat-icon class="text-emerald-500 text-sm">done</mat-icon> <span class="font-bold text-gray-900">Free</span> Hardware Kit</li>
                <li class="flex items-center gap-2"><mat-icon class="text-emerald-500 text-sm">done</mat-icon> Premium AI Analysis Features</li>
                <li class="flex items-center gap-2"><mat-icon class="text-emerald-500 text-sm">done</mat-icon> Continuous System Support</li>
                <li class="flex items-center gap-2"><mat-icon class="text-emerald-500 text-sm">done</mat-icon> ₹4,800/yr (₹9,800 approx total)</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class BusinessModelComponent {}
