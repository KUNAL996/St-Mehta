import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Footer } from "../../core/modules/footer/footer";

@Component({
  selector: 'app-infrastructure',
  imports: [Footer, CommonModule],
  templateUrl: './infrastructure.html',
  styleUrl: './infrastructure.css'
})
export class Infrastructure implements OnInit, OnDestroy {
  activeTab = 'ground';

  private sliderStates: { [key: number]: { currentIndex: number } } = {};

  tabs = [
    { id: 'ground', label: 'Ground Floor', active: true },
    { id: 'mezzanine', label: 'Mezzanine Floor', active: false },
    { id: 'first', label: 'First Floor', active: false },
    { id: 'second', label: 'Second Floor', active: false },
    { id: 'third', label: 'Third Floor', active: false },
    { id: 'fourth', label: 'Fourth Floor', active: false },
    { id: 'terrace', label: 'Terrace', active: false }
  ];

  tabContent = {
    ground: {
      title: 'Ground Floor',
      rooms: [
        {
          id: 1,
          name: 'Auditorium Seats',
          images: ['assets/infrastructure/Spacious Auditorium.jpeg'],
          details: 'Seating capacity of 500+ with professional sound system',
          donor: 'Donor : Cultural Arts Foundation',
          color: 'blue'
        },
        {
          id: 2,
          name: 'Auditorium Stage',
          images: ['assets/infrastructure/stage.jpg'],
          details: 'Stage for performers and speakers',
          donor: 'Donor : Drama Society Alumni',
          color: 'red'
        },
        {
          id: 3,
          name: 'Canteen Area',
          images: ['assets/infrastructure/canteen.jpg'],
          details: 'Canteen area providing nutritious meals and snacks for students and staff',
          donor: 'Donor : Drama Society Alumni',
          color: 'blue'
        },
        {
          id: 4,
          name: 'Exercise Equipment',
          images: [
            'assets/infrastructure/exercise equipment1.jpg',
            'assets/infrastructure/exercise equipment.jpg',
            'assets/infrastructure/exercise equipment2.jpeg',
            'assets/infrastructure/exercise equipment 3.jpg',
          ],
          details: 'Exercise equipment for physical fitness and health',
          donor: 'Donor : Cultural Arts Foundation',
          color: 'red'
        },
        {
          id: 5,
          name: 'Creative Corner',
          images: ['assets/infrastructure/Creative Corner.jpg'],
          details: 'Creative Corner helps students to foster imagination, artistic expression, and independent thinking',
          donor: 'Donor : Drama Society Alumni',
          color: 'blue'
        },
      ]
    },
    mezzanine: {
      title: 'Mezzanine Floor',
      rooms: [
        {
          id: 1,
          name: 'Pre-Primary & Secondary Section Principal Office',
          images: ['assets/infrastructure/Principal1.jpeg'],
          details: 'Office of Mrs. Jyothi Dinesh, Principal (Pre-Primary & Secondary Section)',
          donor: 'Donor : Science Foundation Trust',
          color: 'blue'
        },
        {
          id: 2,
          name: 'Primary Section Principal Office',
          images: ['assets/infrastructure/principal2.jpg'],
          details: 'Office of Mrs. Kirti S. Pansare, Principal (Primary Section)',
          donor: 'Donor : Science Foundation Trust',
          color: 'red'
        },
        {
          id: 3,
          name: 'School Administration Office',
          images: ['assets/infrastructure/Administrator.jpg'],
          details: 'School Administration Office',
          donor: 'Donor : Chemical Industries Association',
          color: 'blue'
        },
        {
          id: 4,
          name: 'Office Entrance Area',
          images: ['assets/infrastructure/Office Entrance Area.jpg'],
          details: 'Entrance area for the school administration office',
          donor: 'Donor : Chemical Industries Association',
          color: 'red'
        }
      ]
    },
    first: {
      title: 'First Floor',
      rooms: [
        {
          id: 1,
          name: '1st Floor Passageway',
          images: ['assets/infrastructure/1stFloor.jpg'],
          details: 'Wide passageway connecting classrooms and facilities on the first floor.',
          donor: 'Donor : Chemical Industries Association',
          color: 'red'
        },
        {
          id: 2,
          name: 'Staff Room',
          images: ['assets/infrastructure/staffroom.jpg'],
          details: 'A comfortable space for teachers to relax, plan lessons, and collaborate.',
          donor: 'Donor : Primary Education Trust',
          color: 'blue'
        },
        {
          id: 3,
          name: 'Computer Lab 1st Floor',
          images: ['assets/infrastructure/computer lab.jpeg'],
          details: 'Computer lab for Primary Section using MS Office and Paint',
          donor: 'Donor : Chemical Industries Association',
          color: 'red'
        },
        {
          id: 4,
          name: 'Audio Visual Room',
          images: ['assets/infrastructure/AV.jpg'],
          details: 'Equipped with modern technology for interactive learning experiences.',
          donor: 'Donor : Literary Society',
          color: 'blue'
        },
        {
          id: 5,
          name: 'Nursery Activity Room',
          images: ['assets/infrastructure/Nursery Classroom.jpeg'],
          details: 'Nursery classroom designed for early childhood education.',
          donor: 'Donor : Literary Society',
          color: 'red'
        },
        {
          id: 6,
          name: 'Junior KG - Blue Room',
          images: ['assets/infrastructure/JR Kg.png'],
          details: 'Junior KG classroom fostering creativity and learning.',
          donor: 'Donor : Literary Society',
          color: 'blue'
        },
        {
          id: 7,
          name: 'Senior KG - Pink Room',
          images: ['assets/infrastructure/Sr Kg.jpeg'],
          details: 'Senior KG classroom preparing children for primary education.',
          donor: 'Donor : Literary Society',
          color: 'red'
        },
        {
          id: 8,
          name: 'Senior KG - Green Room',
          images: ['assets/infrastructure/Green room.png'],
          details: 'Senior KG classroom fostering creativity and learning.',
          donor: 'Donor : Literary Society',
          color: 'blue'
        },
        {
          id: 9,
          name: 'Puppet Theatre Room',
          images: ['assets/infrastructure/puppet room.jpg'],
          details: 'Room dedicated to puppet theatre activities for creative expression.',
          donor: 'Donor : Literary Society',
          color: 'blue'
        },
      ]
    },
    second: {
      title: 'Second Floor',
      rooms: [
        {
          id: 1,
          name: '2nd Floor Passageway',
          images: ['assets/infrastructure/2nd Floor.jpeg'],
          details: 'Wide passageway connecting classrooms and facilities on the first floor.',
          donor: 'Donor : Chemical Industries Association',
          color: 'red'
        },
        {
          id: 2,
          name: 'I Std Classroom',
          images: ['assets/infrastructure/1std.jpeg'],
          details: 'Ist Standard classroom promoting foundational learning and development.',
          donor: 'Donor : Primary Education Trust',
          color: 'blue'
        },
        {
          id: 3,
          name: 'II Std Classroom',
          images: ['assets/infrastructure/2std.jpeg'],
          details: 'IInd Standard classroom encouraging curiosity and exploration.',
          donor: 'Donor : Chemical Industries Association',
          color: 'red'
        },
        {
          id: 4,
          name: 'III Std Classroom',
          images: ['assets/infrastructure/3std.jpeg'],
          details: 'IIIrd Standard classroom fostering a love for learning.',
          donor: 'Donor : Literary Society',
          color: 'blue'
        },
        {
          id: 5,
          name: 'IV Std Classroom',
          images: ['assets/infrastructure/4std.jpeg'],
          details: 'IVth Standard classroom building essential skills and knowledge.',
          donor: 'Donor : Chemical Industries Association',
          color: 'red'
        },
        {
          id: 6,
          name: 'V Std Classroom',
          images: ['assets/infrastructure/5std.jpeg'],
          details: 'Vth Standard classroom equipped with modern learning tools and resources.',
          donor: 'Donor : Primary Education Trust',
          color: 'blue'
        },
      ]
    },
    third: {
      title: 'Third Floor',
      rooms: [
        {
          id: 1,
          name: '3rd Floor Passageway',
          images: ['assets/infrastructure/3rdFloor.jpeg'],
          details: 'Wide passageway connecting classrooms and facilities on the third floor.',
          donor: 'Donor : Chemical Industries Association',
          color: 'red'
        },
        {
          id: 2,
          name: 'VI Std Classroom',
          images: ['assets/infrastructure/6std.jpeg'],
          details: 'VIth Standard classroom fostering a collaborative learning environment.',
          donor: 'Donor : Chemical Industries Association',
          color: 'blue'
        },
        {
          id: 3,
          name: 'VII Std Classroom',
          images: ['assets/infrastructure/7std.jpeg'],
          details: 'VIIth Standard classroom designed for interactive and engaging lessons.',
          donor: 'Donor : Literary Society',
          color: 'red'
        },
        {
          id: 4,
          name: 'VIII Std Classroom',
          images: ['assets/infrastructure/8std.jpeg'],
          details: 'VIIIth Standard classroom promoting critical thinking and creativity.',
          donor: 'Donor : Literary Society',
          color: 'blue'
        },
        {
          id: 5,
          name: 'IX Std Classroom',
          images: ['assets/infrastructure/9std.jpeg'],
          details: 'IXth Standard classroom with advanced learning technology.',
          donor: 'Donor : Literary Society',
          color: 'red'
        },
        {
          id: 6,
          name: 'X Std Classroom',
          images: ['assets/infrastructure/10std.jpeg'],
          details: 'Xth Standard classroom preparing students for higher education and beyond.',
          donor: 'Donor : Literary Society',
          color: 'blue'
        }
      ]
    },
    fourth: {
      title: 'Fourth Floor',
      rooms: [
        {
          id: 1,
          name: 'Table Tennis & Toy library',
          images: ['assets/infrastructure/Table Tennis.jpg'],
          details: 'Table Tennis area alongside the Toy Library for recreational and educational activities.',
          donor: 'Donor : Literary Society',
          color: 'blue'
        },
        {
          id: 2,
          name: 'Multi-Purpose Hall',
          images: ['assets/infrastructure/Multipurpose Room.jpeg'],
          details: 'Versatile space for various school activities and events.',
          donor: 'Donor : Literary Society',
          color: 'red'
        },
        {
          id: 3,
          name: 'Computer Lab 4th Floor',
          images: ['assets/infrastructure/computer.jpeg'],
          details: 'Computers with better specifications for Secondary Section using advanced softwares.',
          donor: 'Donor : Chemical Industries Association',
          color: 'blue'
        },
        {
          id: 4,
          name: 'Physics, Chemistry & Biology Lab',
          images: ['assets/infrastructure/Biology Lab.jpg',
            'assets/infrastructure/Biology Lab 1.jpeg',
          ],
          details: 'Well-equipped labs for practical science experiments and learning.',
          donor: 'Donor : Literary Society',
          color: 'red'
        },
        {
          id: 5,
          name: 'Reading Hall',
          images: ['assets/infrastructure/Reading Hall.jpeg'],
          details: 'Spacious reading hall with comfortable seating',
          donor: 'Donor : Literary Society',
          color: 'blue'
        },
        {
          id: 6,
          name: 'Book Shelf',
          images: ['assets/infrastructure/Book Shelf.png'],
          details: 'Organized book shelf for easy access and better learning environment.',
          donor: 'Donor : Literary Society',
          color: 'red'
        },
      ]
    },
    terrace: {
      title: 'Terrace',
      rooms: [
        {
          id: 1,
          name: 'Turf',
          images: ['assets/infrastructure/Turf1.png'],
          details: 'Turf area for sports and recreational activities.',
          donor: 'Donor : Primary Education Trust',
          color: 'blue'
        },
        {
          id: 2,
          name: 'Turf',
          images: ['assets/infrastructure/Turf2.jpg'],
          details: 'Yoga and meditation area for students to relax and rejuvenate.',
          donor: 'Donor : Primary Education Trust',
          color: 'green'
        },
      ]
    }
  };

