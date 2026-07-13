import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { Footer } from "../../core/modules/footer/footer";
import { CommonModule, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZone } from '@angular/core';

interface UpcomingEvent {
  id: number;
  name: string;
  date: Date;
  displayDate: string;
  type: 'event' | 'festive';
}

interface CorePoint {
  title: string;
  description: string;
}

interface Stat {
  icon: string;
  end: number;
  suffix: string;
  label: string;
  current: number;
}

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface NewsItem {
  category: string;
  categoryClass: string;
  title: string;
  excerpt: string;
  image?: string;
}

@Component({
  selector: 'app-home',
  imports: [Footer, NgFor, FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video = this.heroVideo?.nativeElement;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          document.addEventListener('click', () => video.play(), { once: true });
        });
      }
    }
  }

  showPopup = signal(true);
  currentTestimonial = signal(0);
  isEventsOpen = signal(false);
  currentFilter = signal<'all' | 'event' | 'festive'>('all');
  currentEmpowermentSlide = signal(0);
  currentNurturingSlide = signal(0);
  slideDirection = signal<'left' | 'right'>('left');

  private empowermentInterval: any;
  private nurturingInterval: any;
  private animationFrameId: number | null = null;

  empowermentImages = [
    'https://i.imghippo.com/files/GMSc5641ZVE.jpeg',
    'https://i.postimg.cc/yYDcZb39/COMPUTER-ACTIVITY.jpg',
    'https://i.imghippo.com/files/zfAV6843vFs.jpeg'
  ];

  empowermentPoints = [
    'Providing quality education to empower girls with knowledge and skills',
    'Building confidence and leadership qualities in young girls',
    'Creating a safe and supportive learning environment',
    'Fostering independence and critical thinking abilities'
  ];

  nurturingImages = [
    'https://i.imghippo.com/files/zqA4309lw.jpeg',
    'https://i.imghippo.com/files/FFqO3249MFs.jpeg',
    'https://i.imghippo.com/files/kmNK6310Oc.jpeg'
  ];

  nurturingPoints = [
    'Innovative teaching methods that spark curiosity and creativity',
    'Personalized attention to each student\'s learning journey',
    'Integration of technology with traditional learning',
    'Project-based learning for practical skill development',
    'Holistic development focusing on academics and character'
  ];

  coreLeftPoints: CorePoint[] = [
    { title: 'Academic Excellence', description: 'Comprehensive curriculum with focus on core subjects and analytical skills' },
    { title: 'Cultural Values', description: 'Preserving traditions while embracing modern education' },
    { title: 'Creative Arts', description: 'Music, dance, and visual arts to nurture creativity' }
  ];

  coreRightPoints: CorePoint[] = [
    { title: 'Physical Fitness', description: 'Sports and yoga programs for overall health and wellness' },
    { title: 'Social Skills', description: 'Communication and teamwork through collaborative activities' },
    { title: 'Life Skills', description: 'Practical skills for independent and confident living' }
  ];

  centerGirlImage = 'https://i.imghippo.com/files/Rpf8490Dc.jpeg';

  closePopup() { this.showPopup.set(false); }
  toggleEvents() { this.isEventsOpen.set(!this.isEventsOpen()); }
  setFilter(filter: 'all' | 'event' | 'festive') { this.currentFilter.set(filter); }

  getCurrentAndUpcomingEvents() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.upcomingEvents.filter(event => event.date >= today);
  }

  filteredEvents() {
    const currentEvents = this.getCurrentAndUpcomingEvents();
    const filter = this.currentFilter();
    if (filter === 'all') return currentEvents;
    return currentEvents.filter(event => event.type === filter);
  }

  getMonthName(date: Date): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[date.getMonth()];
  }

  getDay(date: Date): string { return date.getDate().toString(); }

  nextTestimonial() {
    this.slideDirection.set('left');
    this.currentTestimonial.set((this.currentTestimonial() + 1) % this.testimonials.length);
  }

  prevTestimonial() {
    this.slideDirection.set('right');
    const c = this.currentTestimonial();
    this.currentTestimonial.set(c === 0 ? this.testimonials.length - 1 : c - 1);
  }

  goToTestimonial(index: number) {
    this.slideDirection.set(index > this.currentTestimonial() ? 'left' : 'right');
    this.currentTestimonial.set(index);
  }

  starsArray(n: number): number[] {
    return Array(n).fill(0);
  }

  ngOnInit() {
    this.empowermentInterval = setInterval(() => {
      this.currentEmpowermentSlide.set((this.currentEmpowermentSlide() + 1) % this.empowermentImages.length);
    }, 4000);

    this.nurturingInterval = setInterval(() => {
      this.currentNurturingSlide.set((this.currentNurturingSlide() + 1) % this.nurturingImages.length);
    }, 4500);

    this.initCounterObserver();
    this.initScrollReveal();
  }

  ngOnDestroy() {
    if (this.empowermentInterval) clearInterval(this.empowermentInterval);
    if (this.nurturingInterval) clearInterval(this.nurturingInterval);
    if (this.statsObserver) this.statsObserver.disconnect();
    if (this.scrollRevealObserver) this.scrollRevealObserver.disconnect();
    if (this.animationFrameId !== null) cancelAnimationFrame(this.animationFrameId);
  }

  upcomingEvents: UpcomingEvent[] = [
    { id: 1, name: 'Navratri Celebration', date: new Date(2025, 8, 23), displayDate: '23 September', type: 'festive' },
    { id: 2, name: 'Workshop on Introduction to Drone Technology & Future Opportunities (OOBH Media)', date: new Date(2025, 8, 26), displayDate: '26 September', type: 'event' },
    { id: 3, name: 'Diwali Celebration / Mehendi Comp', date: new Date(2025, 9, 15), displayDate: '15 Oct', type: 'festive' },
    { id: 5, name: 'Intra class Debate competition', date: new Date(2025, 10, 8), displayDate: '8 Nov', type: 'event' },
    { id: 6, name: 'Workshop on Developing Emotional Quotient', date: new Date(2025, 10, 24), displayDate: '24 Nov', type: 'event' },
  ];

  testimonials = [
    {
      text: 'As an assistant professor, I often think back to my days at Smt S. T. Mehta English Medium High School—a place that shaped not just my learning, but my character...',
      name: 'Dr. Priya Kataria (Ex student)',
      role: 'Professor at K.J.Somaiya Institute of Management',
      image: 'assets/community/2.png'
    },
    {
      text: "As a legal counsel, I often look back on my days at Smt S. T. Mehta English Medium High School—a place that nurtured not only my academics but also my values and confidence...",
      name: 'Vishaka Umesh Nagda (Ex student)',
      role: 'House Legal Counsel at Hind Rectifiers Ltd.',
      image: 'assets/community/1.png'
    }
  ];

  stats: Stat[] = [
    { icon: 'fa-trophy', end: 36, suffix: '+', label: 'Years of Excellence', current: 0 },
    { icon: 'fa-graduation-cap', end: 100, suffix: '%', label: 'SSC Pass Rate', current: 0 },
    { icon: 'fa-medal', end: 50, suffix: '+', label: 'Awards Won', current: 0 },
  ];

  constructor(private ngZone: NgZone) { }

  ringTargets: number[] = [66, 100, 55];

  counterAnimated = false;
  private statsObserver!: IntersectionObserver;
  private scrollRevealObserver!: IntersectionObserver;

  initCounterObserver(): void {
    this.statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.counterAnimated) {
            this.counterAnimated = true;
            this.statsObserver.disconnect();
            this.animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById('stats-section');
    if (el) this.statsObserver.observe(el);
  }

  animateCounters(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    this.stats.forEach(stat => { stat.current = 0; });

    const duration = 500;
    const start = performance.now();

    this.ngZone.run(() => {
      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        this.stats.forEach(stat => {
          if (stat.end > 0) {
            stat.current = Math.floor(eased * stat.end);
          }
        });

        if (progress < 1) {
          this.animationFrameId = requestAnimationFrame(animate);
        } else {
          this.animationFrameId = null;
          this.stats.forEach(stat => {
            if (stat.end > 0) stat.current = stat.end;
          });
          setTimeout(() => this.animateRings(), 0);
        }
      };

      this.animationFrameId = requestAnimationFrame(animate);
    });
  }

  animateRings(): void {
    const rings = document.querySelectorAll<SVGCircleElement>('.stat-ring-fill');
    const circumference = 251;

    rings.forEach((ring, i) => {
      const pct = (this.ringTargets[i] ?? 0) / 100;
      const target = circumference - circumference * pct;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ring.style.strokeDashoffset = String(target);
        });
      });
    });
  }

  initScrollReveal(): void {
    this.scrollRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.scrollRevealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    setTimeout(() => {
      document.querySelectorAll('.scroll-reveal')
        .forEach(el => this.scrollRevealObserver.observe(el));
    }, 300);
  }

  features: Feature[] = [
    { icon: 'fa-book-open', title: 'Academic Excellence', desc: '36 consecutive years of 100% SSC board results.' },
    { icon: 'fa-flask', title: 'State-of-the-Art Labs', desc: 'Physics, Chemistry, Biology, and Computer labs with latest equipment.' },
    { icon: 'fa-palette', title: 'Arts & Culture', desc: 'Annual cultural fest, music, dance, drama, and fine arts programs.' },
    { icon: 'fa-futbol', title: 'Sports Infrastructure', desc: 'Basketball courts and indoor games.' },
    { icon: 'fa-desktop', title: 'Digital Learning', desc: 'Smart classrooms and basic coding.' }
  ];

  news: NewsItem[] = [
    { category: 'Art', categoryClass: 'cat-sports', title: 'N Ward Art Competition Winner Inter-School Competition', excerpt: 'Students from our school emerged victorious in the inter-school art competition.', image: 'https://i.postimg.cc/g2QnwwbH/Winner-of-N-Ward-competition.jpg' },
    { category: 'Academics', categoryClass: 'cat-academics', title: 'Rangotsav Competition Winners', excerpt: 'Our students have excelled in the annual Rangotsav competition.', image: 'https://i.postimg.cc/tR2dsT1s/Rangotsav-Colouring-Competition-Winners.jpg' },
    { category: 'Academics', categoryClass: 'cat-events', title: 'Hem Virtue Star Excellence Award', excerpt: 'Students were honored for their brilliance and core values with the prestigious Hem Virtue Star Excellence Award.', image: 'https://i.postimg.cc/FFjjCYjC/Hem-Virtue-Star-Excellence-Award-2025-2026-2.jpg' },
    { category: 'Culture', categoryClass: 'cat-culture', title: 'Republic Day Celebrated', excerpt: 'Patriotic activities and celebrations for Republic Day.', image: 'https://i.imghippo.com/files/RDB9330Okw.jpeg' },
    { category: 'Academics', categoryClass: 'cat-events', title: 'Meditation Session', excerpt: 'Meditation sessions to help students relax and improve focus.', image: 'https://i.imghippo.com/files/FFqO3249MFs.jpeg' },
    { category: 'Art', categoryClass: 'cat-sports', title: 'Art Class', excerpt: 'Art classes where students explore various techniques to express their creativity.', image: 'https://i.imghippo.com/files/XlK9805E.jpeg' },
  ];
}