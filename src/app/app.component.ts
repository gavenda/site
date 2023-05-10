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
      <header class="mb-12 text-xl font-bold">gavenda<span class="text-gray-500">.dev</span></header>

      <section appSection id="intro" [items]="section.intro"></section>

      <section appSection id="projects" title="Projects" [items]="section.projects"></section>

      <section appSection id="templates" title="Templates" [items]="section.templates">
        <ul class="list-none p-0">
          <li>
            =>
            <a
              class="text-sky-200 hover:underline"
              href="https://github.com/gavenda/discord-bot-kotlin"
              target="_blank"
              rel="noopener">
              discord-bot-kotlin
            </a>
          </li>
        </ul>
      </section>

      <section appSection id="donate" title="Donate" [items]="section.donate">
        <p>=> I might accept donations if I make something significant to the community.</p>
      </section>

      <section appSection id="contact" title="Contact" [items]="section.contact">
        <p>=> I might accept donations if I make something significant to the community.</p>
      </section>

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
}
