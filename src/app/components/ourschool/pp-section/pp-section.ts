import { Component } from '@angular/core';
import { Footer } from "../../../core/modules/footer/footer";

interface Activity {
  name: string;
  description: string;
  images: string[];
}

@Component({
  selector: 'app-pp-section',
  imports: [Footer],
  templateUrl: './pp-section.html',
  styleUrl: './pp-section.css'
})
export class PpSection {
  currentSlide = 0;
  slideInterval: any;
  activeStaffTab = 'teaching';
  selectedActivity: Activity | null = null;
  isModalOpen = false;
  modalImageIndex = 0;

  slides = [
    {
      image: 'https://i.postimg.cc/FsgDxzTQ/Navratri-Celebration.jpg',
      alt: 'Pre-Primary Learning Environment'
    },
    {
      image: 'https://i.postimg.cc/7hSQVZfG/Cat-puppet-making-using-paper-bags-Sr-KG-A.jpg',
      alt: 'Interactive Classroom Activities'
    },
    {
      image: 'https://i.postimg.cc/GhcjNQfS/Sr-KG-dance.jpg',
      alt: 'Play-Based Learning'
    },
    {
      image: 'https://i.imghippo.com/files/IUdv3169DA.jpeg',
      alt: 'Pre-Primary Learning Environment'
    },
    {
      image: 'https://i.imghippo.com/files/JdYD6354ES.jpeg',
      alt: 'Interactive Classroom Activities'
    },
    {
      image: 'https://i.imghippo.com/files/vsYO2761fnU.jpeg',
      alt: 'Creative Learning Spaces'
    },
    {
      image: 'https://i.imghippo.com/files/wGN7864OPc.jpeg',
      alt: 'Play-Based Learning'
    },
    {
      image: 'https://i.imghippo.com/files/jkQ8284JZo.jpeg',
      alt: 'Play-Based Learning'
    }
  ];

  activities: Activity[] = [
    {
      name: 'Participation in exciting inter-school Competitions',
      description: 'Our students participate in various inter-school competitions that help build confidence, showcase their talents, and develop a healthy competitive spirit. These events provide opportunities for children to represent their school and learn valuable life skills such as teamwork, perseverance, and sportsmanship.',
      images: [
        'https://i.postimg.cc/KvjPB2LJ/Rangotsav-Handwriting-Competition-Participation-Certificate.jpg',
        'https://i.imghippo.com/files/Sfc2790pl.jpeg'
      ]
    },
    {
      name: 'Stories through Puppet Theatre',
      description: 'Puppet theatre brings stories to life in a magical way! Through colorful puppets and engaging narratives, children develop listening skills, imagination, and emotional understanding. This creative medium helps them learn moral values, social behaviors, and language skills in an entertaining and memorable format.',
      images: [
        'https://i.imghippo.com/files/BPtA2804yCg.jpeg'
      ]
    },
    {
      name: 'Fun activities and games in Toy Library',
      description: 'Our toy library is a treasure trove of educational toys, games, and learning materials. Children explore different toys that enhance cognitive development, motor skills, and problem-solving abilities. Through play-based learning, they discover concepts like colors, shapes, numbers, and patterns while having fun.',
      images: [
        'assets/Fun activities and games in Toy Library.jpeg',
        'https://i.postimg.cc/rFCPRsB7/Free-play-area-2.jpg'
      ]
    },
    {
      name: 'Role Play',
      description: 'Role play activities allow children to step into different characters and scenarios, fostering creativity, empathy, and social skills. Whether playing house, doctor, teacher, or shopkeeper, children learn about various professions, develop communication skills, and understand social roles in a safe and nurturing environment.',
      images: [
        'https://i.imghippo.com/files/HwBm2926dzc.jpeg'
      ]
    },
    {
      name: 'Celebrating Festivals',
      description: 'We celebrate various festivals throughout the year to help children understand and appreciate cultural diversity and traditions. These celebrations include special activities, traditional attire, music, dance, and craft activities that connect children to their heritage while promoting unity, joy, and cultural awareness.',
      images: [
        'https://i.imghippo.com/files/Xnhm1621uGI.jpeg',
        'https://i.imghippo.com/files/sbFg2888Y.jpeg',
        'https://i.imghippo.com/files/VIal4990xRI.jpeg'
      ]
    },
    {
      name: 'Digital Learning Experience',
      description: 'In the digital age, we introduce age-appropriate technology to enhance learning. Through interactive educational apps, videos, and smart class activities, children develop digital literacy while learning core concepts in an engaging multimedia format. This prepares them for the technology-driven world while maintaining a healthy balance with traditional learning.',
      images: [
        'assets/Digital Learning Experience.jpeg'
      ]
    },
    {
      name: 'Sports Activities',
      description: 'Physical development is as important as cognitive growth. Our sports activities include yoga, dance, outdoor games, and exercises that promote physical fitness, coordination, and motor skills. These activities also teach children about teamwork, discipline, following rules, and maintaining a healthy lifestyle from an early age.',
      images: [
        'assets/Sports Activities.jpeg',
        'assets/Sports Activities1.jpeg',
        'assets/Sports Activities2.jpeg'
      ]
    },
    {
      name: 'Theme Days',
      description: 'Special theme days make learning exciting and memorable! From Color Day to Fruit Day, Animal Day to Community Helpers Day, each theme provides immersive learning experiences. Children dress up, participate in related activities, and explore topics in depth, making education fun and engaging while reinforcing concepts through experiential learning.',
      images: [
        'https://i.imghippo.com/files/cRfv9423CAg.jpeg',
        'assets/Theme Days.jpeg',
        'assets/Theme Days1.jpeg'
      ]
    },
    {
      name: 'Fun Carnival',
      description: 'Our annual Fun Carnival is a highlight of the school year, filled with games, activities, food stalls, and entertainment. This event brings together students, parents, and teachers in a joyful celebration. Children participate in various carnival games, win prizes, and create lasting memories while developing social bonds and experiencing community spirit.',
      images: [
        'https://i.postimg.cc/W4KWckZq/Fun-Carnival-2.jpg',
        'https://i.postimg.cc/4d98fxvL/Fun-carnival-3.jpg'
      ]
    },
    {
      name: 'Picnic / Visits',
      description: 'Educational picnics and field trips take learning beyond classroom walls. Visits to parks, museums, farms, and other interesting places provide hands-on learning experiences. These outings help children observe the real world, understand concepts in practical contexts, develop social skills, and create wonderful memories with friends and teachers.',
      images: [
        'https://i.imghippo.com/files/ZjY2737GY.jpeg',
        'https://i.imghippo.com/files/YCwE9043xY.jpeg',
        'https://i.imghippo.com/files/SF7229RRE.jpeg'
      ]
    },
    {
      name: 'Parent / Child activity',
      description: 'We believe in strong parent-school partnerships. Parent-child activities strengthen family bonds while involving parents in their child\'s educational journey. These special sessions include craft activities, storytelling, games, and projects where parents and children work together, fostering quality time, understanding, and creating cherished memories.',
      images: [
        'assets/Parent  Child activity.jpeg',
        'assets/Parent  Child activity1.jpeg',
        'assets/Parent  Child activity2.jpeg'
      ]
    }
  ];

