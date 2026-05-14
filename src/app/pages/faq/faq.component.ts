import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-faq',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <div class="pt-12 pb-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked <span class="text-neon-blue">Questions</span></h1>
          <p class="text-xl text-gray-400">Everything you need to know about the process, pricing, and what it's like to work with me.</p>
        </div>

        <div class="space-y-4">
          @for (faq of faqs; track faq.id; let i = $index) {
            <div class="rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-300" [class.border-neon-blue]="openIndex === i">
              <button 
                (click)="toggle(i)"
                class="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                <span class="text-lg font-medium text-white">{{ faq.question }}</span>
                <mat-icon class="text-gray-400 transition-transform duration-300" [class.rotate-180]="openIndex === i">
                  expand_more
                </mat-icon>
              </button>
              
              <div 
                class="px-6 overflow-hidden transition-all duration-300 ease-in-out"
                [style.maxHeight]="openIndex === i ? '500px' : '0'"
                [style.opacity]="openIndex === i ? '1' : '0'"
                [style.paddingBottom]="openIndex === i ? '1.25rem' : '0'">
                <p class="text-gray-400 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </div>
          }
        </div>

        <div class="mt-16 p-8 rounded-3xl bg-gradient-to-r from-neon-blue/10 to-purple-500/10 border border-white/10 text-center">
          <h3 class="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p class="text-gray-400 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neon-blue text-black font-bold hover:bg-neon-blue/90 transition-colors">
            Get in touch
          </a>
        </div>

      </div>
    </div>
  `
})
export class FaqComponent implements OnInit {
  private seoService = inject(SeoService);
  openIndex: number | null = 0;

  ngOnInit() {
    this.seoService.updateSeoTags({
      title: 'FAQ',
      description: 'Frequently asked questions about my freelance web development services, pricing, and process.',
      keywords: 'freelance developer FAQ, web development questions, hiring a developer',
      url: 'https://your-portfolio-url.com/faq'
    });
  }

  faqs = [
    {
      id: 1,
      question: 'How long does a typical project take?',
      answer: 'For a basic website, it usually takes about 1-2 weeks. Custom API development takes 2-3 weeks, and full-stack applications can take 4+ weeks depending on complexity. I provide a detailed timeline during our initial consultation.'
    },
    {
      id: 2,
      question: 'How many revisions do I get?',
      answer: 'You get unlimited revisions during the first week of the design/planning phase. Once development begins, I include 2 rounds of minor revisions. Major scope changes during development may incur additional costs.'
    },
    {
      id: 3,
      question: 'What technologies do you use?',
      answer: 'My core stack includes Node.js, Express, and Django for the backend. For the frontend, I specialize in Angular and React. I use PostgreSQL or MongoDB for databases, and deploy on AWS, Vercel, or Google Cloud.'
    },
    {
      id: 4,
      question: 'Do you provide hosting and maintenance?',
      answer: 'Yes! While I don\'t host sites on my own servers, I will set up your project on reliable cloud providers (like Vercel, AWS, or Heroku) under your own accounts. I also offer monthly maintenance retainers for updates and monitoring.'
    },
    {
      id: 5,
      question: 'What is your payment structure?',
      answer: 'I typically require a 50% deposit upfront to secure your spot in my schedule and begin work. The remaining 50% is due upon project completion and before final handover/deployment.'
    },
    {
      id: 6,
      question: 'Do you work with agencies as a white-label developer?',
      answer: 'Yes, I frequently partner with design and marketing agencies to handle their complex development needs under a white-label agreement. Contact me for agency rates.'
    },
    {
      id: 7,
      question: 'Will my website be mobile-friendly and SEO optimized?',
      answer: 'Absolutely. Every project I build is fully responsive (looks great on all devices) and follows technical SEO best practices (fast load times, semantic HTML, meta tags) out of the box.'
    },
    {
      id: 8,
      question: 'Can you integrate third-party APIs like Stripe or Salesforce?',
      answer: 'Yes, API integration is one of my specialties. I have extensive experience integrating payment gateways (Stripe, PayPal), CRMs (Salesforce, HubSpot), and various other third-party services.'
    }
  ];

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
