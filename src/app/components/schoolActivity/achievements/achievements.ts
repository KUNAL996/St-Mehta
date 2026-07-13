import { Component, OnDestroy, OnInit } from '@angular/core';
import { Footer } from "../../../core/modules/footer/footer";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-achievements',
  imports: [Footer],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css'
})
export class Achievements implements OnInit, OnDestroy {
  activeTab = 'pre-primary';
  activeSubSection = 'students';

  private sliderStates: { [key: number]: { currentIndex: number, intervalId?: any } } = {};
  private readonly SLIDE_INTERVAL = 30000;

  tabs = [
    { id: 'pre-primary', label: 'Pre Primary', active: true },
    { id: 'primary', label: 'Primary', active: false },
    { id: 'secondary', label: 'Secondary', active: false }
  ];

  subSections = [
    { id: 'students', label: 'Student Achievements', active: true },
    { id: 'teachers', label: 'Teaching / Non-Teaching Staff Achivements', active: false }
  ];

  activitiesData = {
    'pre-primary': {
      title: 'Pre-Primary Section',
      students: {
        title: 'Student Achievements',
        activities: [
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
                description: ''
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
              },
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
              },
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
              },
            ],
            description: 'Awarded for outstanding creativity and artistic expression in the All India Drawing Competition by Youva Master Stroke.',
            color: 'pink'
          }
        ]
      },
      teachers: {
        title: 'Teaching / Non-Teaching Staff Achivements',
        activities: [
          {
            id: 1,
            title: 'Mrs. Sarita Jadhav received Extra Mile Award (2024-25) Sponsored by S.P.R.J.Kanyashala Trust',
            images: [
              {
                url: 'https://i.postimg.cc/1X8hJxLh/Mrs-Sarita-Jadhav-received-The-Extra-Mile-Award-2024-2025-sponsored-by-S-P-R-J-Kanyashala.jpg',
                title: 'Mrs. Sarita Jadhav received Extra The Mile Award (2024-25) Sponsored by S.P.R.J.Kanyashala Trust',
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
                title: 'Mrs. Darshana Gaglani received The Extra Mile award (2025-26) Sponsored by S.P.R.J.Kanyashala Trust',
                description: 'Mrs. Darshana Gaglani honored for exceptional dedication and contribution.'
              },
            ],
            description: 'Mrs. Darshana Gaglani honored for exceptional dedication and contribution.',
            color: 'blue'
          }
        ]
      }
    },
    'primary': {
      title: 'Primary Section',
      students: {
        title: 'Student Achievements',
        activities: [
          {
            id: 8,
            title: 'Winners of folk dance Hojagiri',
            images: [
              {
                url: 'https://i.postimg.cc/6QrTfZtN/winners-of-folk-dance-Hojagiri.jpg',
                title: 'N Ward Level Competition Champions',
                description: 'Students secured top ranks at the N Ward level through dedication and talent.'
              }
            ],
            description: 'Celebrating the champions of the mesmerizing Hojagiri folk dance.',
            color: 'red'
          },
          {
            id: 10,
            title: 'Winners of Patriotic group singing',
            images: [
              {
                url: 'https://i.postimg.cc/mDTkXrg1/winners-of-patriotic-group-singing.jpg',
                title: 'N Ward Level Competition Champions',
                description: 'Students secured top ranks at the N Ward level through dedication and talent.'
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
            title: 'N Ward Art Competition Winner',
            images: [
              {
                url: 'https://i.postimg.cc/g2QnwwbH/Winner-of-N-Ward-competition.jpg',
                title: 'N Ward Art Competition Winner',
                description: 'Awarded for outstanding creativity and artistic expression in the N Ward contest.'
              },
              {
                url: 'https://i.postimg.cc/zfh3TJJZ/WINNERS-OF-N-WARD-LEVEL.jpg',
                title: 'N Ward Level Competition Champions',
                description: 'Students secured top ranks at the N Ward level through dedication and talent.'
              }
            ],
            description: 'Awarded for outstanding creativity and artistic expression in the N Ward contest.',
            color: 'red'
          },
          {
            id: 7,
            title: 'Kala Academy Winners',
            images: [
              {
                url: 'https://i.postimg.cc/JncndPDp/WINNERS-OF-KALA-ACADEMY.jpg',
                title: 'Kala Academy Winners',
                description: 'Winners of the Kala Stambha Interclass Competition for showcasing talent in drawing, singing, handwriting, and essay writing.'
              }
            ],
            description: 'Winners of the Kala Stambha Interclass Competition for showcasing talent in drawing, singing, handwriting, and essay writing.',
            color: 'blue'
          },
          {
            id: 9,
            title: 'Xpression Creative Contest Winners',
            images: [
              {
                url: 'https://i.postimg.cc/zXfB0wJk/WINNERS-OF-XPRESSION-COMPETITION.jpg',
                title: 'Xpression Competition Winners',
                description: 'Solo or group of talented students showcasing their creative expressions and artistic abilities.'
              },
              {
                url: 'https://i.postimg.cc/cCxHqwf0/WINNERS-OF-XPRESSION-COMPETITION-3.jpg',
                title: 'Xpression Competition Winners',
                description: 'Solo or group of talented students showcasing their creative expressions and artistic abilities.'
              },
              {
                url: 'https://i.postimg.cc/RVb083hx/WINNERS-OF-XPRESSION.jpg',
                title: 'Xpression Competition Winners',
                description: 'Solo or group of talented students showcasing their creative expressions and artistic abilities.'
              },
              {
                url: 'https://i.postimg.cc/3r1NXfHR/WINNER-OF-XPRESSION-COMPETITION-2.jpg',
                title: 'Xpression Competition Winners',
                description: 'Solo or group of talented students showcasing their creative expressions and artistic abilities.'
              },
              {
                url: 'https://i.postimg.cc/fy8bMyvX/WINNER-OF-XPRESSION-COMPETITION.jpg',
                title: 'Xpression Competition Winners',
                description: 'Solo or group of talented students showcasing their creative expressions and artistic abilities.'
              }
            ],
            description: 'Solo or group of talented students showcasing their creative expressions and artistic abilities.',
            color: 'pink'
          },
          {
            id: 7,
            title: 'Srujanotsav Winner',
            images: [
              {
                url: 'https://i.imghippo.com/files/LDu8132wcM.jpeg',
                title: 'Srujanotsav Winner',
                description: 'Winner of Srujanotsav competition Ms. Aramya Auti got 2nd Prize.'
              }
            ],
            description: 'Winners of the Kala Stambha Interclass Competition for showcasing talent in drawing, singing, handwriting, and essay writing.',
            color: 'red'
          },
          {
            id: 7,
            title: 'J.K Quiz Competition Winners',
            images: [
              {
                url: 'https://i.imghippo.com/files/Tvy5868h.jpeg',
                title: 'J.K Quiz Competition Winners',
                description: 'Kashavi Yadav and  Kavya Yadav got 2nd Prize in J.K Quiz Competition.'
              }
            ],
            description: 'Kashavi Yadav and  Kavya Yadav got 2nd Prize in J.K Quiz Competition.',
            color: 'blue'
          },
        ]
      },
      teachers: {
        title: 'Teaching / Non-Teaching Staff Achivements',
        activities: [
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
                title: 'Extra mile award',
                description: 'Mrs Sneha Gupta Extra mile award.'
              },
              {
                url: 'https://i.imghippo.com/files/BGT6675JsQ.JPG',
                title: 'Extra mile award',
                description: 'Mrs Dipali Vyas Extra mile award.'
              }
            ],
            description: 'Mrs Sneha Gupta Extra mile award.',
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
          },
        ]
      }
    },
    'secondary': {
      title: 'Secondary Section',
      students: {
        title: 'Student Achievements',
        activities: [
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
            color: 'red',
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
            color: 'blue',
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
            color: 'pink',
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
            color: 'red',
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
            color: 'blue',
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
            color: 'pink',
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
            color: 'red',
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
            color: 'red',
          },
        ]
      },
      teachers: {
        title: 'Teaching / Non-Teaching Staff Achivements',
        activities: [
          {
            id: 14,
            title: 'Mrs. Sujata Suryavanshi - Shivaji Maharaj Adarsh Award',
            images: [
              {
                url: 'https://i.postimg.cc/xdvdzD2s/Tr-Sujata-Suryavanshi-received-Chatrapati-Shivaji-Maharaj-Adarsh-Teacher-s-award-by-Global-Gold-Tal.jpg',
                title: 'Mrs. Sujata Suryavanshi - Shivaji Maharaj Adarsh Award',
                description: 'Honored with the prestigious Chatrapati Shivaji Maharaj Adarsh Teacher Award by Global Gold Talent for exemplary teaching practices.'
              },
            ],
            description: 'Honored with the prestigious Chatrapati Shivaji Maharaj Adarsh Teacher Award by Global Gold Talent for exemplary teaching practices.',
            color: 'red',
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
            color: 'blue',
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
            color: 'pink',
          },
          {
            id: 16,
            title: 'Mrs. Priti Narvekar - Savitri Fatima Award',
            images: [
              {
                url: 'https://i.postimg.cc/d1JVRHQJ/Savitri-Fatima-Award-Tr-Priti-Narvekar.jpg',
                title: 'Mrs. Priti Narvekar - Savitri Fatima Award',
                description: 'Honored with the Savitri Fatima Award for exceptional service, innovation, and lasting impact in education.'
              }
            ],
            description: 'Honored with the Savitri Fatima Award for exceptional service, innovation, and lasting impact in education.',
            color: 'red',
          },
          {
            id: 17,
            title: 'Mrs. Sanjeevani Gaonkar received The Extra Mile award 2025-26 Sponsored by S.P.R.J.Kanyashala Trust',
            images: [
              {
                url: 'https://i.postimg.cc/7ZVZCkVx/Sanjeevani-Gaonkar-received-The-Extra-Mile-award-2025-2026.jpg',
                title: 'N Ward Level Competition Champions',
                description: 'Students secured top ranks at the N Ward level through dedication and talent.'
              }
            ],
            description: 'Mrs. Sanjeevani Gaonkar for exceptional dedication and contribution',
            color: 'blue'
          },
          {
            id: 13,
            title: "Shri Rakesh Vaidya Receives 'The Extra Mile Award' in 2024-25 Sponsored by S.P.R.J.Kanyashala Trust",
            images: [
              {
                url: 'https://i.postimg.cc/SRvQhm6K/Shri-Rakesh-Vaidya-received-Certificate-of-Excellence-The-Extra-Mile-Award-sponsored-by-SPRJ-Kan.jpg',
                title: "Shri Rakesh Vaidya Receives 'The Extra Mile Award'",
                description: 'Award Sponsored by SPRJ Kanyashala for Honoring exceptional dedication and service in education'
              }
            ],
            description: 'Award Sponsored by SPRJ Kanyashala for Honoring exceptional dedication and service in education',
            color: 'pink',
          },
        ]
      }
    }
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

  selectTab(tabId: string): void {
    this.activeTab = tabId;
    this.tabs.forEach(tab => {
      tab.active = tab.id === tabId;
    });
    const availableSubSections = this.getAvailableSubSections();
    this.activeSubSection = availableSubSections.length > 0 ? availableSubSections[0].id : 'students';
    this.subSections.forEach(sub => {
      sub.active = sub.id === this.activeSubSection;
    });
    this.initializeSliders();
  }

  selectSubSection(subId: string): void {
    this.activeSubSection = subId;
    this.subSections.forEach(sub => {
      sub.active = sub.id === subId;
    });
    this.initializeSliders();
  }

  getAvailableSubSections() {
    const sectionData = this.activitiesData[this.activeTab as keyof typeof this.activitiesData];
    return this.subSections.filter(sub => {
      const subData = sectionData[sub.id as 'students' | 'teachers'];
      return subData && subData.activities && subData.activities.length > 0;
    });
  }

  isSubSectionAvailable(subId: string): boolean {
    const sectionData = this.activitiesData[this.activeTab as keyof typeof this.activitiesData];
    const subData = sectionData[subId as 'students' | 'teachers'];
    return subData && subData.activities && subData.activities.length > 0;
  }

  getCurrentActivities() {
    const sectionData = this.activitiesData[this.activeTab as keyof typeof this.activitiesData];
    return sectionData[this.activeSubSection as 'students' | 'teachers'];
  }

  getCurrentSlideContent(activityId: number) {
    const activity = this.findActivity(activityId);
    if (!activity) return null;

    const currentIndex = this.getCurrentSlideIndex(activityId);
    return activity.images[currentIndex];
  }

  getImageUrl(activity: any, index?: number): string {
    const imageIndex = index !== undefined ? index : 0;
    return activity.images[imageIndex].url;
  }

  initializeSliders(): void {
    this.sliderStates = {};

    const activities = this.getCurrentActivities().activities;
    activities.forEach(activity => {
      if (activity.images.length > 1) {
        this.sliderStates[activity.id] = {
          currentIndex: 0
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

  pauseSlideshow(activityId: number): void {
    const state = this.sliderStates[activityId];
    if (state && state.intervalId) {
      clearInterval(state.intervalId);
      state.intervalId = undefined;
    }
  }

  resumeSlideshow(activityId: number): void {
    const state = this.sliderStates[activityId];
    if (state && !state.intervalId) {
      state.intervalId = setInterval(() => this.autoAdvanceSlide(activityId), this.SLIDE_INTERVAL);
    }
  }

  private autoAdvanceSlide(activityId: number): void {
    const activity = this.findActivity(activityId);
    const state = this.sliderStates[activityId];

    if (!activity || !state) return;

    if (state.currentIndex < activity.images.length - 1) {
      state.currentIndex++;
    } else {
      state.currentIndex = 0;
    }
  }

  private findActivity(activityId: number) {
    return this.getCurrentActivities().activities.find(activity => activity.id === activityId);
  }
}
