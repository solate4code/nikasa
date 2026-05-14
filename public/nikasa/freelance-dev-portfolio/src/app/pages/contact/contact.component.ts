import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, ReactiveFormsModule],
  template: `
    <div class="pt-12 pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Let's <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-purple-500">Connect</span></h1>
          <p class="text-xl text-gray-400">Ready to start your next project? Fill out the form below or schedule a quick discovery call.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Contact Info & Map (Left Column) -->
          <div class="lg:col-span-5 space-y-8">
            
            <!-- Contact Details Card -->
            <div class="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5">
              <h3 class="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue shrink-0">
                    <mat-icon>email</mat-icon>
                  </div>
                  <div>
                    <p class="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:samantasonu15@gmail.com" class="text-white hover:text-neon-blue transition-colors font-medium">samantasonu15&#64;gmail.com</a>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue shrink-0">
                    <mat-icon>location_on</mat-icon>
                  </div>
                  <div>
                    <p class="text-sm text-gray-400 mb-1">Location</p>
                    <p class="text-white font-medium">Midnapore, India</p>
                    <p class="text-sm text-gray-500 mt-1">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>

              <hr class="border-white/10 my-8">
              
              <h4 class="text-white font-semibold mb-4">Follow Me</h4>
              <div class="flex gap-4">
                <a href="#" class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:bg-white/10 transition-colors border border-white/5">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" /></svg>
                </a>
                <a href="#" class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:bg-white/10 transition-colors border border-white/5">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                </a>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="rounded-3xl overflow-hidden border border-white/5 h-64 bg-[#111] relative group">
              <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                <div class="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white font-medium flex items-center gap-2">
                  <mat-icon class="text-neon-blue text-sm">my_location</mat-icon> Midnapore, West Bengal
                </div>
              </div>
              <img src="https://picsum.photos/seed/map/800/400?grayscale" alt="Map of Midnapore" class="w-full h-full object-cover opacity-50" referrerpolicy="no-referrer">
            </div>

          </div>

          <!-- Contact Form (Right Column) -->
          <div class="lg:col-span-7">
            <div class="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/5 shadow-2xl sticky top-28">
              <h3 class="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p class="text-gray-400 mb-8">I'll get back to you within 24 hours.</p>

              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Name -->
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      formControlName="name"
                      class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors"
                      [class.!border-red-500]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                      placeholder="John Doe">
                    @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                      <p class="text-red-500 text-sm mt-2 flex items-center gap-1"><mat-icon class="text-[16px] w-4 h-4">error_outline</mat-icon> Name is required</p>
                    }
                  </div>
                  
                  <!-- Email -->
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      formControlName="email"
                      class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors"
                      [class.!border-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                      placeholder="john@example.com">
                    @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                      <div class="text-red-500 text-sm mt-2 flex items-center gap-1">
                        <mat-icon class="text-[16px] w-4 h-4">error_outline</mat-icon> 
                        @if (contactForm.get('email')?.errors?.['required']) {
                          <span>Email is required</span>
                        }
                        @if (contactForm.get('email')?.errors?.['email']) {
                          <span>Please enter a valid email address</span>
                        }
                      </div>
                    }
                  </div>
                </div>

                <!-- Budget -->
                <div>
                  <label for="budget" class="block text-sm font-medium text-gray-300 mb-2">Project Budget</label>
                  <select 
                    id="budget" 
                    formControlName="budget"
                    class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors appearance-none">
                    <option value="" disabled selected>Select a range</option>
                    <option value="1k-3k">$1,000 - $3,000</option>
                    <option value="3k-5k">$3,000 - $5,000</option>
                    <option value="5k+">$5,000+</option>
                  </select>
                </div>

                <!-- Message -->
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                  <textarea 
                    id="message" 
                    formControlName="message"
                    rows="5"
                    class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-colors resize-none"
                    [class.!border-red-500]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                    placeholder="Tell me about your project goals, timeline, and requirements..."></textarea>
                  @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
                    <p class="text-red-500 text-sm mt-2 flex items-center gap-1"><mat-icon class="text-[16px] w-4 h-4">error_outline</mat-icon> Message is required</p>
                  }
                </div>

                <!-- File Upload -->
                <div>
                  <span class="block text-sm font-medium text-gray-300 mb-2">Attachments (Optional)</span>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-white/10 border-dashed rounded-xl hover:border-neon-blue/50 transition-colors cursor-pointer bg-black/20">
                    <div class="space-y-1 text-center">
                      <mat-icon class="mx-auto h-12 w-12 text-gray-400">cloud_upload</mat-icon>
                      <div class="flex text-sm text-gray-400 justify-center">
                        <label for="file-upload" class="relative cursor-pointer rounded-md font-medium text-neon-blue hover:text-neon-blue/80 focus-within:outline-none">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" class="sr-only">
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit" 
                  [disabled]="!contactForm.valid || isSubmitting()"
                  class="w-full py-4 rounded-xl bg-neon-blue text-black font-bold text-lg hover:bg-neon-blue/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(0,212,255,0.2)] flex items-center justify-center gap-2">
                  @if (isSubmitting()) {
                    Sending... <mat-icon class="animate-spin">sync</mat-icon>
                  } @else {
                    Send Message <mat-icon>send</mat-icon>
                  }
                </button>
              </form>
            </div>
          </div>

        </div>

        <!-- Calendly Section -->
        <div class="mt-24 pt-16 border-t border-white/5 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Prefer to chat first?</h2>
          <p class="text-gray-400 mb-8 max-w-2xl mx-auto">Schedule a free 30-minute discovery call to discuss your project in detail. No commitment required.</p>
          
          <div class="inline-block p-1 rounded-2xl bg-gradient-to-r from-neon-blue to-purple-500">
            <div class="bg-[#0a0a0a] rounded-xl p-8 sm:p-12 flex flex-col items-center">
              <div class="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white mb-6">
                <mat-icon class="text-3xl">calendar_month</mat-icon>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Book a Discovery Call</h3>
              <p class="text-gray-400 mb-8">Find a time that works for you on my calendar.</p>
              <a href="#" class="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                Open Calendar
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private seoService = inject(SeoService);
  contactForm: FormGroup;
  isSubmitting = signal(false);

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      budget: [''],
      message: ['I would like to request a free audit of my current web app/website. Please let me know the next steps!', Validators.required]
    });
  }

  ngOnInit() {
    this.seoService.updateSeoTags({
      title: 'Contact',
      description: 'Get in touch to discuss your next web development project. Available for freelance opportunities.',
      keywords: 'contact web developer, hire freelance developer, web development inquiry',
      url: 'https://your-portfolio-url.com/contact'
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      console.log('Form submitted:', this.contactForm.value);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      alert('Message sent successfully! (Mock)');
      this.contactForm.reset();
      this.isSubmitting.set(false);
    }
  }
}
