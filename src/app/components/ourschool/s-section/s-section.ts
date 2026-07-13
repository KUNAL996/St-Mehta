import { Component } from '@angular/core';
import { Footer } from "../../../core/modules/footer/footer";

interface Activity {
  name: string;
  description: string;
  images: string[];
}

@Component({
  selector: 'app-s-section',
  imports: [Footer],
  templateUrl: './s-section.html',
  styleUrl: './s-section.css'
})
export class SSection {
  currentSlide = 0;
  slideInterval: any;
  activeStaffTab = 'teaching';
  selectedActivity: Activity | null = null;
  isModalOpen = false;
  modalImageIndex = 0;

  slides = [
    {
      image: 'https://i.postimg.cc/rwyjbch4/Basketball.jpg',
      alt: 'Pre-Primary Learning Environment'
    },
    {
      image: 'https://i.postimg.cc/tgwzY69d/Students-enjoying-the-water-rides-at-Paradise-Funland.jpg',
      alt: 'Interactive Classroom Activities'
    },
    {
      image: 'https://i.postimg.cc/G2BLrchg/Helen-O-Grady-Speech-and-Drama-Std-VIII-Ulyses.jpg',
      alt: 'Creative Learning Spaces'
    },
    {
      image: 'https://i.postimg.cc/021kR1gZ/Interact-members-visited-the-Maranatha-Harvest-Mission-Orphanage-Society-at-Chembur.jpg',
      alt: 'Play-Based Learning'
    },
    {
      image: 'https://i.imghippo.com/files/XpIk2714YA.jpeg',
      alt: 'Pre-Primary Learning Environment'
    },
    {
      image: 'https://i.imghippo.com/files/unW5548xgo.jpeg',
      alt: 'Interactive Classroom Activities'
    },
    {
      image: 'https://i.imghippo.com/files/alo4854Ik.jpeg',
      alt: 'Creative Learning Spaces'
    },
    {
      image: 'https://i.imghippo.com/files/mpcR5704pKo.jpeg',
      alt: 'Play-Based Learning'
    },
  ];

