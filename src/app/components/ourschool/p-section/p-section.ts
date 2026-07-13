import { Component } from '@angular/core';
import { Footer } from "../../../core/modules/footer/footer";

interface Activity {
  name: string;
  description: string;
  images: string[];
}

@Component({
  selector: 'app-p-section',
  imports: [Footer],
  templateUrl: './p-section.html',
  styleUrl: './p-section.css'
})
export class PSection {
  currentSlide = 0;
  slideInterval: any;
  activeStaffTab = 'teaching';
  selectedActivity: Activity | null = null;
  isModalOpen = false;
  modalImageIndex = 0;

  slides = [
    {
      image: 'https://i.postimg.cc/zfh3TJJZ/WINNERS-OF-N-WARD-LEVEL.jpg',
      alt: 'Pre-Primary Learning Environment'
    },
    {
      image: 'https://i.postimg.cc/zXfB0wJk/WINNERS-OF-XPRESSION-COMPETITION.jpg',
      alt: 'Interactive Classroom Activities'
    },
    {
      image: 'https://i.postimg.cc/hv6JsKQm/FUN-FAIR-2.jpg',
      alt: 'Creative Learning Spaces'
    },
    {
      image: 'https://i.postimg.cc/zGdQN3Z1/Makar-Sankranti-kite-making-activity.jpg',
      alt: 'Play-Based Learning'
    },
    {
      image: 'https://i.postimg.cc/7Z7zBJVZ/CODING.jpg',
      alt: 'Pre-Primary Learning Environment'
    },
    {
      image: 'https://i.imghippo.com/files/CVgs6880UnA.jpeg',
      alt: 'Interactive Classroom Activities'
    },
    {
      image: 'https://i.imghippo.com/files/Zzd3421Ltc.jpg',
      alt: 'Creative Learning Spaces'
    },
    {
      image: 'https://i.postimg.cc/yNjk5mSs/Music-Class.jpg',
      alt: 'Play-Based Learning'
    },
  ];

  activities: Activity[] = [
    {
      name: 'Participation in exciting inter-school Competitions',
      description: 'Our students participate in various inter-school competitions that help build confidence, showcase their talents, and develop a healthy competitive spirit. These events provide opportunities for children to represent their school and learn valuable life skills such as teamwork, perseverance, and sportsmanship.',
      images: [
        'https://i.postimg.cc/g2QnwwbH/Winner-of-N-Ward-competition.jpg',
        'https://i.postimg.cc/mDTkXrg1/winners-of-patriotic-group-singing.jpg',
        'assets/navratri celebration.jpg',
        'assets/inter_school1.jpg',
        'assets/inter_school2.jpg',
        'assets/inter_school3.jpg',
        'assets/inter_school4.jpg',
        'assets/inter_school5.jpg',
      ]
    },
    {
      name: 'Co-curricular activities',
      description: 'Our co-curricular activities encompass a wide range of creative and performing arts, including music, dance, drama, and visual arts. These activities nurture creativity, self-expression, and cultural appreciation while providing a well-rounded education that goes beyond academics.',
      images: [
        'https://i.postimg.cc/k4x4nftR/8-Flute-Decoration.jpg',
        'https://i.imghippo.com/files/CVgs6880UnA.jpeg',
        'assets/co.jpeg',
        'assets/co1.jpeg',
        'assets/co2.jpeg',
        'assets/co3.jpeg',
        'assets/co4.jpeg'
      ]
    },
    {
      name: 'Cooking Experience',
      description: 'Our cooking classes provide children with hands-on experiences in the cooking, teaching them about nutrition, food safety, and the joy of creating delicious meals. These activities foster independence, creativity, and a healthy relationship with food while developing important life skills.',
      images: [
        'assets/cooking.jpeg',
        'assets/cooking1.jpeg',
        'assets/cooking2.jpeg',
        'assets/cooking3.jpeg',
        'assets/cooking4.jpeg',
      ]
    },
    {
      name: 'Science Experiment',
      description: 'Our science experiments are designed to spark curiosity and foster a love for discovery. Through hands-on activities and simple experiments, children learn about scientific concepts in a fun and engaging way. These experiments encourage critical thinking, problem-solving, and a deeper understanding of the world around them.',
      images: [
        'assets/experiment.jpeg',
        'assets/experiment1.jpeg',
        'assets/experiment2.jpeg',
        'assets/experiment3.jpeg'
      ]
    },
    {
      name: 'Sports Competitions',
      description: 'Our sports competitions provide a platform for students to showcase their athletic abilities, promote physical fitness, and foster a spirit of healthy competition. Through various sports events and tournaments, children develop teamwork, discipline, and sportsmanship while enjoying the benefits of an active lifestyle.',
      images: [
        'https://i.imghippo.com/files/Hssz4033Kw.jpeg',
        'https://i.imghippo.com/files/tfF2259cps.jpeg',
        'assets/Sports Competitions.jpeg',
        'assets/Sports Competitions1.jpeg',
        'assets/Sports Competitions2.jpeg'
      ]
    },
    {
      name: 'Celebrate festivals to foster Cultural Awareness',
      description: 'We celebrate festivals with great enthusiasm and joy at our school. Our students actively participate in various cultural and religious festivals, learning about different traditions, customs, and values. These celebrations foster a sense of community, promote cultural diversity, and create lasting memories for our students.',
      images: [
        'assets/Lord ganehsa darshan at Tilak nagar.jpeg',
        'assets/chritmas celebration.jpg',
        'assets/navratri celebration.jpg'
      ]
    },
    {
      name: 'Yoga / Exercises',
      description: 'Physical development is as important as cognitive growth. Our activities include yoga, dance, outdoor games, and exercises that promote physical fitness, coordination, and motor skills. These activities also teach children about teamwork, discipline, following rules, and maintaining a healthy lifestyle from an early age.',
      images: [
        'https://i.imghippo.com/files/FFqO3249MFs.jpeg',
        'https://i.imghippo.com/files/JkDg2363Uk.jpeg',
        'assets/yoga.jpeg'
      ]
    },
    {
      name: 'Picnic & Visits',
      description: 'Our picnic and educational tours provide students with opportunities to explore new places, learn about different cultures, and engage in hands-on learning experiences outside the classroom. These trips foster curiosity, broaden horizons, and create memorable experiences for our students.',
      images: [
        'https://i.imghippo.com/files/Zzd3421Ltc.jpg',
        'https://i.imghippo.com/files/JbqW4717PEc.jpg',
        'https://i.imghippo.com/files/UJo1871Ma.jpeg',
        'assets/picnic.jpeg',
        'assets/picnic1.jpeg',
        'assets/picnic2.jpeg',
        'assets/picnic3.jpeg',
        'assets/picnic4.jpeg',
        'assets/picnic5.jpeg',
        'assets/picnic6.jpeg',
        'assets/picnic7.jpeg'
      ]
    },
    {
      name: 'Summer Camp',
      description: 'Our summer camp offers a fun and enriching experience for children during the school break. With a variety of activities such as arts and crafts, sports, music, and outdoor adventures, our summer camp provides a safe and engaging environment for children to learn, play, and make new friends while creating lasting memories.',
      images: [
        'assets/summer camp.jpeg',
        'assets/summer camp1.jpeg',
        'assets/summer camp2.jpeg',
        'assets/summer camp3.jpeg',
        'assets/summer camp4.jpeg',
        'assets/summer camp5.jpeg',
        'assets/summer camp6.jpeg',        
      ]
    }
  ];

