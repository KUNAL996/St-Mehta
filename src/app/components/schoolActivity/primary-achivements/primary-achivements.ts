import { Component, OnDestroy, OnInit } from '@angular/core';
import { Footer } from '../../../core/modules/footer/footer';

interface ActivityImage {
  url: string;
  title: string;
  description: string;
}

interface Activity {
  id: number;
  title: string;
  images: ActivityImage[];
  description: string;
  color: string;
}

interface SliderState {
  currentIndex: number;
  intervalId?: ReturnType<typeof setInterval>;
}

@Component({
  selector: 'app-primary-achivements',
  imports: [Footer],
  templateUrl: './primary-achivements.html',
  styleUrl: './primary-achivements.css'
})
export class PrimaryAchievements implements OnInit, OnDestroy {
  activeSubSection = 'students';
  private readonly SLIDE_INTERVAL = 30000;
  private sliderStates: { [key: string]: SliderState } = {};

  subSections = [
    { id: 'students', label: 'Student Achievements', active: true },
    { id: 'teachers', label: 'Teaching / Non-Teaching Staff Achievements', active: false }
  ];

  private data = {
    students: [
      {
        id: 1,
        title: 'Winners of folk dance Hojagiri',
        images: [
          {
            url: 'assets/Primary/Achievement/Winners of folk dance Hojagiri.jpg',
            title: 'Winners of folk dance Hojagiri',
            description: 'Got 3rd prize in Folk dance competition( Hojagiri ) Oraganised by Swami Shri Prempuri Ashram Trust, Babulnath'
          }
        ],
        description: 'Got 3rd prize in Folk dance competition( Hojagiri ) Oraganised by Swami Shri Prempuri Ashram Trust, Babulnath',
        color: 'red'
      },
      {
        id: 2,
        title: 'Winners of Patriotic group singing',
        images: [
          {
            url: 'assets/Primary/Achievement/Winners of Patriotic group singing.jpg',
            title: 'Winners of Patriotic group singing',
            description: 'Got 1st consolation prize in Patriotic song competition Oraganised by Swami Shri Prempuri Ashram Trust, Babulnath'
          }
        ],
        description: 'Got 1st consolation prize in Patriotic song competition Oraganised by Swami Shri Prempuri Ashram Trust, Babulnath',
        color: 'blue'
      },
      {
        id: 3,
        title: 'N Ward Art Competition Winner',
        images: [
          {
            url: 'assets/Primary/Achievement/N Ward Art Competition.jpg',
            title: 'N Ward Art Competition Winner',
            description: 'Got 3rd consolation prize in story telling Competition organised by BMC N Ward Competition.'
          },
          {
            url: 'assets/Primary/Achievement/N Ward Art Competition 1.jpg',
            title: 'N Ward Level Competition Champions',
            description: 'Got 3rd consolation prize in story telling Competition organised by BMC N Ward Competition.'
          }
        ],
        description: 'Got 3rd consolation prize in story telling Competition organised by BMC N Ward Competition.',
        color: 'pink'
      },
      {
        id: 4,
        title: 'Kala Academy Winners',
        images: [
          {
            url: 'assets/Primary/Achievement/Kala Academy Winners.jpg',
            title: 'Kala Academy Winners',
            description: `Kala academy winners organised by Kala group Mumbai organised by all India art talent contest by Kala  children' academy.`
          }
        ],
        description: `Kala academy winners organised by Kala group Mumbai organised by all India art talent contest by Kala  children' academy.`,
        color: 'red'
      },
      {
        id: 5,
        title: 'Xpression Creative Contest Winners',
        images: [
          {
            url: 'assets/Primary/Achievement/Xpression Competition Winners.jpg',
            title: 'Xpression Competition Winners',
            description: 'Xpression competition Oraganised by Rotaract club of Deonar.'
          },
          {
            url: 'assets/Primary/Achievement/Xpression Competition Winners 1.jpg',
            title: 'Xpression Competition Winners',
            description: 'Xpression competition Oraganised by Rotaract club of Deonar.'
          },
          {
            url: 'assets/Primary/Achievement/Xpression Competition Winners 2.jpg',
            title: 'Xpression Competition Winners',
            description: 'Xpression competition Oraganised by Rotaract club of Deonar.'
          },
          {
            url: 'assets/Primary/Achievement/Xpression Competition Winners 3.jpg',
            title: 'Xpression Competition Winners',
            description: 'Xpression competition Oraganised by Rotaract club of Deonar.'
          },
          {
            url: 'assets/Primary/Achievement/Xpression Competition Winners 4.jpg',
            title: 'Xpression Competition Winners',
            description: 'Xpression competition Oraganised by Rotaract club of Deonar.'
          }
        ],
        description: 'Xpression competition Oraganised by Rotaract club of Deonar.',
        color: 'blue'
      },
      {
        id: 6,
        title: 'Srujanotsav Winner',
        images: [
          {
            url: 'assets/Primary/Achievement/Srujanotsav Winner.jpeg',
            title: 'Srujanotsav Winner',
            description: 'Srujanotsav The RGEMS FIESTA Oraganised by Rishikul Gurukul English Medium school'
          }
        ],
        description: 'Srujanotsav The RGEMS FIESTA Oraganised by Rishikul Gurukul English Medium school',
        color: 'pink'
      },
      {
        id: 7,
        title: 'J.K Quiz Competition Winners',
        images: [
          {
            url: 'assets/Primary/Achievement/J.K Quiz Competition Winners.jpeg',
            title: 'J.K Quiz Competition Winners',
            description: 'Kashavi Yadav and Kavya Yadav got 2nd Prize in J.K Quiz Competition Srujanotsav The RGEMS FIESTA Oraganised by Rishikul Gurukul English Medium school.'
          }
        ],
        description: 'Kashavi Yadav and Kavya Yadav got 2nd Prize in J.K Quiz Competition Srujanotsav The RGEMS FIESTA Oraganised by Rishikul Gurukul English Medium school.',
        color: 'red'
      },
      {
        id: 8,
        title: 'Drawing Competition',
        images: [
          {
            url: 'assets/Primary/Achievement/Drawing Competition.jpeg',
            title: 'Drawing Competition',
            description: 'Winners of Drawing competition Oraganised by N ward BMC'
          }
        ],
        description: 'Winners of Drawing competition Oraganised by N ward BMC',
        color: 'blue'
      },
      {
        id: 9,
        title: 'Youva Master Stroke',
        images: [
          {
            url: 'assets/Primary/Achievement/Youva Master Stroke.jpg',
            title: 'Youva Master Stroke',
            description: 'Winners of youva master stroke various competitions.'
          }
        ],
        description: 'Winners of youva master stroke various competitions.',
        color: 'pink'
      },
    ],
    teachers: [
      {
        id: 1,
        title: 'Shikshak Mahapour Purskar',
        images: [
          {
            url: 'assets/Primary/Achievement/Shikshak Mahapour Purskar.jpg',
            title: 'Shikshak Mahapour Purskar',
            description: 'Mrs Kirti Pansare (HM) received Adarsh शिक्षक महापौर पुरस्कार by BMC education department.'
          }
        ],
        description: 'Mrs Kirti Pansare (HM) received Adarsh शिक्षक महापौर पुरस्कार by BMC education department.',
        color: 'red'
      },
      {
        id: 2,
        title: 'Rangoli competition in Srujanostsav',
        images: [
          {
            url: 'assets/Primary/Achievement/Rangoli competition in Srujanostsav.jpeg',
            title: 'Rangoli competition in Srujanostsav',
            description: 'Mrs Namrata Sonavane got 1st Prize in Rangoli competition in Srujanotsav The RGEMS FIESTA Oraganised by Rishikul Gurukul English Medium school.'
          }
        ],
        description: 'Mrs Namrata Sonavane got 1st Prize in Rangoli competition in Srujanotsav The RGEMS FIESTA Oraganised by Rishikul Gurukul English Medium school.',
        color: 'blue'
      },
      {
        id: 3,
        title: 'Rotary club of Dombivali creative canvas',
        images: [
          {
            url: 'assets/Primary/Achievement/Rotary club of Dombivali.jpeg',
            title: 'Rotary club of Dombivali creative canvas',
            description: 'Mrs Priya Raut got 1st prize in Drawing competition in Rotary club of Dombivali creative canvas.'
          }
        ],
        description: 'Mrs Priya Raut got 1st prize in Drawing competition in Rotary club of Dombivali creative canvas.',
        color: 'pink'
      },
      {
        id: 4,
        title: 'Extra mile award',
        images: [
          {
            url: 'assets/Primary/Achievement/Mrs Sneha Gupta.jpg',
            title: 'Extra mile award – Mrs Sneha Gupta.',
            description: 'Mrs Sneha Gupta Extra mile award by SPRJ Kanyashala Trust.'
          },
          {
            url: 'assets/Primary/Achievement/Mrs Dipali Vyas.jpg',
            title: 'Extra mile award – Mrs Dipali Vyas.',
            description: 'Mrs Dipali Vyas Extra mile award by SPRJ Kanyashala Trust.'
          }
        ],
        description: 'Mrs Sneha Gupta and Mrs Dipali Vyas Extra mile award.',
        color: 'red'
      },
      {
        id: 5,
        title: 'Lions club of Ghatkopar Senior teachers award',
        images: [
          {
            url: 'assets/Primary/Achievement/Lions club of Ghatkopar.jpeg',
            title: 'Lions club of Ghatkopar Senior teachers award',
            description: 'Mrs Kirti Pansare received Senior Teacher award by lions club of Ghatkopar.'
          }
        ],
        description: 'Mrs Kirti Pansare received Senior Teacher award by lions club of Ghatkopar.',
        color: 'blue'
      },
      {
        id: 6,
        title: 'Emerging Education Hero Award',
        images: [
          {
            url: 'assets/Primary/Achievement/Emerging Education.png',
            title: 'Emerging Education Hero Award',
            description: 'Mrs Kirti Pansare(Head Mistress) received EMERGING EDUCATION HERO AWARD from EGN India (Education Growth Network).'
          }
        ],
        description: 'Mrs Kirti Pansare(Head Mistress) received EMERGING EDUCATION HERO AWARD from EGN India (Education Growth Network).',
        color: 'pink'
      },
    ]
  };