  activities: Activity[] = [
    {
      name: 'Participation in exciting inter-school Competitions',
      description: 'Our students participate in various inter-school competitions that help build confidence, showcase their talents, and develop a healthy competitive spirit. These events provide opportunities for children to represent their school and learn valuable life skills such as teamwork, perseverance, and sportsmanship.',
      images: [
        'assets/inter_school.jpg',
        'https://i.postimg.cc/JzB0RHdC/Our-school-received-Hem-Value-Star-Excellence-award-Copy.jpg',
        'https://i.imghippo.com/files/eld5393DME.jpeg',
        'assets/Participation in exciting inter-school Competitions Secondary.jpeg'
      ]
    },
    {
      name: 'English Language Club',
      description: 'Our English Language Club is a vibrant space where children engage in fun and interactive activities to enhance their language skills. Through storytelling, role-playing, word games, and creative writing exercises, students develop their vocabulary, grammar, pronunciation, and communication abilities in an enjoyable and supportive environment.',
      images: [
        'https://i.imghippo.com/files/mNz8452Sc.jpeg',
        'assets/English Language Club Secondary.jpeg',
        'assets/English Language Club Secondary1.jpeg'
      ]
    },
    {
      name: 'Eco Club',
      description: 'Our Eco Club is dedicated to fostering environmental awareness and responsibility among our students. Through activities such as gardening, eco idols, nature walks, and environmental campaigns, children learn about the importance of sustainability and develop a sense of stewardship for the planet.',
      images: [
        'https://i.postimg.cc/c4Z0FYQW/As-part-of-the-Eco-club-students-attended-a-workshop-on-Eco-friendly-Ganapathy.jpg',
        'assets/Eco Club.jpeg',
        'assets/Eco Club1.jpeg',
        'assets/Eco Club2.jpeg',
        'assets/Eco Club3.jpeg'
      ]
    },
    {
      name: 'Interact Club',
      description: 'Our Interact Club is a student-led organization that promotes community service, leadership development, and global citizenship. Through various service projects, and awareness campaigns, our students actively contribute to their communities while developing important life skills such as teamwork, communication, and empathy.',
      images: [
        'https://i.imghippo.com/files/vBPI9499vU.jpeg',
        'https://i.imghippo.com/files/NEEI4361yeg.jpeg'
      ]
    },
    {
      name: 'Sports Competitions',
      description: 'Our sports competitions provide a platform for students to showcase their athletic abilities, promote physical fitness, and foster a spirit of healthy competition. Through various sports events and tournaments, children develop teamwork, discipline, and sportsmanship while enjoying the benefits of an active lifestyle.',
      images: [
        'https://i.imghippo.com/files/zfAV6843vFs.jpeg',
        'https://i.postimg.cc/FRSVcKKM/Chess.jpg'
      ]
    },
    {
      name: 'Learning Coding & Programming',
      description: 'Our coding and programming classes introduce children to the world of technology and computer science. Through interactive lessons, students learn the fundamentals of coding languages. These classes empower children to become creators of technology and prepare them for the digital future.',
      images: [
        'https://i.imghippo.com/files/zqA4309lw.jpeg'
      ]
    },
    {
      name: 'Celebrate Festivals with Joy',
      description: 'We celebrate festivals with great enthusiasm and joy at our school. Our students actively participate in various cultural and religious festivals, learning about different traditions, customs, and values. These celebrations foster a sense of community, promote cultural diversity, and create lasting memories for our students.',
      images: [
        'assets/Celebrate Festivals with Joy.jpg',
        'assets/Celebrate Festivals with Joy1.jpeg',
        'assets/Celebrate Festivals with Joy2.jpeg'
      ]
    },
    {
      name: 'Picnic and Educational Tours',
      description: 'Our picnic and educational tours provide students with opportunities to explore new places, learn about different cultures, and engage in hands-on learning experiences outside the classroom. These trips foster curiosity, broaden horizons, and create memorable experiences for our students.',
      images: [
        'https://i.imghippo.com/files/rCn9004GMI.jpeg',
        'https://i.imghippo.com/files/jGK5785wwY.jpeg',
        'https://i.imghippo.com/files/lezR5717HZs.jpeg'
      ]
    }
  ];

