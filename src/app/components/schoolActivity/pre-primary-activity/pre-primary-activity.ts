import { Component } from '@angular/core';
import { Footer } from '../../../core/modules/footer/footer';

@Component({
  selector: 'app-pre-primary-activity',
  imports: [Footer],
  templateUrl: './pre-primary-activity.html',
  styleUrl: './pre-primary-activity.css'
})
export class PrePrimaryActivity {
  activeSubTab = 'curricular';
  activeGradeLevel: { [key: string]: string } = {
    'curricular': 'nursery',
    // 'co-curricular': 'nursery',
    'extra-curricular': 'nursery'
  };

  private sliderStates: { [key: number]: { currentIndex: number, intervalId?: any } } = {};

  subTabs = [
    { id: 'curricular', label: 'Curricular' },
    // { id: 'co-curricular', label: 'Co-Curricular' },
    { id: 'extra-curricular', label: 'Extra-Curricular' }
  ];

  gradeLevels = [
    { id: 'nursery', label: 'Nursery' },
    { id: 'jr-kg', label: 'Jr. KG' },
    { id: 'sr-kg', label: 'Sr. KG' }
  ];

  activitiesData = {
    curricular: {
      nursery: [
        {
          id: 1,
          title: 'Balloon Thumb printing',
          images: ['assets/preprimary/Activities/Curricular/Nursery/Balloon Thumb printing.jpg'],
          description: 'Tiny hands create balloon prints using thumb painting techniques.',
          color: 'red'
        },
        {
          id: 2,
          title: 'Matki Decoration for Janmashtami',
          images: ['assets/preprimary/Activities/Curricular/Nursery/Matki Decoration.jpg'],
          description: 'Creative card decoration activity themed around Janmashtami celebrations.',
          color: 'blue'
        },
        {
          id: 3,
          title: 'Identifying Fruits',
          images: ['assets/preprimary/Activities/Curricular/Nursery/Identifying Fruits.jpeg'],
          description: 'Fun activity where children learn to identify different fruits through pictures.',
          color: 'pink'
        },
        {
          id: 4,
          title: 'Jute Printing on Animals Drawings',
          images: ['assets/preprimary/Activities/Curricular/Nursery/Jute Printing on Animals Drawings.jpeg'],
          description: 'Using jute pieces to create textured prints on animal drawings.',
          color: 'red'
        },
        {
          id: 5,
          title: 'Puppet Show',
          images: ['assets/preprimary/Activities/Curricular/Nursery/Puppet Show.jpeg'],
          description: 'An engaging Puppet Show where students learn important values such as kindness,honesty and sharing through full filled stories.',
          color: 'blue'
        },
        {
          id: 6,
          title: 'Block Printing',
          images: ['assets/preprimary/Activities/Curricular/Nursery/Block Printing.jpeg'],
          description: 'Creative block printing activity where children use carved blocks to create colorful patterns.',
          color: 'pink'
        },
      ],
      'jr-kg': [
        {
          id: 1,
          title: 'Cat puppet making using paper bags',
          images: ['assets/preprimary/Activities/Curricular/Jr/Cat puppet making using paper bags.jpg'],
          description: 'Creative puppet craft activity using paper bags to spark imagination.',
          color: 'red'
        },
        {
          id: 2,
          title: 'Raksha Bandhan Greeting Card Making and Rakhi Drawing',
          images: ['assets/preprimary/Activities/Curricular/Jr/Raksha Bandhan Greeting Card Making.jpeg',
            'assets/preprimary/Activities/Curricular/Jr/Rakhi Drawing.jpeg',
          ],
          description: 'A dash of colours, a touch of love - greeting cards for Raksha Bandhan and Rakhi Drawing',
          color: 'pink'
        },
        {
          id: 3,
          title: 'Role play - Community Helpers',
          images: ['assets/preprimary/Activities/Curricular/Jr/Role play - Community Helpers.jpg'],
          description: 'Role play - Community Helpers where children learn about the importance of community helpers.',
          color: 'red'
        },
        {
          id: 4,
          title: 'Learning Number sequencing',
          images: ['assets/preprimary/Activities/Curricular/Jr/Learning Number sequencing.jpg'],
          description: 'Learning Number sequencing where children learn to sequence numbers in a given order.',
          color: 'blue'
        },
        {
          id: 5,
          title: 'Learning Alphabets',
          images: ['assets/preprimary/Activities/Curricular/Jr/Learning Alphabets.jpeg'],
          description: 'Learning Alphabets where children learn to recognize alphabets.',
          color: 'red'
        },
      ],
      'sr-kg': [
        {
          id: 1,
          title: 'Thali Decoration',
          images: ['https://i.imghippo.com/files/lx5805DFc.jpeg'],
          description: 'Children decorate traditional thalis with leafs and flowers.',
          color: 'red'
        },
        {
          id: 2,
          title: 'Pot Decoration',
          images: ['https://i.postimg.cc/xCFqj9RZ/Matka-decoration.jpg'],
          description: 'Decorating traditional clay pots with colors and patterns, encouraging creativity.',
          color: 'blue'
        },
        {
          id: 3,
          title: 'Raksha Bandhan Greeting Card Making',
          images: ['https://i.imghippo.com/files/KbvH8480Mc.jpeg'],
          description: 'A dash of colours, a touch of love - greeting cards for Raksha Bandhan',
          color: 'pink'
        },
        {
          id: 4,
          title: 'Adding colours to imagination',
          images: ['https://i.imghippo.com/files/RKM2042lFY.jpeg'],
          description: 'Artistic expression through vibrant drawings and colors.',
          color: 'red'
        },
        {
          id: 5,
          title: 'Paper Quilling',
          images: ['https://i.imghippo.com/files/MyLc8320Qv.jpeg'],
          description: 'Bright and cheerful balloon-themed coloring activity.',
          color: 'blue'
        },
        {
          id: 6,
          title: 'Snail Making',
          images: ['https://i.imghippo.com/files/cnu8826Is.jpeg'],
          description: 'Crafting adorable snails using paper and colors to enhance fine skills.',
          color: 'pink'
        },
        {
          id: 7,
          title: 'Princess Crown Making',
          images: ['https://i.imghippo.com/files/kmNK6310Oc.jpeg'],
          description: 'Creating beautiful princess crowns using craft materials, fostering creativity and imagination.',
          color: 'red'
        },
        {
          id: 8,
          title: 'Bucket Decoration',
          images: ['https://i.imghippo.com/files/Ana4254lxc.jpeg'],
          description: 'Decorating buckets with vibrant colors and patterns for a fun craft activity.',
          color: 'blue'
        },
        {
          id: 9,
          title: 'Teaching alphabets & numbers',
          images: ['https://i.imghippo.com/files/CKZ8700Bws.jpeg'],
          description: 'Engaging activities that teach children alphabets and numbers through colorful visuals and interactive methods.',
          color: 'pink'
        },
      ]
    },
    // 'co-curricular': {
    //   nursery: [
    //     {
    //       id: 1,
    //       title: 'Tree Plantation',
    //       images: ['https://i.imghippo.com/files/VaW2737AMU.jpeg'],
    //       description: 'Children plant saplings, learning about nature and responsibility.',
    //       color: 'red'
    //     },
    //     {
    //       id: 2,
    //       title: 'Watering the plants',
    //       images: ['https://i.imghippo.com/files/KQ4626Q.jpeg'],
    //       description: 'Kids actively water the plants they have planted, fostering care for the environment.',
    //       color: 'blue'
    //     },
    //     {
    //       id: 3,
    //       title: 'Learning the importance of protecting the environment',
    //       images: ['https://i.imghippo.com/files/CEl3364TdA.jpeg'],
    //       description: 'Engaging activities that teach children about environmental conservation and protection.',
    //       color: 'pink'
    //     },
    //     {
    //       id: 4,
    //       title: 'Fun Carnival',
    //       images: ['https://i.postimg.cc/W4KWckZq/Fun-Carnival-2.jpg'],
    //       description: 'A lively carnival with games and activities that spark joy and laughter.',
    //       color: 'red'
    //     },
    //     {
    //       id: 5,
    //       title: 'Filling soil in pots',
    //       images: ['https://i.imghippo.com/files/pfm7339FM.jpeg'],
    //       description: 'Children get hands-on experience with soil while planting in pots, learning about plant growth.',
    //       color: 'blue'
    //     },
    //   ],
    //   'jr-kg': [
    //     {
    //       id: 1,
    //       title: 'Cookie decoration parent child activity',
    //       images: ['https://i.postimg.cc/5NMrtLRw/Cookie-decoration-parent-child-activity-playgroup-Nursery.jpg'],
    //       description: 'Parents and kids bond while decorating cookies with colorful toppings.',
    //       color: 'red'
    //     },
    //     {
    //       id: 2,
    //       title: 'Parent Child activity on Healthy Diet',
    //       images: ['https://i.postimg.cc/L4kTN7x1/Sr-KG-Parent-Child-activity-on-Healthy-Diet.jpg'],
    //       description: 'An educational activity promoting healthy eating habits together.',
    //       color: 'blue'
    //     },
    //     {
    //       id: 3,
    //       title: 'Christmas Celebration',
    //       images: ['https://i.imghippo.com/files/VIal4990xRI.jpeg'],
    //       description: 'Festive activities celebrating Christmas with joy and togetherness.',
    //       color: 'pink'
    //     },
    //     {
    //       id: 4,
    //       title: 'Navaratri Celebration',
    //       images: ['https://i.imghippo.com/files/sbFg2888Y.jpeg'],
    //       description: 'Vibrant celebrations of Navaratri with traditional attire.',
    //       color: 'red'
    //     },
    //     {
    //       id: 5,
    //       title: 'Blue Day Celebration',
    //       images: ['https://i.imghippo.com/files/cRfv9423CAg.jpeg'],
    //       description: 'Children celebrate Blue Day by wearing blue and engaging in fun activities themed around the color.',
    //       color: 'blue'
    //     },
    //     {
    //       id: 6,
    //       title: 'Teaching through role play',
    //       images: ['https://i.imghippo.com/files/HwBm2926dzc.jpeg'],
    //       description: 'Interactive role play sessions where children learn through acting out different scenarios.',
    //       color: 'pink'
    //     },
    //   ],
    //   'sr-kg': [
    //     {
    //       id: 1,
    //       title: 'Tree Plantation',
    //       images: ['https://i.postimg.cc/d3hWrqXp/Tree-Plantation.jpg'],
    //       description: 'Kids participate in planting trees to promote environmental awareness.',
    //       color: 'red'
    //     },
    //     {
    //       id: 3,
    //       title: 'Diwali Decoration',
    //       images: ['https://i.imghippo.com/files/Xnhm1621uGI.jpeg'],
    //       description: 'Creative Diwali decorations made by children to celebrate the festival of lights.',
    //       color: 'blue'
    //     },
    //     {
    //       id: 4,
    //       title: 'Republic Day Celebration',
    //       images: ['https://i.imghippo.com/files/RDB9330Okw.jpeg'],
    //       description: 'Patriotic activities and celebrations for Republic Day.',
    //       color: 'pink'
    //     },
    //     {
    //       id: 5,
    //       title: 'Workshop on Good Touch and Bad Touch',
    //       images: ['https://i.imghippo.com/files/TbJ2718rI.jpeg'],
    //       description: 'Important workshop educating children about personal safety and boundaries.',
    //       color: 'red'
    //     },
    //   ]
    // },
    'extra-curricular': {
      nursery: [
        {
          id: 1,
          title: 'Fun Carnival',
          images: ['assets/preprimary/Activities/ExtraCurricular/Nursery/Fun Carnival.jpg',
            'assets/preprimary/Activities/ExtraCurricular/Nursery/Fun-Carnival.jpg',
            'assets/preprimary/Activities/ExtraCurricular/Nursery/Fun Carnival 1.jpg',
            'assets/preprimary/Activities/ExtraCurricular/Nursery/Fun Carnival 2.jpg',
          ],
          description: 'An exciting day of fun filled rides, games and interactives in a safe and cheerful environment.',
          color: 'red'
        },
        {
          id: 2,
          title: 'Parent Child Activity',
          images: ['assets/preprimary/Activities/ExtraCurricular/Nursery/Parent child activity.jpg'],
          description: 'Parents and children bond while decorating card paper with colours.',
          color: 'blue'
        },
        {
          id: 3,
          title: 'Field Trip',
          images: ['assets/preprimary/Activities/ExtraCurricular/Nursery/Field trip.jpg'],
          description: 'Children enjoy a visit to a garden where learning meets nature.',
          color: 'pink'
        },
        {
          id: 4,
          title: 'Picnic',
          images: ['https://i.imghippo.com/files/SF7229RRE.jpeg'],
          description: 'An exciting outdoor picnic that offers children a perfect blend of fun, adventure and learning.',
          color: 'red'
        },
        {
          id: 5,
          title: 'Celebrating International Day of Yoga',
          images: ['assets/preprimary/Activities/ExtraCurricular/Nursery/International Yoga Day.jpeg',
          ],
          description: 'Kids celebrate International Day of Yoga by performing yoga poses and enjoying a fun yoga session.',
          color: 'blue'
        },
        {
          id: 6,
          title: 'Fancy Dress',
          images: ['assets/preprimary/Activities/ExtraCurricular/Nursery/Fancy Dress.jpg',
            'assets/preprimary/Activities/ExtraCurricular/Nursery/Fancy Dress 1.jpg',
            'assets/preprimary/Activities/ExtraCurricular/Nursery/Fancy Dress 2.jpg',
          ],
          description: 'Kids showcase their creativity and confidence in a fun fancy dress event.',
          color: 'pink'
        },
      ],
      'jr-kg': [
        {
          id: 1,
          title: 'Parent child activity',
          images: ['assets/preprimary/Activities/ExtraCurricular/Jr/Parent child activity on Fruits & vegetables.jpg'],
          description: 'Parents and children prepare beautiful idol using Fruits and Vegetables.',
          color: 'blue'
        },
        {
          id: 2,
          title: 'Sports Day - Running Race',
          images: ['assets/preprimary/Activities/ExtraCurricular/Jr/Sports Day - Running Race.jpg'],
          description: 'Sports Day - Running Race where children participate in a running race.',
          color: 'red'
        },
        {
          id: 3,
          title: 'Fun Carnival',
          images: ['assets/preprimary/Activities/ExtraCurricular/Jr/Fun Carnival.jpeg'],
          description: 'An exciting day of fun filled rides, games and interactives in a safe and cheerful environment',
          color: 'blue'
        },
        {
          id: 4,
          title: 'Fancy Dress',
          images: ['assets/preprimary/Activities/ExtraCurricular/Jr/Fancy Dress.jpeg',
            'assets/preprimary/Activities/ExtraCurricular/Jr/Fancy Dress 1.jpeg'
          ],
          description: 'Kids showcase their creativity and confidence in a fun fancy dress event.',
          color: 'pink'
        },
        {
          id: 5,
          title: 'Picnic at Xenos Play Area',
          images: ['assets/preprimary/Activities/ExtraCurricular/Jr/Xenos Play Area.jpg',
            'assets/preprimary/Activities/ExtraCurricular/Jr/Xenos Play Area 1.jpg',
            'assets/preprimary/Activities/ExtraCurricular/Jr/Xenos Play Area 2.jpeg',
            'assets/preprimary/Activities/ExtraCurricular/Jr/Xenos Play Area 3.jpg',
          ],
          description: 'Outdoor picnic where children having fun at Xenos Play Area.',
          color: 'red'
        },
        {
          id: 6,
          title: 'Navaratri Celebration',
          images: ['assets/preprimary/Activities/ExtraCurricular/Jr/Navratri Celebration.jpeg'],
          description: 'Children celebrate Navaratri by performing traditional dances and enjoying a fun navaratri event.',
          color: 'blue'
        },
        {
          id: 7,
          title: 'Celebrating International Yoga Day',
          images: ['assets/preprimary/Activities/ExtraCurricular/Jr/International yoga day.jpg',
            'assets/preprimary/Activities/ExtraCurricular/Jr/International yoga day 1.jpg'
          ],
          description: 'Kids celebrate International Day of Yoga by performing yoga poses and enjoying a fun yoga session.',
          color: 'pink'
        },
      ],
      'sr-kg': [
        {
          id: 1,
          title: 'Fun Carnival',
          images: ['assets/preprimary/Activities/ExtraCurricular/Sr/Fun Carnival 1.jpg',
            'assets/preprimary/Activities/ExtraCurricular/Sr/Fun Carnival.jpg'],
          description: 'A lively carnival with games and activities that spark joy and laughter.',
          color: 'red'
        },
        {
          id: 2,
          title: 'Kids enjoying Sandpit at Play & Learn',
          images: ['assets/preprimary/Activities/ExtraCurricular/Sr/Kids enjoying.jpg'],
          description: 'Sensory play in a sandpit allows children to dig, build, and explore.',
          color: 'blue'
        },
        {
          id: 3,
          title: 'Picnic at Xenos Play Area',
          images: ['assets/preprimary/Activities/ExtraCurricular/Sr/Xenos Play Area.jpeg'],
          description: 'Outdoor picnic where children having fun at Xenos Play Area.',
          color: 'pink'
        },
        {
          id: 4,
          title: 'Tree Plantation',
          images: ['assets/preprimary/Activities/ExtraCurricular/Sr/Tree Plantation.jpg'],
          description: 'Kids participate in planting trees to promote environmental awareness.',
          color: 'red'
        },
        {
          id: 5,
          title: 'Republic Day Celebration',
          images: ['assets/preprimary/Activities/ExtraCurricular/Sr/Republic Day Celebration.jpg'],
          description: 'Patriotic activities and celebrations for Republic Day.',
          color: 'blue'
        },
        {
          id: 6,
          title: 'Workshop on Good Touch and Bad Touch',
          images: ['assets/preprimary/Activities/ExtraCurricular/Sr/Good Touch and Bad Touch.jpeg'],
          description: `Important workshop ..................boundaries organised by Innerwheel Wheel Club Of Bombay Queen's Necklace.`,
          color: 'pink'
        },
      ]
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

  selectSubTab(subTabId: string): void {
    this.activeSubTab = subTabId;
    this.initializeSliders();
  }

  selectGradeLevel(gradeLevel: string): void {
    this.activeGradeLevel[this.activeSubTab] = gradeLevel;
    this.initializeSliders();
  }

  getCurrentActivities() {
    const gradeLevel = this.activeGradeLevel[this.activeSubTab];
    const activities = (this.activitiesData[this.activeSubTab as keyof typeof this.activitiesData] as any)[gradeLevel] || [];
    return activities;
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
