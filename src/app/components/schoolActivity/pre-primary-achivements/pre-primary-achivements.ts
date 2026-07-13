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
  selector: 'app-pre-primary-achivements',
  imports: [Footer],
  templateUrl: './pre-primary-achivements.html',
  styleUrl: './pre-primary-achivements.css'
})
export class PrePrimaryAchievements implements OnInit, OnDestroy {
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
        title: 'Rangotsav Colouring Competition Winners',
        images: [
          {
            url: 'https://i.postimg.cc/tR2dsT1s/Rangotsav-Colouring-Competition-Winners.jpg',
            title: 'Rangotsav Colouring Competition Winners',
            description: 'Winners showcasing creativity and color sense in the Rangotsav colouring contest.'
          }
        ],
        description: 'Winners showcasing creativity and color sense in the Rangotsav colouring contest.',
        color: 'red'
      },
      {
        id: 2,
        title: 'Rangotsav Handwriting Competition – Participation',
        images: [
          {
            url: 'https://i.postimg.cc/KvjPB2LJ/Rangotsav-Handwriting-Competition-Participation-Certificate.jpg',
            title: 'Rangotsav Handwriting Competition – Participation',
            description: 'Young participants proudly receive certificates for handwriting excellence.'
          }
        ],
        description: 'Young participants proudly receive certificates for handwriting excellence.',
        color: 'blue'
      },
      {
        id: 3,
        title: 'Rangotsav Handwriting Competition Winners',
        images: [
          {
            url: 'https://i.postimg.cc/jd1zhF4K/Rangotsav-Handwriting-Competition-winners.jpg',
            title: 'Rangotsav Handwriting Competition Winners',
            description: 'Winners celebrated for neatness and presentation in handwriting competition.'
          }
        ],
        description: 'Winners celebrated for neatness and presentation in handwriting competition.',
        color: 'pink'
      },
      {
        id: 4,
        title: 'Winners / Participants of Colouring Competition',
        images: [
          {
            url: 'https://i.imghippo.com/files/OPD4215bv.jpeg',
            title: 'Winners / Participants of Colouring Competition',
            description: 'Awarded for outstanding creativity and artistic expression in the All India Art Talent Contest by Kala Children Academy.'
          },
          {
            url: 'https://i.imghippo.com/files/JdM8767pBM.jpeg',
            title: 'Winners / Participants of Colouring Competition',
            description: 'Awarded for outstanding creativity and artistic expression in the All India Art Talent Contest by Kala Children Academy.'
          },
          {
            url: 'https://i.imghippo.com/files/Sfc2790pl.jpeg',
            title: 'Winners / Participants of Colouring Competition',
            description: 'Awarded for outstanding creativity and artistic expression in the All India Art Talent Contest by Kala Children Academy.'
          },
          {
            url: 'https://i.imghippo.com/files/pd6621Bw.jpeg',
            title: 'Winners / Participants of Colouring Competition',
            description: 'Awarded for outstanding creativity and artistic expression in the All India Art Talent Contest by Kala Children Academy.'
          },
          {
            url: 'https://i.imghippo.com/files/FcKN2736Iaw.jpeg',
            title: 'Winners / Participants of Colouring Competition',
            description: 'Awarded for outstanding creativity and artistic expression in the All India Art Talent Contest by Kala Children Academy.'
          }
        ],
        description: 'Awarded for outstanding creativity and artistic expression in the All India Art Talent Contest by Kala Children Academy.',
        color: 'red'
      },
      {
        id: 5,
        title: 'Winners / Participants of Handwriting Competition',
        images: [
          {
            url: 'https://i.imghippo.com/files/PTri4214aKs.jpeg',
            title: 'Winners / Participants of Handwriting Competition',
            description: 'Awarded for excellent handwriting skills in the All India Art Talent Contest by Kala Children Academy.'
          },
          {
            url: 'https://i.imghippo.com/files/NoOZ4178QqY.jpeg',
            title: 'Winners / Participants of Handwriting Competition',
            description: 'Awarded for excellent handwriting skills in the All India Art Talent Contest by Kala Children Academy.'
          }
        ],
        description: 'Awarded for excellent handwriting skills in the All India Art Talent Contest by Kala Children Academy.',
        color: 'blue'
      },
      {
        id: 6,
        title: 'Drawing Competition Winners',
        images: [
          {
            url: 'https://i.imghippo.com/files/uPSU9411LZw.jpeg',
            title: 'Drawing Competition Winners',
            description: 'Awarded for outstanding creativity and artistic expression in the All India Drawing Competition by Youva Master Stroke.'
          },
          {
            url: 'https://i.imghippo.com/files/tIxs6861vc.jpeg',
            title: 'Drawing Competition Winners',
            description: 'Awarded for outstanding creativity and artistic expression in the All India Drawing Competition by Youva Master Stroke.'
          },
          {
            url: 'https://i.imghippo.com/files/Ck4089wAs.jpeg',
            title: 'Drawing Competition Winners',
            description: 'Awarded for outstanding creativity and artistic expression in the All India Drawing Competition by Youva Master Stroke.'
          }
        ],
        description: 'Awarded for outstanding creativity and artistic expression in the All India Drawing Competition by Youva Master Stroke.',
        color: 'pink'
      }
    ],
    teachers: [
      {
        id: 1,
        title: 'Mrs. Sarita Jadhav received Extra Mile Award (2024-25) Sponsored by S.P.R.J.Kanyashala Trust',
        images: [
          {
            url: 'https://i.postimg.cc/1X8hJxLh/Mrs-Sarita-Jadhav-received-The-Extra-Mile-Award-2024-2025-sponsored-by-S-P-R-J-Kanyashala.jpg',
            title: 'Mrs. Sarita Jadhav received Extra The Mile Award (2024-25)',
            description: 'Mrs. Sarita Jadhav honored for exceptional dedication and contribution.'
          }
        ],
        description: 'Mrs. Sarita Jadhav honored for exceptional dedication and contribution.',
        color: 'red'
      },
      {
        id: 2,
        title: 'Mrs. Darshana Gaglani received The Extra Mile award (2025-26) Sponsored by S.P.R.J.Kanyashala Trust',
        images: [
          {
            url: 'https://i.postimg.cc/4NvQTXgN/Darshana-Gaglani-received-The-Extra-Mile-award-2025-2026.jpg',
            title: 'Mrs. Darshana Gaglani received The Extra Mile award (2025-26)',
            description: 'Mrs. Darshana Gaglani honored for exceptional dedication and contribution.'
          }
        ],
        description: 'Mrs. Darshana Gaglani honored for exceptional dedication and contribution.',
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
