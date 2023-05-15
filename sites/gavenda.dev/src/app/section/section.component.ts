import { CommonModule } from '@angular/common';
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
  imports: [CommonModule],
  template: `
    <h1 *ngIf="title" class="font-bold uppercase text-lg mt-8 mb-8">{{ title }}</h1>
    <ul class="list-none p-0">
      <li *ngFor="let item of items">
        =>
        <ng-container *ngIf="item.type === 'link'; else renderText">
          <a class="text-sky-200 hover:underline" [href]="item.url" target="_blank" rel="noopener">
            {{ item.text }}
          </a>
        </ng-container>
        <ng-template #renderText>{{ item.text }}</ng-template>
      </li>
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
