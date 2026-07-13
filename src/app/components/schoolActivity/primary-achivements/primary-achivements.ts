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
        id: 8,
        title: 'Got 3rd prize in Folk dance competition( Hojagiri ) Oraganised by Swami Shri Prempuri Ashram Trust, Babulnath.',
        images: [
          {
            url: 'https://i.postimg.cc/6QrTfZtN/winners-of-folk-dance-Hojagiri.jpg',
            title: 'Got 3rd prize in Folk dance competition( Hojagiri ) Oraganised by Swami Shri Prempuri Ashram Trust, Babulnath.',
            description: 'Celebrating the champions of the mesmerizing Hojagiri folk dance.'
          }
        ],
        description: 'Celebrating the champions of the mesmerizing Hojagiri folk dance.',
        color: 'red'
      },
      {
        id: 10,
        title: 'Got 1st consolation prize in Patriotic song competition Oraganised by Swami Shri Prempuri Ashram Trust, Babulnath',
        images: [
          {
            url: 'https://i.postimg.cc/mDTkXrg1/winners-of-patriotic-group-singing.jpg',
            title: 'Got 1st consolation prize in Patriotic song competition Oraganised by Swami Shri Prempuri Ashram Trust, Babulnath',
            description: 'Celebrating the voices that filled the air with patriotic harmony.'
          }
        ],
        description: 'Celebrating the voices that filled the air with patriotic harmony.',
        color: 'blue'
      },
      {
        id: 5,
        title: 'Fancy Dress Winner – Health Awareness Theme',
        images: [
          {
            url: 'https://i.postimg.cc/0QFw78NM/Healthy-unhealthy-fancy-dress-winners.jpg',
            title: 'Fancy Dress Winner – Health Awareness Theme',
            description: 'Students creatively showcased healthy vs unhealthy choices through themed costumes.'
          }
        ],
        description: 'Students creatively showcased healthy vs unhealthy choices through themed costumes.',
        color: 'pink'
      },
      {
        id: 6,
        title: 'Got 3rd consolation prize in story telling Competition organised by BMC N Ward Competition',
        images: [
          {
            url: 'https://i.postimg.cc/g2QnwwbH/Winner-of-N-Ward-competition.jpg',
            title: 'Got 3rd consolation prize in story telling Competition organised by BMC N Ward Competition',
            description: 'Awarded for outstanding creativity and artistic expression in the N Ward contest.'
          },
          {
            url: 'https://i.postimg.cc/zfh3TJJZ/WINNERS-OF-N-WARD-LEVEL.jpg',
            title: 'Got 3rd consolation prize in story telling Competition organised by BMC N Ward Competition',
            description: 'Students secured top ranks at the N Ward level through dedication and talent.'
          }
        ],
        description: 'Awarded for outstanding creativity and artistic expression in the N Ward contest.',
        color: 'red'
      },
      {
        id: 7,
        title: `Kala academy winners organised by Kala group Mumbai organised by all India art talent contest by Kala Children' Academy`,
        images: [
          {
            url: 'https://i.postimg.cc/JncndPDp/WINNERS-OF-KALA-ACADEMY.jpg',
            title: `Kala academy winners organised by Kala group Mumbai organised by all India art talent contest by Kala Children' Academy`,
            description: 'Winners of the Kala Stambha Interclass Competition for showcasing talent in drawing, singing, handwriting, and essay writing.'
          }
        ],
        description: 'Winners of the Kala Stambha Interclass Competition for showcasing talent in drawing, singing, handwriting, and essay writing.',
        color: 'blue'
      },
      {
        id: 9,
        title: 'Xpression competition Oraganised by Rotaract Club of Deonar',
        images: [
          {
            url: 'https://i.postimg.cc/zXfB0wJk/WINNERS-OF-XPRESSION-COMPETITION.jpg',
            title: 'Xpression competition Oraganised by Rotaract Club of Deonar',
            description: 'Solo or group of talented students showcasing their creative expressions and artistic abilities.'
          },
          {
            url: 'https://i.postimg.cc/cCxHqwf0/WINNERS-OF-XPRESSION-COMPETITION-3.jpg',
            title: 'Xpression competition Oraganised by Rotaract Club of Deonar',
            description: 'Solo or group of talented students showcasing their creative expressions and artistic abilities.'
          },
          {
            url: 'https://i.postimg.cc/RVb083hx/WINNERS-OF-XPRESSION.jpg',
            title: 'Xpression competition Oraganised by Rotaract Club of Deonar',
            description: 'Solo or group of talented students showcasing their creative expressions and artistic abilities.'
          },
          {
            url: 'https://i.postimg.cc/3r1NXfHR/WINNER-OF-XPRESSION-COMPETITION-2.jpg',
            title: 'Xpression competition Oraganised by Rotaract Club of Deonar',
            description: 'Solo or group of talented students showcasing their creative expressions and artistic abilities.'
          },
          {
            url: 'https://i.postimg.cc/fy8bMyvX/WINNER-OF-XPRESSION-COMPETITION.jpg',
            title: 'Xpression competition Oraganised by Rotaract Club of Deonar',
            description: 'Solo or group of talented students showcasing their creative expressions and artistic abilities.'
          }
        ],
        description: 'Solo or group of talented students showcasing their creative expressions and artistic abilities.',
        color: 'pink'
      },
      {
        id: 11,
        title: 'Srujanotsav The RGEMS FIESTA Oraganised by Rushikul Gurukul English Medium School.',
        images: [
          {
            url: 'https://i.imghippo.com/files/LDu8132wcM.jpeg',
            title: 'Srujanotsav The RGEMS FIESTA Oraganised by Rushikul Gurukul English Medium School.',
            description: 'Winner of Srujanotsav competition Ms. Aramya Auti got 2nd Prize.'
          }
        ],
        description: 'Winner of Srujanotsav competition Ms. Aramya Auti got 2nd Prize.',
        color: 'red'
      },
      {
        id: 12,
        title: 'J.K Quiz Competition Winners',
        images: [
          {
            url: 'https://i.imghippo.com/files/Tvy5868h.jpeg',
            title: 'J.K Quiz Competition Winners',
            description: 'Kashavi Yadav and Kavya Yadav got 2nd Prize in J.K Quiz Competition.'
          }
        ],
        description: 'Kashavi Yadav and Kavya Yadav got 2nd Prize in J.K Quiz Competition.',
        color: 'blue'
      }
    ],
    teachers: [
      {
        id: 1,
        title: 'Shikshak Mahapour Purskar',
        images: [
          {
            url: 'https://i.imghippo.com/files/tb6662cY.jpg',
            title: 'Shikshak Mahapour Purskar',
            description: 'Mrs Kirti Pansare received Adarsh shikshak Mahapour Purskar.'
          }
        ],
        description: 'Mrs Kirti Pansare received Adarsh shikshak Mahapour Purskar.',
        color: 'red'
      },
      {
        id: 2,
        title: 'Rangoli competition in Srujanostsav',
        images: [
          {
            url: 'https://i.imghippo.com/files/TG7534b.jpeg',
            title: 'Rangoli competition in Srujanostsav',
            description: 'Mrs Namrata Sonavane got 1st Prize in Rangoli competition in Srujanostsav.'
          }
        ],
        description: 'Mrs Namrata Sonavane got 1st Prize in Rangoli competition in Srujanostsav.',
        color: 'blue'
      },
      {
        id: 3,
        title: 'Rotary club of Dombivali creative canvas',
        images: [
          {
            url: 'https://i.imghippo.com/files/GRf5569TfA.jpeg',
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
            url: 'https://i.imghippo.com/files/Qouu1532VM.JPG',
            title: 'Extra mile award – Mrs Sneha Gupta',
            description: 'Mrs Sneha Gupta Extra mile award.'
          },
          {
            url: 'https://i.imghippo.com/files/BGT6675JsQ.JPG',
            title: 'Extra mile award – Mrs Dipali Vyas',
            description: 'Mrs Dipali Vyas Extra mile award.'
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
            url: 'https://i.imghippo.com/files/CmC8739PEY.jpeg',
            title: 'Lions club of Ghatkopar Senior teachers award',
            description: 'Mrs Kirti Pansare Lions club of Ghatkopar Senior teachers award.'
          }
        ],
        description: 'Mrs Kirti Pansare Lions club of Ghatkopar Senior teachers award.',
        color: 'blue'
      }
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