  ngOnInit(): void {
    this.initializeSliders();
  }

  ngOnDestroy(): void {
    this.sliderStates = {};
  }

  selectTab(tabId: string): void {
    this.activeTab = tabId;
    this.tabs.forEach(tab => {
      tab.active = tab.id === tabId;
    });
    this.initializeSliders();
  }

  getCurrentContent() {
    return this.tabContent[this.activeTab as keyof typeof this.tabContent];
  }

  isClassroomsTab(): boolean {
    return false; // No longer needed since we removed sub-tabs
  }

  private initializeSliders(): void {
    this.sliderStates = {};
    const content = this.getCurrentContent();
    if (!content || !content.rooms) return;

    content.rooms.forEach((room: any) => {
      if (room.images.length > 1) {
        this.sliderStates[room.id] = {
          currentIndex: 0
        };
      }
    });
  }

  getCurrentSlideIndex(roomId: number): number {
    return this.sliderStates[roomId]?.currentIndex || 0;
  }

  nextSlide(roomId: number): void {
    const room = this.findRoom(roomId);
    if (!room || !this.sliderStates[roomId]) return;

    const currentIndex = this.sliderStates[roomId].currentIndex;
    if (currentIndex < room.images.length - 1) {
      this.sliderStates[roomId].currentIndex = currentIndex + 1;
    }
  }

  previousSlide(roomId: number): void {
    if (!this.sliderStates[roomId]) return;

    const currentIndex = this.sliderStates[roomId].currentIndex;
    if (currentIndex > 0) {
      this.sliderStates[roomId].currentIndex = currentIndex - 1;
    }
  }

  goToSlide(roomId: number, index: number): void {
    if (this.sliderStates[roomId]) {
      this.sliderStates[roomId].currentIndex = index;
    }
  }

  private findRoom(roomId: number): any {
    const content = this.getCurrentContent();
    return content?.rooms?.find((room: any) => room.id === roomId);
  }
}