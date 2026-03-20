
import { Component, Input } from '@angular/core';

export type SectionListItemType = 'text' | 'link';

export interface SectionListItem {
  type: SectionListItemType;
  url?: string;
  text: string;
}

@Component({
  selector: '[appSection]',
  standalone: true,
  imports: [],
  template: `
    @if (title) {
      <h1 class="font-bold uppercase text-lg mt-8 mb-8">{{ title }}</h1>
    }
    <ul class="list-none p-0">
      @for (item of items; track item) {
        <li>
          =>
          @if (item.type === 'link') {
            <a class="text-sky-200 hover:underline" [href]="item.url" target="_blank" rel="noopener">
              {{ item.text }}
            </a>
          } @else {
            {{ item.text }}
          }
        </li>
      }
    </ul>
    `,
  styles: [],
})
export class SectionComponent {
  @Input()
  title: string | undefined;

  @Input({ required: true })
  items!: SectionListItem[];
}