  ngOnInit(): void {
    this.initializeSliders();
  }

  ngOnDestroy(): void {
    Object.values(this.sliderStates).forEach(state => {
      if (state.intervalId) clearInterval(state.intervalId);
    });
  }

  selectSubSection(subId: string): void {
    this.activeSubSection = subId;
    this.subSections.forEach(sub => { sub.active = sub.id === subId; });
    this.initializeSliders();
  }

  getCurrentActivities(): Activity[] {
    return this.data[this.activeSubSection as 'students' | 'teachers'];
  }

  private getKey(activityId: number, index: number): string {
    return `${activityId}_${index}`;
  }

  getCurrentSlideIndex(activityId: number, index: number): number {
    return this.sliderStates[this.getKey(activityId, index)]?.currentIndex || 0;
  }

  getCurrentSlideContent(activityId: number, index: number): ActivityImage | null {
    const activity = this.getCurrentActivities()[index];
    if (!activity) return null;
    const currentIndex = this.getCurrentSlideIndex(activityId, index);
    return activity.images[currentIndex];
  }

  nextSlide(activityId: number, index: number): void {
    const key = this.getKey(activityId, index);
    const activity = this.getCurrentActivities()[index];
    if (!activity || !this.sliderStates[key]) return;
    const currentIndex = this.sliderStates[key].currentIndex;
    if (currentIndex < activity.images.length - 1) {
      this.sliderStates[key].currentIndex = currentIndex + 1;
    }
  }

