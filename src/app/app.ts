import { ChangeDetectionStrategy, Component, signal, effect, inject, PLATFORM_ID, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs/operators';
import { animate } from 'motion';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatIconModule],
  template: `
    <div class="min-h-screen flex flex-col">
      <!-- Navbar -->
      <header class="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
              <a routerLink="/" class="group flex items-center gap-3">
                <div class="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#050505] border border-white/10 shadow-[0_0_15px_rgba(0,212,255,0.1)] group-hover:border-neon-blue/40 group-hover:shadow-[0_0_25px_rgba(0,212,255,0.25)] transition-all duration-500">
                  <div class="w-4 h-4 border-[3px] border-neon-blue rounded-sm rotate-45 group-hover:rotate-180 transition-transform duration-700 ease-in-out"></div>
                  <div class="absolute w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                <div class="flex flex-col justify-center">
                  <span class="text-xl font-black tracking-widest text-white uppercase leading-none">Nikasa</span>
                  <span class="text-[0.6rem] font-bold text-gray-500 tracking-[0.25em] uppercase mt-1 group-hover:text-neon-blue transition-colors duration-500">Digital</span>
                </div>
              </a>
            </div>

            <!-- Desktop Menu -->
            <nav class="hidden md:flex space-x-8">
              @for (item of navItems; track item.path) {
                <a [routerLink]="item.path" 
                   routerLinkActive="text-neon-blue" 
                   [routerLinkActiveOptions]="{exact: item.path === '/'}"
                   class="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  {{ item.label }}
                </a>
              }
            </nav>

            <!-- CTA Button & Theme Toggle -->
            <div class="hidden md:flex items-center gap-4">
              <button (click)="toggleTheme()" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:bg-white/10 transition-colors" [title]="isLightTheme() ? 'Switch to Dark Mode' : 'Switch to Light Mode'">
                <mat-icon>{{ isLightTheme() ? 'dark_mode' : 'light_mode' }}</mat-icon>
              </button>
              <a routerLink="/contact" class="px-5 py-2.5 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20 hover:bg-neon-blue hover:text-black transition-all duration-300 font-medium text-sm shadow-[0_0_15px_rgba(0,212,255,0.15)] hover:shadow-[0_0_25px_rgba(0,212,255,0.4)]">
                Get a Free Audit
              </a>
            </div>

            <!-- Mobile menu button -->
            <div class="flex items-center md:hidden gap-4">
              <button (click)="toggleTheme()" class="text-gray-400 hover:text-neon-blue focus:outline-none">
                <mat-icon>{{ isLightTheme() ? 'dark_mode' : 'light_mode' }}</mat-icon>
              </button>
              <button (click)="toggleMobileMenu()" class="text-gray-400 hover:text-white focus:outline-none">
                <mat-icon>{{ isMobileMenuOpen() ? 'close' : 'menu' }}</mat-icon>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Menu -->
        @if (isMobileMenuOpen()) {
          <div class="md:hidden bg-[#0a0a0a] border-b border-white/5 absolute w-full">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              @for (item of navItems; track item.path) {
                <a [routerLink]="item.path" 
                   (click)="toggleMobileMenu()"
                   routerLinkActive="text-neon-blue bg-white/5" 
                   [routerLinkActiveOptions]="{exact: item.path === '/'}"
                   class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">
                  {{ item.label }}
                </a>
              }
              <a routerLink="/contact" (click)="toggleMobileMenu()" class="block mt-4 px-3 py-2 text-center rounded-md bg-neon-blue text-black font-medium">
                Get a Free Audit
              </a>
            </div>
          </div>
        }
      </header>

      <!-- Main Content -->
      <main class="flex-grow pt-20">
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <footer class="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div class="col-span-1 md:col-span-2">
              <a routerLink="/" class="group flex items-center gap-3 mb-6">
                <div class="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#050505] border border-white/10 shadow-[0_0_15px_rgba(0,212,255,0.1)] group-hover:border-neon-blue/40 group-hover:shadow-[0_0_25px_rgba(0,212,255,0.25)] transition-all duration-500">
                  <div class="w-4 h-4 border-[3px] border-neon-blue rounded-sm rotate-45 group-hover:rotate-180 transition-transform duration-700 ease-in-out"></div>
                  <div class="absolute w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                <div class="flex flex-col justify-center">
                  <span class="text-xl font-black tracking-widest text-white uppercase leading-none">Nikasa</span>
                  <span class="text-[0.6rem] font-bold text-gray-500 tracking-[0.25em] uppercase mt-1 group-hover:text-neon-blue transition-colors duration-500">Digital</span>
                </div>
              </a>
              <p class="text-gray-400 max-w-sm mb-6">
                Custom Web Apps in 2 Weeks. Specializing in high-performance Node.js & Django backends with modern frontend frameworks.
              </p>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:bg-white/10 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" /></svg>
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:bg-white/10 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 class="text-white font-semibold mb-4">Navigation</h3>
              <ul class="space-y-2">
                @for (item of navItems; track item.path) {
                  <li>
                    <a [routerLink]="item.path" class="text-gray-400 hover:text-neon-blue transition-colors text-sm">{{ item.label }}</a>
                  </li>
                }
              </ul>
            </div>
            
            <div>
              <h3 class="text-white font-semibold mb-4">Legal</h3>
              <ul class="space-y-2">
                <li><a routerLink="/privacy" class="text-gray-400 hover:text-neon-blue transition-colors text-sm">Privacy Policy</a></li>
                <li><a routerLink="/terms" class="text-gray-400 hover:text-neon-blue transition-colors text-sm">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {{ currentYear }} Nikasa. All rights reserved.
            </p>
            <p class="text-gray-500 text-sm flex items-center">
              Designed with NIKASA
            </p>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class App {
  isMobileMenuOpen = signal(false);
  isLightTheme = signal(false);
  currentYear = new Date().getFullYear();
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

  navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/faq', label: 'FAQ' }
  ];

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'light') {
        this.isLightTheme.set(true);
        document.documentElement.classList.add('light-theme');
      }
    }

    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        if (this.isLightTheme()) {
          document.documentElement.classList.add('light-theme');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.classList.remove('light-theme');
          localStorage.setItem('theme', 'dark');
        }
      }
    });

    afterNextRender(() => {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        const mainEl = document.querySelector('main');
        if (mainEl) {
          animate(mainEl, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, ease: "easeOut" });
        }
      });
    });
  }

  toggleTheme() {
    this.isLightTheme.update(v => !v);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }
}
