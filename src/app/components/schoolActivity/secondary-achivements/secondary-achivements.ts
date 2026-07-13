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
  selector: 'app-secondary-achivements',
  imports: [Footer],
  templateUrl: './secondary-achivements.html',
  styleUrl: './secondary-achivements.css'
})
export class SecondaryAchievements implements OnInit, OnDestroy {
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
        title: 'Winners – Rangotsav Creative Art Competition 2025',
        images: [
          {
            url: 'https://i.postimg.cc/9X45GVGD/Winners-of-Rangotsav-Creative-Art-Competition-2025.jpg',
            title: 'Winners of Rangotsav Creative Art Competition 2025',
            description: 'Students showcased exceptional creativity and artistic skills in the Rangotsav Creative Art Competition 2025.'
          }
        ],
        description: 'Students showcased exceptional creativity and artistic skills in the Rangotsav Creative Art Competition 2025.',
        color: 'red'
      },
      {
        id: 2,
        title: 'Hem Virtue Star Excellence Award (2025–2026)',
        images: [
          {
            url: 'https://i.postimg.cc/FFjjCYjC/Hem-Virtue-Star-Excellence-Award-2025-2026-2.jpg',
            title: 'Hem Virtue Star Excellence Award (2025–2026)',
            description: 'Students were honored for their brilliance and core values with the prestigious Hem Virtue Star Excellence Award 2025–2026.'
          }
        ],
        description: 'Students were honored for their brilliance and core values with the prestigious Hem Virtue Star Excellence Award 2025–2026.',
        color: 'blue'
      },
      {
        id: 3,
        title: 'Interact Members Awarded 2024–2025',
        images: [
          {
            url: 'https://i.postimg.cc/DwTJd8z4/2024-2025-interact-members-awarded-with-certificates.jpg',
            title: 'Interact Members Awarded 2024–2025',
            description: 'Interact members were awarded for their outstanding contributions and service during the 2024–2025 academic year.'
          }
        ],
        description: 'Interact members were awarded for their outstanding contributions and service during the 2024–2025 academic year.',
        color: 'pink'
      },
      {
        id: 4,
        title: 'Hem Value Star Excellence Award – School Honored',
        images: [
          {
            url: 'https://i.postimg.cc/JzB0RHdC/Our-school-received-Hem-Value-Star-Excellence-award-Copy.jpg',
            title: 'Hem Value Star Excellence Award – School Honored',
            description: 'Our school received the Hem Value Star Excellence Award for promoting core values and excellence in education.'
          }
        ],
        description: 'Our school received the Hem Value Star Excellence Award for promoting core values and excellence in education.',
        color: 'red'
      },
      {
        id: 5,
        title: 'N Ward Competition Winners',
        images: [
          {
            url: 'https://i.imghippo.com/files/ofr8168PZQ.jpeg',
            title: 'N Ward Competition Winners',
            description: 'Students secured top ranks at the N Ward level through dedication and talent.'
          }
        ],
        description: 'Students secured top ranks at the N Ward level through dedication and talent.',
        color: 'blue'
      },
      {
        id: 6,
        title: 'Essay Competition Winners',
        images: [
          {
            url: 'https://i.imghippo.com/files/KzF1561CY.jpeg',
            title: 'Essay Competition Winners',
            description: 'Tata Building India - Essay Competition Winners.'
          }
        ],
        description: 'Tata Building India - Essay Competition Winners.',
        color: 'pink'
      },
      {
        id: 7,
        title: 'Winners of Kurash',
        images: [
          {
            url: 'https://i.imghippo.com/files/bHTL5182ZTk.jpeg',
            title: 'Winners of Kurash',
            description: 'Winners of Kurash competition showcasing their skills.'
          }
        ],
        description: 'Winners of Kurash competition showcasing their skills.',
        color: 'red'
      },
      {
        id: 8,
        title: 'IIT Powai Interschool Skit Competition',
        images: [
          {
            url: 'https://i.imghippo.com/files/eld5393DME.jpeg',
            title: 'IIT Powai Interschool Skit Competition',
            description: 'Won 3rd Prize for Interschool skit competition organised by IIT Powai School.'
          }
        ],
        description: 'Won 3rd Prize for Interschool skit competition organised by IIT Powai School.',
        color: 'red'
      }
    ],
    teachers: [
      {
        id: 14,
        title: 'Mrs. Sujata Suryavanshi - Shivaji Maharaj Adarsh Award',
        images: [
          {
            url: 'https://i.postimg.cc/xdvdzD2s/Tr-Sujata-Suryavanshi-received-Chatrapati-Shivaji-Maharaj-Adarsh-Teacher-s-award-by-Global-Gold-Tal.jpg',
            title: 'Mrs. Sujata Suryavanshi - Shivaji Maharaj Adarsh Award',
            description: 'Honored with the prestigious Chatrapati Shivaji Maharaj Adarsh Teacher Award by Global Gold Talent for exemplary teaching practices.'
          }
        ],
        description: 'Honored with the prestigious Chatrapati Shivaji Maharaj Adarsh Teacher Award by Global Gold Talent for exemplary teaching practices.',
        color: 'red'
      },
      {
        id: 15,
        title: 'Mrs. Manjiri Arya - Population Education Excellence',
        images: [
          {
            url: 'https://i.postimg.cc/3R9JtXWm/Tr-Manjiri-Arya-won-1st-Prize-in-Population-Education-Project.jpg',
            title: 'Mrs. Manjiri Arya - Population Education Excellence',
            description: 'Awarded 1st Prize in Population Education Project for innovative teaching methods and community awareness initiatives.'
          }
        ],
        description: 'Awarded 1st Prize in Population Education Project for innovative teaching methods and community awareness initiatives.',
        color: 'blue'
      },
      {
        id: 16,
        title: 'Mrs. Meena Khamkar - Savitri Fatima Award',
        images: [
          {
            url: 'https://i.postimg.cc/pdbTrVgh/Savitri-Fatima-Award-Tr-Meena-Khamkar.jpg',
            title: 'Mrs. Meena Khamkar - Savitri Fatima Award',
            description: 'Recipient of the Savitri Fatima Award for outstanding dedication to student mentorship and educational excellence.'
          }
        ],
        description: 'Recipient of the Savitri Fatima Award for outstanding dedication to student mentorship and educational excellence.',
        color: 'pink'
      },
      {
        id: 17,
        title: 'Mrs. Priti Narvekar - Savitri Fatima Award',
        images: [
          {
            url: 'https://i.postimg.cc/d1JVRHQJ/Savitri-Fatima-Award-Tr-Priti-Narvekar.jpg',
            title: 'Mrs. Priti Narvekar - Savitri Fatima Award',
            description: 'Honored with the Savitri Fatima Award for exceptional service, innovation, and lasting impact in education.'
          }
        ],
        description: 'Honored with the Savitri Fatima Award for exceptional service, innovation, and lasting impact in education.',
        color: 'red'
      },
      {
        id: 18,
        title: 'Mrs. Sanjeevani Gaonkar received The Extra Mile award 2025-26 Sponsored by S.P.R.J.Kanyashala Trust',
        images: [
          {
            url: 'https://i.postimg.cc/7ZVZCkVx/Sanjeevani-Gaonkar-received-The-Extra-Mile-award-2025-2026.jpg',
            title: 'Mrs. Sanjeevani Gaonkar - The Extra Mile award 2025-26',
            description: 'Mrs. Sanjeevani Gaonkar for exceptional dedication and contribution.'
          }
        ],
        description: 'Mrs. Sanjeevani Gaonkar for exceptional dedication and contribution.',
        color: 'blue'
      },
      {
        id: 19,
        title: "Shri Rakesh Vaidya Receives 'The Extra Mile Award' in 2024-25 Sponsored by S.P.R.J.Kanyashala Trust",
        images: [
          {
            url: 'https://i.postimg.cc/SRvQhm6K/Shri-Rakesh-Vaidya-received-Certificate-of-Excellence-The-Extra-Mile-Award-sponsored-by-SPRJ-Kan.jpg',
            title: "Shri Rakesh Vaidya Receives 'The Extra Mile Award'",
            description: 'Award Sponsored by SPRJ Kanyashala for Honoring exceptional dedication and service in education.'
          }
        ],
        description: 'Award Sponsored by SPRJ Kanyashala for Honoring exceptional dedication and service in education.',
        color: 'pink'
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
