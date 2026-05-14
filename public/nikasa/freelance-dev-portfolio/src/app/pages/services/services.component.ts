import { ChangeDetectionStrategy, Component, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { animate, stagger } from 'motion';

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="pt-12 pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-20">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Simple, Transparent <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-purple-500">Pricing</span></h1>
          <p class="text-xl text-gray-400">Choose the perfect plan for your project. No hidden fees, just high-quality code delivered on time.</p>
        </div>

        <!-- Pricing Table -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <!-- Tier 1 -->
          <div class="pricing-card rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 flex flex-col hover:border-neon-blue/30 transition-all duration-300">
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-white mb-2">Basic Site</h3>
              <p class="text-gray-400 text-sm h-10">Perfect for portfolios, small businesses, and landing pages.</p>
            </div>
            <div class="mb-8">
              <span class="text-5xl font-bold text-white">₹30k</span>
              <span class="text-gray-500">/project</span>
            </div>
            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">Up to 5 Pages</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">Responsive Design</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">Basic SEO Setup</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">Contact Form Integration</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">1 Week Delivery</span>
              </li>
            </ul>
            <a routerLink="/contact" class="w-full py-3 rounded-xl bg-white/5 text-white font-medium text-center hover:bg-white/10 transition-colors border border-white/10">
              Get Started
            </a>
          </div>

          <!-- Tier 2 (Highlighted) -->
          <div class="pricing-card rounded-3xl bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-neon-blue/50 p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(0,212,255,0.1)]">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-blue text-black px-4 py-1 rounded-full text-sm font-bold tracking-wide">
              MOST POPULAR
            </div>
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-white mb-2">Custom API</h3>
              <p class="text-gray-400 text-sm h-10">Robust backend solutions for mobile apps or frontend clients.</p>
            </div>
            <div class="mb-8">
              <span class="text-5xl font-bold text-white">₹50k+</span>
              <span class="text-gray-500">/project</span>
            </div>
            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">Node.js or Django Backend</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">RESTful Architecture</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">Database Design (SQL/NoSQL)</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">JWT Authentication</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">API Documentation (Swagger)</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">2-3 Weeks Delivery</span>
              </li>
            </ul>
            <a routerLink="/contact" class="w-full py-3 rounded-xl bg-neon-blue text-black font-bold text-center hover:bg-neon-blue/90 transition-colors shadow-[0_0_15px_rgba(0,212,255,0.3)]">
              Get Started
            </a>
          </div>

          <!-- Tier 3 -->
          <div class="pricing-card rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 flex flex-col hover:border-neon-blue/30 transition-all duration-300">
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-white mb-2">Full Stack</h3>
              <p class="text-gray-400 text-sm h-10">End-to-end custom web applications and SaaS platforms.</p>
            </div>
            <div class="mb-8">
              <span class="text-5xl font-bold text-white">₹75k+</span>
              <span class="text-gray-500">/project</span>
            </div>
            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">Custom Frontend & Backend</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">Complex Business Logic</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">Third-party Integrations</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">Admin Dashboard</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">Deployment & CI/CD Setup</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-neon-blue mt-0.5 text-xl">check_circle</mat-icon>
                <span class="text-gray-300">4+ Weeks Delivery</span>
              </li>
            </ul>
            <a routerLink="/contact" class="w-full py-3 rounded-xl bg-white/5 text-white font-medium text-center hover:bg-white/10 transition-colors border border-white/10">
              Let's Discuss
            </a>
          </div>

        </div>

        <!-- FAQ Teaser -->
        <div class="mt-24 text-center">
          <p class="text-gray-400 mb-4">Have questions about the process or pricing?</p>
          <a routerLink="/faq" class="inline-flex items-center gap-2 text-neon-blue hover:text-white transition-colors font-medium">
            Read the FAQ <mat-icon class="text-sm">arrow_forward</mat-icon>
          </a>
        </div>

      </div>
    </div>
  `
})
export class ServicesComponent {
  constructor() {
    afterNextRender(() => {
      const cards = document.querySelectorAll('.pricing-card');
      if (cards.length) {
        animate(cards, 
          { opacity: [0, 1], y: [30, 0] }, 
          { delay: stagger(0.15), duration: 0.6, ease: "easeOut" }
        );
      }
    });
  }
}
