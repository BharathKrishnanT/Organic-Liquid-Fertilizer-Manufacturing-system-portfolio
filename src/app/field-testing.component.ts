import { Component } from '@angular/core';

@Component({
  selector: 'app-field-testing',
  standalone: true,
  template: `
    <section id="field-testing" class="py-24 bg-emerald-50/80 backdrop-blur-md border-b border-gray-100/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Field testing and customer interaction</h2>
          <p class="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real-world validation from farmers and early adopters
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Captured results from field trials and direct customer conversations to refine the liquid fertilizer manufacturing solution.
          </p>
        </div>

        <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <div class="overflow-hidden rounded-3xl shadow-xl border border-gray-200 bg-black">
              <video controls preload="metadata" class="w-full h-auto block" src="/field-testing-video.mp4">
                Your browser does not support the video tag. You can <a href="/field-testing-video.mp4" target="_blank" rel="noreferrer">download and watch the field testing video</a>.
              </video>
            </div>
          </div>

          <div class="space-y-6 text-gray-700">
            <div>
              <h3 class="text-xl font-semibold text-gray-900">What we captured</h3>
              <p class="mt-4 text-gray-600">
                Field trials included nutrient dosing, tank performance, and customer feedback on usability, reliability, and perceived value.
              </p>
            </div>
            <div class="space-y-3">
              <p class="flex items-start gap-3">
                <span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                Direct farmer interviews for real-time product improvements.
              </p>
              <p class="flex items-start gap-3">
                <span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                Live demonstration of the liquid fertilizer formulation and monitoring workflow.
              </p>
              <p class="flex items-start gap-3">
                <span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                Early customer interaction shaped the final product positioning and pricing strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FieldTestingComponent {}
