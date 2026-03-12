import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section id="achievements" class="py-24 bg-white/60 backdrop-blur-lg border-t border-gray-100/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Certifications & Patents</h2>
          <p class="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-gray-900 sm:text-4xl">
            Recognized Innovation
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our system is officially recognized and registered as a cutting-edge solution for sustainable agriculture.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Patent -->
          <div class="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 group hover:border-emerald-300 transition-all flex flex-col shadow-sm hover:shadow-md">
            <!-- Image Container -->
            <div class="h-72 overflow-hidden relative bg-gray-200 border-b border-gray-200">
              <img src="/patent.jpg" alt="German Utility Model Patent" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" referrerpolicy="no-referrer" onerror="this.src='https://picsum.photos/seed/patentdoc/800/600'" />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <div class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-yellow-400 mb-3 border border-white/30">
                  <mat-icon class="text-2xl">workspace_premium</mat-icon>
                </div>
                <h3 class="text-2xl font-bold font-display">German Utility Model</h3>
              </div>
            </div>
            
            <div class="p-8 flex-1">
              <p class="text-sm text-gray-500 font-mono mb-6 bg-white inline-block px-3 py-1 rounded border border-gray-100 shadow-sm">
                Nr. 20 2025 104 369
              </p>
              
              <div class="space-y-4">
                <div>
                  <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Title</p>
                  <p class="text-gray-800 font-medium italic">"Ein System zur Erzeugung von Biogas und angereicherten Nährstoffen aus organischem Mist"</p>
                  <p class="text-sm text-gray-500 mt-1">(A system for generating biogas and enriched nutrients from organic manure)</p>
                </div>
                
                <div class="pt-4 border-t border-gray-200">
                  <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Registration Authority</p>
                  <p class="text-gray-800 font-medium">Deutsches Patent- und Markenamt (DPMA)</p>
                  <p class="text-sm text-gray-500">Bundesrepublik Deutschland</p>
                </div>
              </div>
            </div>
          </div>

          <!-- MSME -->
          <div class="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 group hover:border-blue-300 transition-all flex flex-col shadow-sm hover:shadow-md">
            <!-- Image Container -->
            <div class="h-72 overflow-hidden relative bg-gray-200 border-b border-gray-200">
              <img src="/msme.jpg" alt="MSME Udyam Registration" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" referrerpolicy="no-referrer" onerror="this.src='https://picsum.photos/seed/msmedoc/800/600'" />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <div class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-blue-400 mb-3 border border-white/30">
                  <mat-icon class="text-2xl">verified</mat-icon>
                </div>
                <h3 class="text-2xl font-bold font-display">MSME Udyam Registration</h3>
              </div>
            </div>
            
            <div class="p-8 flex-1">
              <p class="text-sm text-gray-500 font-mono mb-6 bg-white inline-block px-3 py-1 rounded border border-gray-100 shadow-sm">
                UDYAM-TN-10-0047786
              </p>
              
              <div class="space-y-4">
                <div>
                  <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Enterprise Name</p>
                  <p class="text-gray-800 font-bold text-xl">AGON</p>
                </div>
                
                <div class="pt-4 border-t border-gray-200">
                  <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Classification</p>
                  <p class="text-gray-800 font-medium">Micro Enterprise - Manufacturing</p>
                  <p class="text-sm text-gray-500 mt-1">Specialized construction activities (NIC 43900)</p>
                </div>
                
                <div class="pt-4 border-t border-gray-200">
                  <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Location</p>
                  <p class="text-gray-800 font-medium">Karur, Tamil Nadu, India</p>
                  <p class="text-sm text-gray-500">Ministry of Micro, Small and Medium Enterprises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AchievementsComponent {}
