import { ChangeDetectionStrategy, Component, OnInit, inject, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SeoService } from '../../services/seo';
import { animate, stagger } from 'motion';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="relative w-full">
      <!-- Local Navigation for Smooth Scrolling -->
      <div class="hidden lg:flex flex-col gap-4 fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <a routerLink="." fragment="hero" class="w-3 h-3 rounded-full bg-white/20 hover:bg-neon-blue transition-colors border border-white/10" title="Hero"></a>
        <a routerLink="." fragment="services" class="w-3 h-3 rounded-full bg-white/20 hover:bg-neon-blue transition-colors border border-white/10" title="Services"></a>
        <a routerLink="." fragment="testimonials" class="w-3 h-3 rounded-full bg-white/20 hover:bg-neon-blue transition-colors border border-white/10" title="Testimonials"></a>
        <a routerLink="." fragment="cta" class="w-3 h-3 rounded-full bg-white/20 hover:bg-neon-blue transition-colors border border-white/10" title="Contact"></a>
      </div>

      <!-- Hero Section -->
      <section id="hero" class="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <!-- Background elements -->
        <div class="absolute inset-0 z-0">
          <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]"></div>
          <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div class="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span class="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
            <span class="text-sm font-medium text-gray-300">Available for new projects</span>
          </div>
          
          <h1 class="hero-animate text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
            Custom Web Apps in <br class="hidden md:block" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-purple-500">2 Weeks</span>
          </h1>
          
          <p class="hero-animate text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 font-light">
            Node.js & Django Expert delivering high-performance, scalable solutions for startups and enterprises.
          </p>
          
          <div class="hero-animate flex flex-col sm:flex-row items-center justify-center gap-4">
            <a routerLink="/contact" class="w-full sm:w-auto px-8 py-4 rounded-full bg-neon-blue text-black font-semibold text-lg hover:bg-neon-blue/90 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] flex items-center justify-center gap-2">
              Get a Free Audit <mat-icon>arrow_forward</mat-icon>
            </a>
          </div>
          
          <div class="mt-20 flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div class="flex items-center gap-2 text-xl font-bold font-mono"><mat-icon>terminal</mat-icon> Node.js</div>
            <div class="flex items-center gap-2 text-xl font-bold font-mono"><mat-icon>data_object</mat-icon> Django</div>
            <div class="flex items-center gap-2 text-xl font-bold font-mono"><mat-icon>web</mat-icon> Angular</div>
            <div class="flex items-center gap-2 text-xl font-bold font-mono"><mat-icon>storage</mat-icon> MongoDB</div>
          </div>
        </div>

        <!-- Scroll Down Indicator -->
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 hidden md:block">
          <a routerLink="." fragment="services" class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:bg-white/10 transition-colors">
            <mat-icon>arrow_downward</mat-icon>
          </a>
        </div>
      </section>

      <!-- Services Teaser -->
      <section id="services" class="py-24 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">How I Can Help</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">From simple landing pages to complex enterprise architectures.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-neon-blue/30 transition-all duration-300">
              <div class="w-14 h-14 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-6">
                <mat-icon class="text-3xl">web</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">Frontend Development</h3>
              <p class="text-gray-400 mb-6">Pixel-perfect, responsive, and accessible user interfaces using Angular, React, and Tailwind CSS.</p>
              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-sm text-gray-300"><mat-icon class="text-neon-blue text-sm">check</mat-icon> Responsive Design</li>
                <li class="flex items-center gap-2 text-sm text-gray-300"><mat-icon class="text-neon-blue text-sm">check</mat-icon> SEO-Optimized</li>
                <li class="flex items-center gap-2 text-sm text-gray-300"><mat-icon class="text-neon-blue text-sm">check</mat-icon> Web Performance</li>
              </ul>
            </div>

            <div class="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-neon-blue/30 transition-all duration-300 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-neon-blue/5 rounded-bl-full"></div>
              <div class="w-14 h-14 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-6 relative z-10">
                <mat-icon class="text-3xl">dns</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-white mb-3 relative z-10">Backend & APIs</h3>
              <p class="text-gray-400 mb-6 relative z-10">Scalable, secure, and robust server-side architectures using Node.js, Express, and Django.</p>
              <ul class="space-y-2 relative z-10">
                <li class="flex items-center gap-2 text-sm text-gray-300"><mat-icon class="text-neon-blue text-sm">check</mat-icon> RESTful APIs</li>
                <li class="flex items-center gap-2 text-sm text-gray-300"><mat-icon class="text-neon-blue text-sm">check</mat-icon> Database Design</li>
                <li class="flex items-center gap-2 text-sm text-gray-300"><mat-icon class="text-neon-blue text-sm">check</mat-icon> Authentication</li>
              </ul>
            </div>

            <div class="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-neon-blue/30 transition-all duration-300">
              <div class="w-14 h-14 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-6">
                <mat-icon class="text-3xl">shopping_cart</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">E-Commerce Solutions</h3>
              <p class="text-gray-400 mb-6">Custom online stores optimized for conversion, speed, and seamless checkout experiences.</p>
              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-sm text-gray-300"><mat-icon class="text-neon-blue text-sm">check</mat-icon> Payment Integration</li>
                <li class="flex items-center gap-2 text-sm text-gray-300"><mat-icon class="text-neon-blue text-sm">check</mat-icon> Inventory Management</li>
                <li class="flex items-center gap-2 text-sm text-gray-300"><mat-icon class="text-neon-blue text-sm">check</mat-icon> Custom Dashboards</li>
              </ul>
            </div>
          </div>
          
          <div class="mt-12 text-center">
            <a routerLink="/services" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors font-medium">
              View Pricing & Details
            </a>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section id="testimonials" class="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">Don't just take my word for it. Here's what others have to say.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            @for (testimonial of testimonials; track testimonial.id) {
              <div class="p-8 rounded-2xl bg-[#111] border border-white/5 relative">
                <mat-icon class="absolute top-6 right-6 text-neon-blue/20 text-5xl">format_quote</mat-icon>
                <div class="flex items-center gap-1 mb-6 text-neon-blue">
                  <mat-icon class="text-sm">star</mat-icon>
                  <mat-icon class="text-sm">star</mat-icon>
                  <mat-icon class="text-sm">star</mat-icon>
                  <mat-icon class="text-sm">star</mat-icon>
                  <mat-icon class="text-sm">star</mat-icon>
                </div>
                <p class="text-gray-300 mb-8 relative z-10 italic">"{{ testimonial.quote }}"</p>
                <div class="flex items-center gap-4">
                  <img [src]="testimonial.avatar" [alt]="testimonial.name" class="w-12 h-12 rounded-full object-cover border border-white/10" referrerpolicy="no-referrer">
                  <div>
                    <h4 class="text-white font-bold">{{ testimonial.name }}</h4>
                    <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section id="cta" class="py-24 relative">
        <div class="absolute inset-0 bg-neon-blue/5"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Ready to start your next project?</h2>
          <p class="text-xl text-gray-400 mb-10">Let's build something amazing together. Get in touch for a free consultation and project audit.</p>
          <a routerLink="/contact" class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neon-blue text-black font-semibold text-lg hover:bg-neon-blue/90 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]">
            Let's Talk <mat-icon>chat</mat-icon>
          </a>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent implements OnInit {
  testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'CEO, TechStart',
      avatar: 'https://picsum.photos/seed/priya/100/100',
      quote: 'Delivered on time and exceeded expectations. The custom API architecture solved our scaling issues immediately.'
    },
    {
      id: 2,
      name: 'Rahul Verma',
      role: 'Founder, E-Shop',
      avatar: 'https://picsum.photos/seed/rahul/100/100',
      quote: 'The headless e-commerce solution increased our conversion rate by 30%. Communication was excellent throughout.'
    },
    {
      id: 3,
      name: 'Anita Desai',
      role: 'Product Manager',
      avatar: 'https://picsum.photos/seed/anita/100/100',
      quote: 'A true professional. The code quality is top-notch, and the attention to detail on the frontend is impressive.'
    }
  ];

  private seoService = inject(SeoService);

  constructor() {
    afterNextRender(() => {
      const heroElements = document.querySelectorAll('.hero-animate');
      if (heroElements.length) {
        animate(heroElements, 
          { opacity: [0, 1], y: [30, 0] }, 
          { delay: stagger(0.15), duration: 0.8, ease: "easeOut" }
        );
      }
    });
  }

  ngOnInit() {
    this.seoService.updateSeoTags({
      title: 'Home',
      description: 'Custom Web Apps in 2 Weeks. Professional freelance web developer specializing in Angular, React, and Node.js.',
      keywords: 'freelance web developer, custom web apps, frontend developer, full stack developer, Angular expert',
      url: 'https://your-portfolio-url.com/'
    });
  }
}