  teachingStaff = [
    {
      name: 'Mrs. Priya Raut',
      position: 'Asst. Teacher',
      qualification: 'M.A., D.Ed.',
      image: 'assets/Primary/Staff/Mrs-Priya-Raut.jpg'
    },
    {
      name: 'Mrs. Sneha Gupta',
      position: 'Asst. Teacher',
      qualification: 'B.A., D.Ed.',
      image: 'assets/Primary/Staff/Mrs-Sneha-Gupta.jpg'
    },
    {
      name: 'Mrs. Chhaya A. Surse',
      position: 'Asst. Teacher',
      qualification: 'H.S.C., D.Ed.',
      image: 'assets/Primary/Staff/Mrs-Chhaya-Surse.jpg'
    },
    {
      name: 'Ms. Suman Sharma ',
      position: 'Asst. Teacher',
      qualification: 'H.S.C., D.Ed.',
      image: 'assets/Primary/Staff/Ms-Suman-Sharma.jpg'
    },
    {
      name: 'Ms. Renuka Pasi',
      position: 'Asst. Teacher',
      qualification: 'B.A., D.Ed.',
      image: 'assets/Primary/Staff/Ms-Renuka-Pasi.jpg'
    },
    {
      name: 'Mrs. Namrata Sonavne',
      position: 'Asst. Teacher',
      qualification: ' M.A., B.Ed.',
      image: 'assets/Primary/Staff/Mrs-Namrata-Sonavane.jpg'
    },
    {
      name: 'Ms. Anida Bansode',
      position: 'Asst. Teacher',
      qualification: 'B.A., D.Ed.',
      image: 'assets/Primary/Staff/Ms-Anida-Bansode.jpg'
    },
    {
      name: 'Mrs. Pallavi Shinde',
      position: 'Asst. Teacher',
      qualification: ' M.A., D.T.Ed.',
      image: 'assets/Primary/Staff/Mrs-Pallavi-Shinde.jpg'
    },
    {
      name: 'Ms. Pooja Jadhav',
      position: 'Computer Teacher',
      qualification: 'B.Com',
      image: 'assets/Primary/Staff/Ms-Pooja-Jadhav.jpg'
    },
  ];

  nonTeachingStaff = [
    {
      name: 'Mrs. Dipali Vyas',
      position: 'Clerk',
      department: 'H.S.C',
      image: 'assets/Primary/Staff/Mrs-Dipali-Vyas.jpg'
    },
    {
      name: 'Mrs. Meera Devi',
      position: 'Clerk',
      // department: 'Administration',
      image: 'assets/Primary/Staff/Ms-Vaishali-Wakade.jpg'
    },
    {
      name: 'Mr. Aanant Godambe',
      position: 'Peon',
      // department: 'Security',
      image: 'assets/Primary/Staff/Mr-Aanant-Godambe.jpg'
    },
    {
      name: 'Mrs. Lata Bai',
      position: 'Cleaning Staff',
      // department: 'Maintenance',
      image: 'assets/Primary/Staff/Mrs-Pushpa-Wankhede.jpg'
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
