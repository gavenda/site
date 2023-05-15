import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionComponent, SectionListItem } from './section/section.component';

interface AppSection {
  intro: SectionListItem[];
  features: SectionListItem[];
  add: SectionListItem[];
  source: SectionListItem[];
  inspiration: SectionListItem[];
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
      <section appSection id="intro" title="What is Basura?" [items]="section.intro"></section>
      <section appSection id="features" title="What can it do?" [items]="section.features"></section>
      <section appSection id="add" title="I want to add this bot!" [items]="section.add"></section>
      <section appSection id="source" title="Is this bot open source?" [items]="section.source"></section>
      <section
        appSection
        id="inspiration"
        title="It this bot inspired by another?"
        [items]="section.inspiration"></section>
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
        text: 'Basura literally means trash.',
      },
      {
        type: 'text',
        text: 'Trash includes isekai bullshit, power leveling xianxia, wuxia, otome politics,and any that heightens your level of idiotness.        ',
      },
    ],
    features: [
      {
        type: 'text',
        text: 'Look up anime or manga from AniList.',
      },
      {
        type: 'text',
        text: 'Look up rankings of anime/manga by season, year, or format.',
      },
      {
        type: 'text',
        text: 'Look up characters from AniList.',
      },
      {
        type: 'text',
        text: 'Look up staff (seiyuu/producer/etc) from AniList.',
      },
      {
        type: 'text',
        text: 'Look up an AniList user with a naive representation of their statistics.',
      },
      {
        type: 'text',
        text: 'Allows you to link your AniList account by just specifying your username. This can also differ by server.',
      },
      {
        type: 'text',
        text: "When you are linked, when someone looks up an anime or manga, you'll be able to see which user has that on their list.",
      },
    ],
    add: [
      {
        type: 'link',
        url: 'https://discord.com/oauth2/authorize?client_id=870014073197170799&scope=applications.commands',
        text: 'Click me!',
      },
    ],
    source: [
      {
        type: 'text',
        text: 'Yes, licensed under MIT.',
      },
      {
        type: 'link',
        url: 'https://github.com/gavenda/basura',
        text: 'Click me for source!',
      },
      {
        type: 'text',
        text: 'Feel free to contribute, will happily appreciate it.',
      },
    ],
    inspiration: [
      {
        type: 'text',
        text: 'Yes, this is higly inspired from Annie, in fact, most of what it does comes from it.',
      },
      {
        type: 'text',
        text: 'Annie has been inactive for a while which decided the development of this bot.',
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
