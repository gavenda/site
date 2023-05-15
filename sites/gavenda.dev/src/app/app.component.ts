import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionComponent, SectionListItem } from './section/section.component';

interface AppSection {
  intro: SectionListItem[];
  projects: SectionListItem[];
  templates: SectionListItem[];
  donate: SectionListItem[];
  contact: SectionListItem[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SectionComponent],
  template: `
    <main class="p-20 max-w-2xl">
      <header class="mb-12 text-xl font-bold">
        <ng-container *ngFor="let value of hostname; let i = index">
          <ng-container *ngIf="i % 2 !== 0; else noDots">
            <ng-container *ngIf="i + 1 !== hostname.length; else singleDot">
              <span class="text-gray-500">.{{ value }}.</span>
            </ng-container>
            <ng-template #singleDot>
              <span class="text-gray-500">.{{ value }}</span>
            </ng-template>
          </ng-container>
          <ng-template #noDots>{{ value }}</ng-template>
        </ng-container>
      </header>

      <!-- Sections -->
      <section appSection id="intro" [items]="section.intro"></section>
      <section appSection id="projects" title="Projects" [items]="section.projects"></section>
      <section appSection id="templates" title="Templates" [items]="section.templates"></section>
      <section appSection id="donate" title="Donate" [items]="section.donate"></section>
      <section appSection id="contact" title="Contact" [items]="section.contact"></section>

      <footer class="mt-12 pt-4 pb-4 border-t border-solid text-gray-500 border-gray-800">&copy; 2023 Gavenda.</footer>
    </main>
  `,
  styles: [],
})
export class AppComponent {
  section: AppSection = {
    intro: [
      {
        type: 'text',
        text: 'I write random open-source crapware for free. For my personal use. Not yours.',
      },
    ],
    projects: [
      {
        type: 'link',
        url: 'https://github.com/gavenda/basura',
        text: 'Basura (AniList Bot)',
      },
      {
        type: 'link',
        url: 'https://github.com/gavenda/studio-helper/tree/main/bot/vivy',
        text: 'Vivy (Modern Music Bot)',
      },
    ],
    templates: [
      {
        type: 'link',
        url: 'https://github.com/gavenda/discord-bot-kotlin',
        text: 'discord-bot-kotlin',
      },
    ],
    donate: [
      {
        type: 'text',
        text: 'I might accept donations if I make something significant to the community.',
      },
    ],
    contact: [
      {
        type: 'link',
        url: 'https://osu.ppy.sh/users/Gavenda',
        text: 'osu!',
      },
      {
        type: 'link',
        url: 'https://anilist.co/user/Gavenda',
        text: 'AniList',
      },
      {
        type: 'link',
        url: 'https://github.com/gavenda',
        text: 'GitHub',
      },
    ],
  };

  hostname = location.hostname.split('.');
}
