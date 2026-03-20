
import { Component } from '@angular/core';
import { SectionComponent, SectionListItem } from './section/section.component';

interface AppSection {
  intro: SectionListItem[];
  projects: SectionListItem[];
  donate: SectionListItem[];
  contact: SectionListItem[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SectionComponent],
  template: `
    <main class="p-20 max-w-2xl">
      <header class="mb-12 text-xl font-bold">
        @for (value of hostname; track value; let i = $index) {
          @if (i % 2 !== 0) {
            @if (i + 1 !== hostname.length) {
              <span class="text-gray-500">.{{ value }}.</span>
            } @else {
              <span class="text-gray-500">.{{ value }}</span>
            }
          } @else {
            {{ value }}
          }
        }
      </header>
    
      <!-- Sections -->
      <section appSection id="intro" [items]="section.intro"></section>
      <section appSection id="projects" title="Projects" [items]="section.projects"></section>
      <section appSection id="donate" title="Donate" [items]="section.donate"></section>
      <section appSection id="contact" title="Contact" [items]="section.contact"></section>
    
      <footer class="mt-12 pt-4 pb-4 border-t border-solid text-gray-500 border-gray-800">&copy; {{ year }} Gavenda.</footer>
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
  year = new Date().getFullYear();
  hostname = location.hostname.split('.');
}
