import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-privacy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pt-12 pb-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <h1 class="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p class="text-gray-400">Last updated: March 28, 2026</p>
        </div>

        <div class="prose prose-invert prose-neon max-w-none">
          <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from this website.</p>

          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Personal Information We Collect</h2>
          <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
          <p>Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.</p>

          <h2 class="text-2xl font-bold text-white mt-8 mb-4">How Do We Use Your Personal Information?</h2>
          <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).</p>
          <p>Additionally, we use this Order Information to:</p>
          <ul>
            <li>Communicate with you;</li>
            <li>Screen our orders for potential risk or fraud; and</li>
            <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
          </ul>

          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Sharing Your Personal Information</h2>
          <p>We share your Personal Information with third parties to help us use your Personal Information, as described above. We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>

          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
          <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at hello&#64;nikasa.com.</p>
        </div>
      </div>
    </div>
  `
})
export class PrivacyComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit() {
    this.seoService.updateSeoTags({
      title: 'Privacy Policy',
      description: 'Privacy Policy for my freelance web development services.',
      url: 'https://your-portfolio-url.com/privacy'
    });
  }
}
