import {ChangeDetectionStrategy, Component, AfterViewInit, PLATFORM_ID, inject} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { HeroComponent } from './hero.component';
import { ArchitectureComponent } from './architecture.component';
import { HardwareComponent } from './hardware.component';
import { FeaturesComponent } from './features.component';
import { TechStackComponent } from './tech-stack.component';
import { PrototypeComponent } from './prototype.component';
import { BusinessModelComponent } from './business-model.component';
import { AchievementsComponent } from './achievements.component';
import { ImpactFutureComponent } from './impact-future.component';
import { FooterComponent } from './footer.component';
import { EtheralShadowComponent } from './etheral-shadow.component';
import { ReactFeatureComponent } from './react-feature.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    ArchitectureComponent,
    HardwareComponent,
    FeaturesComponent,
    TechStackComponent,
    PrototypeComponent,
    BusinessModelComponent,
    AchievementsComponent,
    ImpactFutureComponent,
    FooterComponent,
    EtheralShadowComponent,
    ReactFeatureComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 0);
    }
  }
}
