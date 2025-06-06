import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./hero/hero.component').then(m => m.HeroComponent)
  },
  {
    path: 'about-me',
    loadComponent: () => import('./about-me/about-me.component').then(m => m.AboutMeComponent)
  },
  {
    path: 'hero',
    loadComponent: () => import('./hero/hero.component').then(m => m.HeroComponent)
  },
  {
    path: 'experience',
    loadComponent: () => import('./experience/experience.component').then(m => m.ExperienceComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('./skills/skills.component').then(m => m.SkillsComponent)
  },
  {
    path: 'contact-info',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
  }
];