  previousSlide(activityId: number, index: number): void {
    const key = this.getKey(activityId, index);
    if (!this.sliderStates[key]) return;
    const currentIndex = this.sliderStates[key].currentIndex;
    if (currentIndex > 0) {
      this.sliderStates[key].currentIndex = currentIndex - 1;
    }
  }

  goToSlide(activityId: number, index: number, slideIndex: number): void {
    const key = this.getKey(activityId, index);
    if (this.sliderStates[key]) {
      this.sliderStates[key].currentIndex = slideIndex;
    }
  }

  pauseSlideshow(activityId: number, index: number): void {
    const key = this.getKey(activityId, index);
    const state = this.sliderStates[key];
    if (state?.intervalId) {
      clearInterval(state.intervalId);
      state.intervalId = undefined;
    }
  }

  resumeSlideshow(activityId: number, index: number): void {
    const key = this.getKey(activityId, index);
    const state = this.sliderStates[key];
    if (state && !state.intervalId) {
      state.intervalId = setInterval(() => this.autoAdvanceSlide(activityId, index), this.SLIDE_INTERVAL);
    }
  }

  private autoAdvanceSlide(activityId: number, index: number): void {
    const key = this.getKey(activityId, index);
    const activity = this.getCurrentActivities()[index];
    const state = this.sliderStates[key];
    if (!activity || !state) return;
    state.currentIndex = state.currentIndex < activity.images.length - 1 ? state.currentIndex + 1 : 0;
  }

  private initializeSliders(): void {
    Object.values(this.sliderStates).forEach(state => {
      if (state.intervalId) clearInterval(state.intervalId);
    });
    this.sliderStates = {};
    this.getCurrentActivities().forEach((activity, index) => {
      if (activity.images.length > 1) {
        this.sliderStates[this.getKey(activity.id, index)] = { currentIndex: 0 };
      }
    });
  }
}
