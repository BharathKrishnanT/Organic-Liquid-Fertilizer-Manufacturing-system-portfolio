import { Component, ElementRef, inject, AfterViewInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { createRoot, Root } from 'react-dom/client';
import { Feature108Demo } from '../components/blocks/demo';
import { createElement } from 'react';

@Component({
  selector: 'app-react-feature',
  standalone: true,
  template: '<div id="react-root" style="min-height: 50px;"></div>',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class ReactFeatureComponent implements AfterViewInit, OnDestroy {
  private root?: Root;
  private elm = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      try {
        const container = this.elm.nativeElement.querySelector('#react-root');
        if (container) {
          this.root = createRoot(container);
          this.root.render(createElement(Feature108Demo));
        }
      } catch (e) {
        console.error('Failed to render React component', e);
      }
    }
  }

  ngOnDestroy() {
    this.root?.unmount();
  }
}
