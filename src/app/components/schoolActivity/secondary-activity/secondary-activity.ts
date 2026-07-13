import { Component } from '@angular/core';
import { Footer } from '../../../core/modules/footer/footer';

@Component({
  selector: 'app-secondary-activity',
  imports: [Footer],
  templateUrl: './secondary-activity.html',
  styleUrl: './secondary-activity.css'
})
export class SecondaryActivity {
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
        title: 'Art Class',
        images: ['assets/Secondary/Activity/Curricular/Art Class.jpeg'],
        description: 'Art classes where students explore various techniques to express their creativity.',
        color: 'red'
      },
      {
        id: 2,
        title: 'Project & Activity',
        images: ['assets/Secondary/Activity/Curricular/Project and Activity.jpg',
          'assets/Secondary/Activity/Curricular/Project and Activity 1.jpeg'],
        description: 'Students showcasing their handmade math models, demonstrating creativity and understanding of concepts.',
        color: 'pink'
      },
      {
        id: 3,
        title: 'Language Club',
        images: ['assets/Secondary/Activity/Curricular/Language Club.jpeg',
                  'assets/Secondary/Activity/Curricular/Language Club 1.jpeg'],
        description: 'A classroom activity where students participate in engaging English word games led by a teacher.',
        color: 'blue'
      },
      {
        id: 4,
        title: 'Computer Lab',
        images: ['assets/Secondary/Activity/Curricular/Computer Lab.jpeg'],
        description: 'Students engage in computer-based learning like Scratch, MS Office(Word, Excel and PowerPoint), HTML, CSS, Python, Photoshop and Artificial Intelligence',
        color: 'pink'
      },
      {
        id: 5,
        title: 'Science Lab',
        images: ['assets/Secondary/Activity/Curricular/Science Lab.jpeg'],
        description: 'Students conduct experiments and explore scientific concepts in a hands-on learning environment.',
        color: 'pink'
      },
      {
        id: 6,
        title: 'Library',
        images: ['assets/Secondary/Activity/Curricular/Library.jpeg'],
        description: 'A quiet space for students to read, study, and research.',
        color: 'blue'
      },
    ],
    'co-curricular': [
      {
        id: 1,
        title: "Speech & Drama",
        images: ['assets/Secondary/Activity/Co Curricular/Speech and Drama.jpg',
          'assets/Secondary/Activity/Co Curricular/Speech and Drama 1.jpg',
          'assets/Secondary/Activity/Co Curricular/Speech and Drama 2.jpg'
        ],
        description: 'Speech and Drama performances that enhance communication skills and confidence.',
        color: 'pink'
      },
      {
        id: 2,
        title: 'Debate Competition',
        images: ['assets/Secondary/Activity/Co Curricular/Debate Competition.jpeg'],
        description: 'Debate competitions that encourage critical thinking and public speaking skills.',
        color: 'blue'
      },
      {
        id: 3,
        title: "Elocution",
        images: ['assets/Secondary/Activity/Co Curricular/Elocution.jpeg'],
        description: 'Elocution contests that help students improve their articulation and presentation skills.',
        color: 'pink'
      },
      {
        id: 4,
        title: 'Singing Competition',
        images: ['assets/Secondary/Activity/Co Curricular/Singing Competition.jpeg'],
        description: 'Singing competitions that foster musical talent and confidence.',
        color: 'red'
      },
      {
        id: 5,
        title: "Awareness Programme on Children's Safety",
        images: ['assets/Secondary/Activity/Co Curricular/Awarness Workshop.jpeg'],
        description: 'Important workshop educating students about personal safety and boundaries.',
        color: 'blue'
      },
      {
        id: 6,
        title: 'Eco club workshop on Eco friendly Ganapathy',
        images: ['assets/Secondary/Activity/Co Curricular/Eco Club.jpg'],
        description: 'Workshop promoting environmental awareness and sustainability.',
        color: 'red'
      },
      {
        id: 7,
        title: 'Good Touch and Bad Touch',
        images: ['assets/Secondary/Activity/Co Curricular/Good Touch Bad Touch.jpeg'],
        description: 'Important education for students about personal safety and boundaries.',
        color: 'red'
      },
      {
        id: 8,
        title: 'N Ward Science Exhibition',
        images: ['assets/Secondary/Activity/Co Curricular/Science Exhibition.jpeg',
          'assets/Secondary/Activity/Co Curricular/Science Exhibition 1.jpeg'
        ],
        description: "N Ward Science Exhibition  - Sr. and Jr. Group  project on Waste Management",
        color: 'red'
      },
      {
        id: 9,
        title: 'Piano Keyboard',
        images: ['assets/Secondary/Activity/Co Curricular/Piano Keyboard.jpg'],
        description: 'Piano keyboard classes to develop musical skills and appreciation.',
        color: 'blue'
      },
      {
        id: 10,
        title: 'Physical Training',
        images: ['assets/Secondary/Activity/Co Curricular/Physical Training.jpeg'],
        description: 'Physical training sessions to improve health and fitness.',
        color: 'pink'
      },
      {
        id: 11,
        title: 'Gymnastics',
        images: ['assets/Secondary/Activity/Co Curricular/Gymnastics.jpeg'],
        description: 'Gymnastics routines to enhance flexibility, strength, and coordination.',
        color: 'red'
      },
      {
        id: 12,
        title: 'Rope Malakam',
        images: ['assets/Secondary/Activity/Co Curricular/Rope Malakam.jpeg'],
        description: 'Rope climbing activities to enhance strength and agility.',
        color: 'blue'
      },
      {
        id: 13,
        title: 'Table Tennis',
        images: ['assets/Secondary/Activity/Co Curricular/Table Tennis.jpeg'],
        description: 'Daily physical workouts and drills to improve health and discipline.',
        color: 'pink'
      },
      {
        id: 14,
        title: 'Taekwondo',
        images: ['assets/Secondary/Activity/Co Curricular/Taekwondo.jpg'],
        description: 'Martial arts training that builds discipline, focus, and physical strength.',
        color: 'red'
      },
      {
        id: 15,
        title: 'Chess',
        images: ['assets/Secondary/Activity/Co Curricular/Chess.jpg'],
        description: 'Strategic chess matches develop critical thinking and problem-solving skills.',
        color: 'blue'
      },
      {
        id: 16,
        title: 'Basketball',
        images: ['assets/Secondary/Activity/Co Curricular/Basketball.jpg'],
        description: 'Competitive basketball training sessions that enhance teamwork and physical fitness.',
        color: 'pink'
      },
      {
        id: 17,
        title: 'Tabla',
        images: ['assets/Secondary/Activity/Co Curricular/Tabla.jpg'],
        description: 'Tabla classes to nurture musical talent and rhythm skills.',
        color: 'red'
      },
      {
        id: 18,
        title: 'Guitar',
        images: ['assets/Secondary/Activity/Co Curricular/Guitar.jpg'],
        description: 'Guitar classes to promote musical creativity and skill development.',
        color: 'pink'
      },
    ],
    'extra-curricular': [
      {
        id: 1,
        title: 'Vist to an Exhibition - Vasudev Kutumbakam ki Aur',
        images: ['assets/Secondary/Activity/Extra Curricular/Vist to an Exhibition.jpeg',
          'assets/Secondary/Activity/Extra Curricular/Vist to an Exhibition 1.jpeg'
        ],
        description: 'Educational visit to an exhibition promoting global unity and cultural diversity.',
        color: 'pink'
      },
      {
        id: 2,
        title: 'Educational visit to The museum of Solutions',
        images: ['assets/Secondary/Activity/Extra Curricular/Educational visit.jpeg'],
        description: 'Educational visit enhancing learning through interactive exhibits.',
        color: 'blue'
      },
      {
        id: 3,
        title: 'Eye Checkup Camp',
        images: ['assets/Secondary/Activity/Extra Curricular/Eye Checkup.jpeg'],
        description: "Eye check up camp by Rotary Club Of Mumbai Queen's Necklace",
        color: 'pink'
      },
      {
        id: 4,
        title: 'Maranatha Orphanage Visit',
        images: ['assets/Secondary/Activity/Extra Curricular/Orphanage Visit.jpeg'],
        description: 'Interact members visited  the Maranatha Harvest Mission Orphanage Society at Chembur',
        color: 'blue'
      },
      {
        id: 5,
        title: 'Sevadhan Centre Visit',
        images: ['assets/Secondary/Activity/Extra Curricular/Sevadhan Centre Visit.jpeg'],
        description: "Interact members visited Sevadhan centre - A school for special children",
        color: 'pink'
      },
      {
        id: 6,
        title: 'Vist to Nade',
        images: ['assets/Secondary/Activity/Extra Curricular/Visit to Nade.jpeg',
          'assets/Secondary/Activity/Extra Curricular/Visit to Nade 1.jpeg'
        ],
        description: 'Educational visit to an exhibition promoting cultural diversity.',
        color: 'red'
      },
      {
        id: 7,
        title: 'Picnic to Shangrila Resort',
        images: ['assets/Secondary/Activity/Extra Curricular/Picnic to Shangrila Resort.jpeg',
          'assets/Secondary/Activity/Extra Curricular/Picnic to Shangrila Resort 1.jpeg',
          'assets/Secondary/Activity/Extra Curricular/Picnic to Shangrila Resort 2.jpeg'
        ],
        description: 'Students enjoy a fun-filled picnic at Shangrila Resort.',
        color: 'red'
      },
      {
        id: 8,
        title: 'Picnic at Paradise Funland',
        images: ['assets/Secondary/Activity/Extra Curricular/Picnic at Paradise Funland.jpg'],
        description: 'Fun-filled picnic fostering camaraderie and relaxation among students.',
        color: 'blue'
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
