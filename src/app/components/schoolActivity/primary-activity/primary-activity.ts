import { Component } from '@angular/core';
import { Footer } from '../../../core/modules/footer/footer';

@Component({
  selector: 'app-primary-activity',
  imports: [Footer],
  templateUrl: './primary-activity.html',
  styleUrl: './primary-activity.css'
})
export class PrimaryActivity {
  activeSubTab = 'curricular';

  private sliderStates: { [key: number]: { currentIndex: number, intervalId?: any } } = {};

  subTabs = [
    { id: 'curricular', label: 'Curricular' },
    { id: 'co-curricular', label: 'Co-Curricular' },
    { id: 'extra-curricular', label: 'Extra-Curricular' }
  ];

  activitiesData = {
    curricular: [
      {
        id: 1,
        title: 'English Vocabulary',
        images: ['assets/Primary/Activity/Curricular/English Vocabulory.jpeg',
          'assets/Primary/Activity/Curricular/English Vocabulory 1.jpeg',
        ],
        description: 'Students engage in English vocabulary activities to enhance their language skills.',
        color: 'red'
      },
      {
        id: 2,
        title: 'Evs classification of Food Pyramid',
        images: ['assets/Primary/Activity/Curricular/Evs classification of food pyramid.jpg'],
        description: 'Students explore the classification of food pyramid to understand the importance of a balanced diet.',
        color: 'blue'
      },
      {
        id: 3,
        title: 'Evs learning phases of Moon',
        images: ['assets/Primary/Activity/Curricular/Evs learning phases of moon.jpg'],
        description: 'Students explore the phases of moon to understand the cycle of the moon.',
        color: 'pink'
      },
      {
        id: 4,
        title: 'Learning Planets Solar system with model',
        images: ['assets/Primary/Activity/Curricular/Learning Planets Solar system with model.jpg'],
        description: 'Students learn about the planets in the solar system and their positions using a model.',
        color: 'red'
      },
      {
        id: 5,
        title: 'Coding',
        images: ['assets/Primary/Activity/Curricular/Coding.jpg'],
        description: 'Kids explore coding through colorful blocks, learning logic and sequencing.',
        color: 'blue'
      },
      {
        id: 6,
        title: 'Computer Activity',
        images: ['assets/Primary/Activity/Curricular/Computer Activity.jpg'],
        description: 'Students design and label computer parts using paper cutouts.',
        color: 'pink'
      },
      {
        id: 7,
        title: 'Maths Activity',
        images: ['assets/Primary/Activity/Curricular/Maths Activity.jpg'],
        description: 'Fun mathematical games and puzzles to make learning numbers enjoyable.',
        color: 'red'
      },
      {
        id: 8,
        title: 'Marathi activity Swar Vyanjan',
        images: ['assets/Primary/Activity/Curricular/Marathi activity swar vyanjan.jpg'],
        description: 'Students learn about the Swar yanjana to understand the importance of vowels and consonants in Marathi.',
        color: 'blue'
      },
      {
        id: 9,
        title: 'Maths Calendar',
        images: ['assets/Primary/Activity/Curricular/Maths Calendar.jpg'],
        description: 'Students learn about the months and days of the week using a calendar.',
        color: 'pink'
      },
      {
        id: 10,
        title: 'Maths Notes and Currency',
        images: ['assets/Primary/Activity/Curricular/Maths Notes and Currency.png'],
        description: 'Students learn about the notes and currency to understand the value of money.',
        color: 'red'
      },
      {
        id: 11,
        title: 'Maths Numbers Introduction',
        images: ['assets/Primary/Activity/Curricular/Maths Numbers Introduction.jpg'],
        description: 'Students learn about the numbers and their introduction to understand the importance of numbers in mathematics.',
        color: 'blue'
      },
      {
        id: 12,
        title: 'Science Lab',
        images: ['assets/Primary/Activity/Curricular/Science Lab.jpg'],
        description: 'Students learn about the science lab and the experiments conducted in it.',
        color: 'pink'
      },
    ],
    'co-curricular': [
      {
        id: 1,
        title: 'Envelope Decoration',
        images: ['assets/Primary/Activity/Co Curricular/Envelope Decoration.jpg'],
        description: 'Students engage in creative envelope decoration activities to enhance artistic skills.',
        color: 'red'
      },
      {
        id: 2,
        title: 'Christmas Celebration',
        images: ['assets/Primary/Activity/Co Curricular/Christmas Celebration.jpg'],
        description: 'Festive Christmas celebration with decorations, carols, and joyful activities.',
        color: 'blue'
      },
      {
        id: 3,
        title: 'Navratri Celebration',
        images: ['assets/Primary/Activity/Co Curricular/Navratri Celebration.jpg'],
        description: 'Exciting Navratri celebration with traditional dances and decorations.',
        color: 'pink'
      },
      {
        id: 4,
        title: 'Rakhi Making',
        images: ['assets/Primary/Activity/Co Curricular/Rakhi Making.jpg'],
        description: 'Creative activity where students design and craft decorative rakhis.',
        color: 'red'
      },
      {
        id: 5,
        title: 'Flute Decoration',
        images: ['assets/Primary/Activity/Co Curricular/Flute Decoration.jpg'],
        description: 'Artistic activity where students design and decorate flutes.',
        color: 'blue'
      },
      {
        id: 6,
        title: 'Matki Decoration',
        images: ['assets/Primary/Activity/Co Curricular/Matki Decoration.jpg'],
        description: 'Creative matki decoration using vibrant colors and patterns.',
        color: 'pink'
      },
      {
        id: 7,
        title: 'Diya Making',
        images: ['assets/Primary/Activity/Co Curricular/Diya Making.jpg'],
        description: 'Creative Diwali activity where students design and decorate traditional diyas.',
        color: 'red'
      },
      {
        id: 8,
        title: 'Fancy Dress Activity',
        images: ['assets/Primary/Activity/Co Curricular/Fancy Dress.jpg'],
        description: 'Students dress up as various characters, enhancing confidence and imagination.',
        color: 'blue'
      },
      {
        id: 9,
        title: 'Taekwando',
        images: ['assets/Primary/Activity/Co Curricular/Taekwando.jpeg'],
        description: 'Martial arts training that builds discipline, focus, and physical strength.',
        color: 'pink'
      },
      {
        id: 10,
        title: 'Chess',
        images: ['assets/Primary/Activity/Co Curricular/Chess.jpeg'],
        description: 'Strategic chess matches develop critical thinking and problem-solving skills.',
        color: 'red'
      },
      {
        id: 11,
        title: 'Gymnastics',
        images: ['assets/Primary/Activity/Co Curricular/Gymnastics.jpeg'],
        description: 'Physical exercises to develop flexibility, coordination, and strength.',
        color: 'blue'
      },
      {
        id: 12,
        title: 'Rope Malakam',
        images: ['assets/Primary/Activity/Co Curricular/Rope Malakam.jpeg'],
        description: 'Rope climbing activities to enhance strength and agility.',
        color: 'pink'
      },
      {
        id: 13,
        title: 'Table Tennis',
        images: ['assets/Primary/Activity/Co Curricular/Table Tennis.jpeg'],
        description: 'Practicing table tennis to improve reflexes and hand-eye coordination.',
        color: 'red'
      },
      {
        id: 14,
        title: 'Book Balancing',
        images: ['assets/Primary/Activity/Co Curricular/Book Balancing.jpeg'],
        description: 'Students learn to balance books on their heads to improve posture and concentration.',
        color: 'blue'
      },
      {
        id: 15,
        title: 'Drawing and Coloring',
        images: ['assets/Primary/Activity/Co Curricular/Drawing and Colouring.jpg'],
        description: 'Students engage in creative drawing and coloring activities to enhance artistic skills.',
        color: 'pink'
      },
      {
        id: 16,
        title: 'Finger Painting', 
        images: ['assets/Primary/Activity/Co Curricular/Finger Painting.jpg'],
        description: `Students engage in creative finger painting activities to focus on the thoughts.`,
        color: 'red'
      },
      {
        id: 17,
        title: 'Meditation',
        images: ['assets/Primary/Activity/Co Curricular/Meditation.jpeg'],
        description: 'Meditation helps strudents to enhance thinking',
        color: 'blue'
      },
      {
        id: 18,
        title: 'Music Class',
        images: ['assets/Primary/Activity/Co Curricular/Music Class.jpg'],
        description: 'Students engage in Music Class activities to enhance artistic skills.',
        color: 'pink'
      },
    ],
    'extra-curricular': [
      {
        id: 1,
        title: 'Cartoon Watching',
        images: ['assets/Primary/Activity/Extra Curricular/Cartoon Watching.jpg'],
        description: 'Students watch cartoons to relax and enjoy storytelling through animation.',
        color: 'blue'
      },
      {
        id: 2,
        title: 'Fun Fair',
        images: ['assets/Primary/Activity/Extra Curricular/Fun Fair.jpg'],
        description: 'A lively fun fair with games and activities that spark joy and laughter among students.',
        color: 'pink'
      },
      {
        id: 3,
        title: 'Kidzania Visit',
        images: ['assets/Primary/Activity/Extra Curricular/Kidzania Visit.jpg'],
        description: 'Educational outing to Kidzania where students engage in role-playing various professions.',
        color: 'red'
      },
      {
        id: 4,
        title: 'Picnic at Paradise Funland',
        images: ['assets/Primary/Activity/Extra Curricular/Picnic at Paradise Funland.jpg'],
        description: 'Fun-filled picnic fostering camaraderie and relaxation among students.',
        color: 'blue'
      },
      {
        id: 5,
        title: 'Lord Ganehsa Darshan',
        images: ['assets/Primary/Activity/Extra Curricular/Lord Ganehsa Darshan.jpeg'],
        description: 'Students visit Tilak Nagar to witness the grand Lord Ganesha Darshan.',
        color: 'pink'
      },
      {
        id: 6,
        title: 'Visit to Muso Exhibition',
        images: ['assets/Primary/Activity/Extra Curricular/Visit to Muso.jpeg',
          'assets/Primary/Activity/Extra Curricular/Visit to Muso 1.jpg'
        ],
        description: 'Educational visit to Muso Exhibition.',
        color: 'red'
      },
    ]
  };