  teachingStaff = [
    {
      name: ' Mrs. Sarita Jadhav',
      position: 'Asst. Teacher',
      qualification: 'B. Com, ECC.Ed',
      image: 'assets/preprimary/Staff/Mrs-Sarita-Jadhav.jpg'
    },
    {
      name: 'Mrs. Darshana Gaglani',
      position: 'Asst. Teacher',
      qualification: 'M.Com, Dip. in ECCEd',
      image: 'assets/preprimary/Staff/Mrs. Darshana Gaglani.jpg'
    },
    {
      name: 'Mrs. Nikita Bhatt',
      position: 'Asst. Teacher',
      qualification: 'B.A., Montessori teacher training Course',
      image: 'assets/preprimary/Staff/Mrs. Nikita Bhatt.jpg'
    },
    {
      name: 'Mrs. Urvi Mane',
      position: 'Asst. Teacher',
      qualification: 'B.Com, ECC.Ed',
      image: 'assets/preprimary/Staff/Mrs. Urvi Mane.jpg'
    },
  ];

  nonTeachingStaff = [
    {
      name: 'Mrs. Lata Kamble',
      position: 'Peon',
      qualification: 'SSC',
      image: 'assets/preprimary/Staff/Mrs. Lata Kamble.jpg'
    },
    {
      name: 'Mrs.Pramila Parmar',
      position: 'Aayah',
      qualification: 'VII',
      image: 'assets/preprimary/Staff/Mrs.Pramila Parmar.jpg'
    },
    {
      name: 'Mrs. Vahida Mujawar',
      position: 'Aayah',
      qualification: 'SSC',
      image: 'assets/preprimary/Staff/Mrs. Vahida Mujawar.jpg'
    },
    {
      name: 'Mrs. Rekha Rajbhar',
      position: 'Aayah',
      qualification: 'VII',
      image: 'assets/preprimary/Staff/Mrs. Rekha Rajbhar.jpg'
    }
  ];

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startSlideshow(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  pauseSlideshow(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  resumeSlideshow(): void {
    this.startSlideshow();
  }

  setActiveStaffTab(tab: string): void {
    this.activeStaffTab = tab;
  }

  openActivityModal(activity: Activity): void {
    this.selectedActivity = activity;
    this.modalImageIndex = 0;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeActivityModal(): void {
    this.isModalOpen = false;
    this.selectedActivity = null;
    document.body.style.overflow = 'auto';
  }

  modalNextImage(): void {
    if (this.selectedActivity) {
      this.modalImageIndex = (this.modalImageIndex + 1) % this.selectedActivity.images.length;
    }
  }

  modalPrevImage(): void {
    if (this.selectedActivity) {
      const len = this.selectedActivity.images.length;
      this.modalImageIndex = this.modalImageIndex === 0 ? len - 1 : this.modalImageIndex - 1;
    }
  }

  goToModalImage(index: number): void {
    this.modalImageIndex = index;
  }
}
