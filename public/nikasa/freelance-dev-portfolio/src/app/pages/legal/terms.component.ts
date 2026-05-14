import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-terms',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pt-12 pb-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <h1 class="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p class="text-gray-400">Last updated: March 28, 2026</p>
        </div>

        <div class="prose prose-invert prose-neon max-w-none">
          <h2 class="text-2xl font-bold text-white mt-8 mb-4">1. Terms</h2>
          <p>By accessing this Website, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

          <h2 class="text-2xl font-bold text-white mt-8 mb-4">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials on this Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose or for any public display;</li>
            <li>attempt to reverse engineer any software contained on this Website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2 class="text-2xl font-bold text-white mt-8 mb-4">3. Disclaimer</h2>
          <p>All the materials on this Website are provided "as is". We make no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, we do not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

          <h2 class="text-2xl font-bold text-white mt-8 mb-4">4. Limitations</h2>
          <p>We or our suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on this Website, even if we or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage.</p>

          <h2 class="text-2xl font-bold text-white mt-8 mb-4">5. Revisions and Errata</h2>
          <p>The materials appearing on this Website may include technical, typographical, or photographic errors. We will not promise that any of the materials in this Website are accurate, complete, or current. We may change the materials contained on its Website at any time without notice.</p>
        </div>
      </div>
    </div>
  `
})
export class TermsComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit() {
    this.seoService.updateSeoTags({
      title: 'Terms of Service',
      description: 'Terms of Service for my freelance web development services.',
      url: 'https://your-portfolio-url.com/terms'
    });
  }
}