  ngOnInit(): void {
    this.initializeSliders();
  }

  ngOnDestroy(): void {
    Object.values(this.sliderStates).forEach(state => {
      if (state.intervalId) {
        clearInterval(state.intervalId);
      }
    });
  }

  selectSubTab(subTabId: string): void {
    this.activeSubTab = subTabId;
    this.initializeSliders();
  }

  getCurrentActivities() {
    return (this.activitiesData[this.activeSubTab as keyof typeof this.activitiesData] as any) || [];
  }

  initializeSliders(): void {
    Object.values(this.sliderStates).forEach(state => {
      if (state.intervalId) {
        clearInterval(state.intervalId);
      }
    });
    this.sliderStates = {};

    const activities = this.getCurrentActivities();
    activities.forEach((activity: any) => {
      if (activity.images.length > 1) {
        this.sliderStates[activity.id] = {
          currentIndex: 0,
        };
      }
    });
  }

  getCurrentSlideIndex(activityId: number): number {
    return this.sliderStates[activityId]?.currentIndex || 0;
  }

  nextSlide(activityId: number): void {
    const activity = this.findActivity(activityId);
    if (!activity || !this.sliderStates[activityId]) return;

    const currentIndex = this.sliderStates[activityId].currentIndex;
    if (currentIndex < activity.images.length - 1) {
      this.sliderStates[activityId].currentIndex = currentIndex + 1;
    }
  }

  previousSlide(activityId: number): void {
    if (!this.sliderStates[activityId]) return;

    const currentIndex = this.sliderStates[activityId].currentIndex;
    if (currentIndex > 0) {
      this.sliderStates[activityId].currentIndex = currentIndex - 1;
    }
  }

  goToSlide(activityId: number, index: number): void {
    if (this.sliderStates[activityId]) {
      this.sliderStates[activityId].currentIndex = index;
    }
  }

  private findActivity(activityId: number) {
    return this.getCurrentActivities().find((activity: any) => activity.id === activityId);
  }
}
