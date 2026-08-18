import { Component } from '@angular/core';

@Component({
  selector: 'app-field-testing',
  standalone: true,
  template: `
    <section id="field-testing" class="py-24 bg-emerald-50/80 backdrop-blur-md border-b border-gray-100/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Feild Testing</h2>
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
              <h3 class="text-xl font-semibold text-gray-900">Field trial highlights</h3>
              <p class="mt-4 text-gray-600">
                Field tests were run across different crop conditions to validate nutrient dosing, tank reliability, and consistency of output.
              </p>
            </div>
            <div class="space-y-3">
              <p class="flex items-start gap-3">
                <span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                Performance checks on fermentation cycle stability and nutrient concentration.
              </p>
              <p class="flex items-start gap-3">
                <span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                Live demonstrations of formulation, mixing, and monitoring workflow.
              </p>
              <p class="flex items-start gap-3">
                <span class="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
                Comparative outcomes observed for plant response and ease of field deployment.
              </p>
            </div>
          </div>
        </div>

        <div class="mt-16 border-t border-emerald-100 pt-16">
          <div class="text-center max-w-3xl mx-auto mb-10">
            <h3 class="text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-3">Before The process</h3>
            <p class="mt-2 text-2xl leading-8 font-display font-bold tracking-tight text-gray-900 sm:text-3xl">
              Baseline field conditions before the production process begins
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article class="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div class="h-56 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.45),_rgba(22,101,52,0.9))] relative">
                <div class="absolute inset-0 opacity-80" style="background-image: linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px); background-size: 24px 24px;"></div>
                <div class="absolute inset-x-4 bottom-4 h-28 rounded-2xl bg-gradient-to-r from-emerald-500/30 via-green-500/20 to-lime-400/25 shadow-inner"></div>
              </div>
              <div class="p-5">
                <p class="text-gray-700 text-sm leading-6">The field shows uniformly dense green rows, indicating healthy crop growth and ideal conditions for organic input validation.</p>
              </div>
            </article>

            <article class="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div class="h-56 bg-[radial-gradient(circle_at_center,_rgba(21,128,61,0.4),_rgba(12,74,110,0.88))] relative">
                <div class="absolute inset-0 opacity-70" style="background-image: linear-gradient(to right, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px); background-size: 18px 18px;"></div>
                <div class="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-yellow-300/80 shadow-lg shadow-yellow-500/30 bg-emerald-500/30"></div>
              </div>
              <div class="p-5">
                <p class="text-gray-700 text-sm leading-6">The moringa plantation reflects a strong organic biomass source, showing the raw material potential for nutrient-rich liquid fertilizer production.</p>
              </div>
            </article>

            <article class="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div class="h-56 bg-[radial-gradient(circle_at_top,_rgba(22,163,74,0.3),_rgba(120,113,108,0.9))] relative">
                <div class="absolute inset-0 opacity-70" style="background-image: linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px); background-size: 22px 22px;"></div>
                <div class="absolute inset-x-6 bottom-6 h-16 rounded-xl bg-gradient-to-r from-green-500/25 via-emerald-500/15 to-lime-400/20"></div>
              </div>
              <div class="p-5">
                <p class="text-gray-700 text-sm leading-6">This field condition shows a well-managed crop bed with strong soil coverage, suggesting a healthy baseline for testing sustainable fertilizer impact.</p>
              </div>
            </article>
          </div>
        </div>

        <div class="mt-16 border-t border-emerald-100 pt-16">
          <div class="text-center max-w-3xl mx-auto mb-10">
            <h3 class="text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-3">Soil and Crop Analysis</h3>
            <p class="mt-2 text-2xl leading-8 font-display font-bold tracking-tight text-gray-900 sm:text-3xl">
              Nutrient and crop assessment before final fertilizer recommendations
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article class="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div class="h-64 bg-cover bg-center" style="background-image: url('/achievements/achievement-1.jpeg');"></div>
              <div class="p-5">
                <p class="text-gray-700 text-sm leading-6">NPK sensor soil testing measures available nitrogen, phosphorus, and potassium in real time for precise nutrient adjustment.</p>
              </div>
            </article>

            <article class="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div class="h-64 bg-cover bg-center" style="background-image: url('/achievements/achievement-2.jpeg');"></div>
              <div class="p-5">
                <p class="text-gray-700 text-sm leading-6">Soil collection from the field helps confirm texture, moisture, and nutrient imbalance before the process begins.</p>
              </div>
            </article>

            <article class="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div class="h-64 bg-cover bg-center" style="background-image: url('/achievements/achievement-3.jpeg');"></div>
              <div class="p-5">
                <p class="text-gray-700 text-sm leading-6">Crop analysis checks plant vigor and visible stress signs to ensure the fertilizer strategy matches actual field conditions.</p>
              </div>
            </article>
          </div>
        </div>

        <div class="mt-16 border-t border-emerald-100 pt-16">
          <div class="text-center max-w-3xl mx-auto mb-10">
            <h3 class="text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-3">Fertilizer manufacturing</h3>
            <p class="mt-2 text-2xl leading-8 font-display font-bold tracking-tight text-gray-900 sm:text-3xl">
              Organic nutrient conversion through controlled fermentation and processing
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article class="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div class="h-64 bg-cover bg-center" style="background-image: url('/achievements/achievement-4.jpeg');"></div>
              <div class="p-5">
                <p class="text-gray-700 text-sm leading-6">Raw organic biomass is loaded into the fermentation chamber to begin the nutrient breakdown process.</p>
              </div>
            </article>

            <article class="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div class="h-64 bg-cover bg-center" style="background-image: url('/achievements/achievement-5.jpeg');"></div>
              <div class="p-5">
                <p class="text-gray-700 text-sm leading-6">The process tank converts plant material into a nutrient-rich liquid fertilizer through controlled microbial fermentation.</p>
              </div>
            </article>

            <article class="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div class="h-64 bg-cover bg-center" style="background-image: url('/achievements/achievement-6.jpeg');"></div>
              <div class="p-5">
                <p class="text-gray-700 text-sm leading-6">The final fermented output is collected and prepared for field application as a sustainable liquid fertilizer.</p>
              </div>
            </article>
          </div>
        </div>

        <div class="mt-16 border-t border-emerald-100 pt-16">
          <div class="text-center max-w-3xl mx-auto mb-10">
            <h3 class="text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-3">Results after 10 days of using our fertilizer</h3>
            <p class="mt-2 text-2xl leading-8 font-display font-bold tracking-tight text-gray-900 sm:text-3xl">
              Visible improvement in crop vigor, color, and field response after application
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article class="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div class="h-64 bg-cover bg-center" style="background-image: url('/achievements/achievement-7.jpeg');"></div>
              <div class="p-5">
                <p class="text-gray-700 text-sm leading-6">Within 10 days, the crop showed stronger green color and healthier leaf growth than the untreated baseline.</p>
              </div>
            </article>

            <article class="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div class="h-64 bg-cover bg-center" style="background-image: url('/achievements/achievement-8.jpeg');"></div>
              <div class="p-5">
                <p class="text-gray-700 text-sm leading-6">The treated rows displayed denser growth and improved uniformity, indicating a positive nutrient response.</p>
              </div>
            </article>

            <article class="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
              <div class="h-64 bg-cover bg-center" style="background-image: url('/achievements/achievement-9.jpeg');"></div>
              <div class="p-5">
                <p class="text-gray-700 text-sm leading-6">After ten days, the crop health visibly improved, confirming practical effectiveness of the liquid fertilizer.</p>
              </div>
            </article>
          </div>
        </div>

        <div class="mt-16 border-t border-emerald-100 pt-16">
          <div class="text-center max-w-3xl mx-auto mb-10">
            <h3 class="text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-3">Customer Intraction and Review</h3>
            <p class="mt-2 text-2xl leading-8 font-display font-bold tracking-tight text-gray-900 sm:text-3xl">
              Practical feedback that shaped the final solution
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article class="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm">
              <h4 class="text-lg font-semibold text-gray-900">Usability Inputs</h4>
              <p class="mt-3 text-gray-600 text-sm">
                Farmers highlighted simpler calibration steps and clearer indicator labels for daily operation.
              </p>
            </article>
            <article class="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm">
              <h4 class="text-lg font-semibold text-gray-900">Reliability Review</h4>
              <p class="mt-3 text-gray-600 text-sm">
                Repeated field usage validated mechanical stability and consistency in fertilizer delivery.
              </p>
            </article>
            <article class="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm">
              <h4 class="text-lg font-semibold text-gray-900">Market Response</h4>
              <p class="mt-3 text-gray-600 text-sm">
                Early customer conversations informed packaging, pricing direction, and service expectations.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FieldTestingComponent {}