  teachingStaff = [
    {
      name: 'Mrs. Shobha Dhadd',
      position: 'Asst.Teacher',
      qualification: 'M.Sc. B.Ed.',
      image: 'assets/Secondary/Staff/Mrs. Shobha Dhadd.jpg'
    },
    {
      name: 'Mrs.Sujata Suryavanshi',
      position: 'Asst.Teacher',
      qualification: 'B.Sc, M.A B.Ed.',
      image: 'assets/Secondary/Staff/Mrs.Sujata Suryavanshi.jpg'
    },
    {
      name: 'Mrs. Manjiri Arya',
      position: 'Asst.Teacher',
      qualification: 'B.A, B.Ed.',
      image: 'assets/Secondary/Staff/Mrs. Manjiri Arya.jpg'
    },
    {
      name: 'Miss Meena Khamkar',
      position: 'Asst.Teacher',
      qualification: 'M.Com, M.A, B.Ed.',
      image: 'assets/Secondary/Staff/Miss Meena Khamkar.jpg'
    },
    {
      name: 'Mrs. Reshma Satam',
      position: 'Asst.Teacher',
      qualification: 'M.A, B.Ed.',
      image: 'assets/Secondary/Staff/Mrs. Reshma Satam.jpg'
    },
    {
      name: 'Mrs. Panna Panchal',
      position: 'Asst.Teacher',
      qualification: 'M.A, B.Ed.',
      image: 'assets/Secondary/Staff/Mrs. Panna Panchal.jpg'
    },
    {
      name: 'Mrs. Priti Narvekar',
      position: 'Asst.Teacher',
      qualification: 'B.Sc, B.Ed.',
      image: 'assets/Secondary/Staff/Mrs. Priti Narvekar.jpg'
    },
    {
      name: 'Mrs. Suvarna Roy',
      position: 'Asst.Teacher',
      qualification: 'M.Sc, B.Ed.',
      image: 'assets/Secondary/Staff/Mrs. Suvarna Roy.jpg'
    },
    {
      name: 'Mrs. Sangita Phanse',
      position: 'Asst.Teacher',
      qualification: 'B.A, B.Ed.',
      image: 'assets/Secondary/Staff/Mrs. Sangita Phanse.jpg'
    },
    {
      name: 'Mrs. Snehal Yesade',
      position: 'Asst.Teacher',
      qualification: 'B.Com, B.Ed.',
      image: 'assets/Secondary/Staff/Mrs. Snehal Yesade.jpg'
    },
    {
      name: 'Mrs. Shahin Mapari',
      position: 'Asst.Teacher',
      qualification: 'B.A B.Ed.',
      image: 'assets/Secondary/Staff/Mrs. Shahin Mapari.jpg'
    },
    {
      name: 'Mrs. Bhavana Jani',
      position: 'Drawing Teacher',
      qualification: 'B.Com cleared Elementary and Int',
      image: 'assets/Secondary/Staff/Mrs. Bhavana Jani.jpg'
    },
    {
      name: 'Mrs. Ekta Savla',
      position: 'Computer Teacher',
      qualification: 'M.Com Graphic Designer',
      image: 'assets/Secondary/Staff/Mrs. Ekta Savla.jpg'
    },
    {
      name: 'Mrs. Shubhangi Davale',
      position: 'Asst. Teacher',
      qualification: 'M.A, B.Ed.',
      image: 'assets/Secondary/Staff/Mrs. Shubhangi Davale.jpg'
    },
    {
      name: 'Ms. Nisha Jagtap',
      position: 'Asst. Teacher',
      qualification: 'B.A D.Ed.',
      image: 'assets/Secondary/Staff/Ms. Nisha Jagtap.jpg'
    },
    {
      name: 'Mrs. Komal Pandya',
      position: 'Asst. Teacher',
      qualification: 'B.A, B.Ed.',
      image: 'assets/Secondary/Staff/Mrs. Komal Pandya.jpg'
    },
    {
      name: 'Mrs. Latika Sawant',
      position: 'Asst. Teacher',
      qualification: 'B.A, B.Ed.',
      image: 'assets/Secondary/Staff/Mrs. Latika Sawant.jpg'
    },
  ];

  nonTeachingStaff = [
    {
      name: 'Mrs. Sanjeevani Gaonkar',
      position: 'Clerk',
      department: 'B.A.',
      image: 'assets/Secondary/Staff/Mrs. Sanjeevani Gaonkar.jpg'
    },
    {
      name: 'Mrs. Shruti Postandel',
      position: 'Clerk',
      department: 'B.Com Diploma in Software Programming',
      image: 'assets/Secondary/Staff/Mrs. Shruti Postandel.jpg'
    },
    {
      name: 'Mrs. Pragati Redkar',
      position: 'Librarian',
      department: 'SSC Diploma in Lib Science',
      image: 'assets/Secondary/Staff/Mr. Pragati-Redkar.jpg'
    },
    {
      name: 'Mr. Niranjan Ghadi',
      position: 'Peon',
      department: 'IX',
      image: 'assets/Secondary/Staff/Mr. Niranjan Ghadi.jpg'
    },
    {
      name: 'Mr. Rakesh Vaidya',
      position: 'Peon',
      department: 'IX',
      image: 'assets/Secondary/Staff/Mr. Rakesh Vaidya.jpg'
    },
    {
      name: 'Mr. Mangesh Mogre',
      position: 'Peon',
      department: 'XI',
      image: 'assets/Secondary/Staff/Mr. Mangesh Mogre.jpg'
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
