import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-etheral-shadow',
  standalone: true,
  styles: [`
    .swirling-gradient-container {
      position: absolute;
      inset: -50%;
      background: conic-gradient(from 0deg at 50% 50%, rgba(16, 185, 129, 0), rgba(20, 184, 166, 0.4), rgba(45, 212, 191, 0), rgba(16, 185, 129, 0.4), rgba(16, 185, 129, 0));
      animation: spin 25s linear infinite;
      filter: blur(40px);
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `],
  template: `
    <div
      class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none"
      [style.width]="'100%'"
      [style.height]="'100%'"
    >
      <div
        class="absolute"
        [style.inset]="'-' + displacementScale + 'px'"
        [style.filter]="animationEnabled ? 'url(#' + id + ') blur(4px)' : 'none'"
      >
        @if (animationEnabled) {
          <svg style="position: absolute; width: 0; height: 0;">
            <defs>
              <filter [id]="id">
                <feTurbulence
                  result="undulation"
                  numOctaves="2"
                  [attr.baseFrequency]="baseFrequency"
                  seed="0"
                  type="turbulence"
                />
                <feColorMatrix
                  #colorMatrix
                  in="undulation"
                  type="hueRotate"
                  values="180"
                />
                <feColorMatrix
                  in="dist"
                  result="circulation"
                  type="matrix"
                  values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="circulation"
                  [attr.scale]="displacementScale"
                  result="dist"
                />
                <feDisplacementMap
                  in="dist"
                  in2="undulation"
                  [attr.scale]="displacementScale"
                  result="output"
                />
              </filter>
            </defs>
          </svg>
        }
        <div
          class="relative overflow-hidden"
          [style.maskImage]="'url(https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png)'"
          [style.maskSize]="sizing === 'stretch' ? '100% 100%' : 'cover'"
          style="-webkit-mask-image: url(https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png); -webkit-mask-size: cover; -webkit-mask-repeat: no-repeat; -webkit-mask-position: center; mask-repeat: no-repeat; mask-position: center; width: 100%; height: 100%;"
        >
          <div class="absolute inset-0" [style.backgroundColor]="color"></div>
          <div class="swirling-gradient-container"></div>
        </div>
      </div>

      @if (noiseOpacity > 0) {
        <div
          class="absolute inset-0"
          [style.backgroundImage]="'url(https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png)'"
          [style.backgroundSize]="(noiseScale * 200) + 'px'"
          style="background-repeat: repeat;"
          [style.opacity]="noiseOpacity / 2"
        ></div>
      }
    </div>
  `
})
export class EtheralShadowComponent implements AfterViewInit, OnDestroy {
  @Input() sizing: 'fill' | 'stretch' = 'fill';
  @Input() color = 'rgba(16, 185, 129, 0.15)'; // Default to a subtle emerald
  @Input() animationScale = 100;
  @Input() animationSpeed = 90;
  @Input() noiseOpacity = 0.8;
  @Input() noiseScale = 1.2;

  id = 'shadowoverlay-' + Math.random().toString(36).substring(2, 9);

  @ViewChild('colorMatrix') colorMatrix!: ElementRef<SVGFEColorMatrixElement>;

  animationControls: unknown;
  private platformId = inject(PLATFORM_ID);

  get animationEnabled() { return this.animationScale > 0; }
  get displacementScale() { return this.animationEnabled ? this.mapRange(this.animationScale, 1, 100, 20, 100) : 0; }
  get animationDuration() { return this.animationEnabled ? this.mapRange(this.animationSpeed, 1, 100, 1000, 50) : 1; }
  get baseFrequency() {
    const f1 = this.mapRange(this.animationScale, 0, 100, 0.001, 0.0005);
    const f2 = this.mapRange(this.animationScale, 0, 100, 0.004, 0.002);
    return `${f1},${f2}`;
  }

  mapRange(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
    if (fromLow === fromHigh) return toLow;
    return toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && this.animationEnabled) {
      import('motion').then(({ animate }) => {
        this.animationControls = animate(0, 360, {
          duration: this.animationDuration / 25,
          repeat: Infinity,
          ease: "linear",
          onUpdate: (latest) => {
            if (this.colorMatrix?.nativeElement) {
              this.colorMatrix.nativeElement.setAttribute("values", String(latest));
            }
          }
        });
      });
    }
  }

  ngOnDestroy() {
    const controls = this.animationControls as { stop?: () => void };
    if (controls && typeof controls.stop === 'function') {
      controls.stop();
    }
  }
}
