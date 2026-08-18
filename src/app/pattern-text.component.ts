import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pattern-text',
  standalone: true,
  template: `
    <span
      [attr.data-shadow]="text"
      class="relative inline-block font-bold [text-shadow:0.02em_0.02em_0_var(--color-white)] after:absolute after:top-2 after:left-2 after:-z-10 after:content-[attr(data-shadow)] after:bg-[length:0.05em_0.05em] after:bg-clip-text after:text-transparent after:text-shadow-none after:bg-[linear-gradient(45deg,transparent_45%,var(--color-emerald-600)_45%,var(--color-emerald-600)_55%,transparent_0)] after:animate-shadanim {{ className }}"
    >
      {{ text }}
    </span>
  `
})
export class PatternTextComponent {
  @Input() text = '';
  @Input() className = '';
}
