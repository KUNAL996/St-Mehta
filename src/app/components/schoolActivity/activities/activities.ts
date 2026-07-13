import { Component } from '@angular/core';
import { Footer } from "../../../core/modules/footer/footer";
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-activities',
  imports: [Footer],
  templateUrl: './activities.html',
  styleUrl: './activities.css'
})
export class Activities {
  activeTab = 'pre-primary';
  activeSubTab: { [key: string]: string } = {
    'pre-primary': 'curricular',
    'primary': 'curricular',
    'secondary': 'curricular'
  };
  activeGradeLevel: { [key: string]: string } = {
    'curricular': 'nursery',
    'co-curricular': 'nursery',
    'extra-curricular': 'nursery'
  };

  private sliderStates: { [key: number]: { currentIndex: number, intervalId?: any } } = {};
  private readonly SLIDE_INTERVAL = 5000;

  tabs = [
    { id: 'pre-primary', label: 'Pre Primary', active: true },
    { id: 'primary', label: 'Primary', active: false },
    { id: 'secondary', label: 'Secondary', active: false }
  ];

  subTabs = [
    { id: 'curricular', label: 'Curricular' },
    { id: 'co-curricular', label: 'Co-Curricular' },
    { id: 'extra-curricular', label: 'Extra-Curricular' }
  ];

  gradeLevels = [
    { id: 'nursery', label: 'Nursery' },
    { id: 'jr-kg', label: 'Jr. KG' },
    { id: 'sr-kg', label: 'Sr. KG' }
  ];

  activitiesData = {
    'pre-primary': {
      title: 'Pre-Primary Section Activities',
      curricular: {
        nursery: [
          {
            id: 1,
            title: 'Balloon Thumb printing',
            images: ['https://i.postimg.cc/PqN374Ck/Balloon-Thumb-printing-Nursery.jpg'],
            description: 'Tiny hands create balloon prints using thumb painting techniques.',
            color: 'red'
          },
          {
            id: 2,
            title: 'Matki Decoration for Janmashtami',
            images: ['https://i.imghippo.com/files/lB4184FQ.jpeg'],
            description: 'Creative card decoration activity themed around Janmashtami celebrations.',
            color: 'blue'
          },
          {
            id: 3,
            title: 'Identifying Fruits',
            images: ['https://i.imghippo.com/files/oK3421rh.jpeg'],
            description: 'Fun activity where children learn to identify different fruits through pictures.',
            color: 'pink'
          },
          {
            id: 4,
            title: 'Jute Printing on Animals Drawings',
            images: ['https://i.imghippo.com/files/DC1044cuQ.jpeg'],
            description: 'Using jute pieces to create textured prints on animal drawings.',
            color: 'red'
          },
          {
            id: 5,
            title: 'Puppet Show',
            images: ['https://i.imghippo.com/files/BPtA2804yCg.jpeg'],
            description: 'Engaging puppet show activity where children create and perform with their own puppets.',
            color: 'blue'
          },
          {
            id: 6,
            title: 'Block Printing',
            images: ['https://i.imghippo.com/files/Cua5346jtQ.jpeg'],
            description: 'Creative block printing activity where children use carved blocks to create colorful patterns.',
            color: 'pink'
          },
        ],
        'jr-kg': [
          {
            id: 1,
            title: 'Cat puppet making using paper bags',
            images: ['https://i.postimg.cc/7hSQVZfG/Cat-puppet-making-using-paper-bags-Sr-KG-A.jpg'],
            description: 'Creative puppet craft activity using paper bags to spark imagination.',
            color: 'red'
          },
          {
            id: 2,
            title: 'Parent child activity on Fruits & vegetables',
            images: ['https://i.postimg.cc/PxY4GFh0/Parent-child-activity-on-Fruits-vegetables-Salad-Dressing-Jr-KG.jpg'],
            description: 'Parents and children prepare beautiful idol using Fruits and Vegetables.',
            color: 'blue'
          },
          {
            id: 3,
            title: 'Raksha Bandhan Greeting Card Making',
            images: ['https://i.imghippo.com/files/GMSc5641ZVE.jpeg'],
            description: 'A dash of colours, a touch of love - greeting cards for Raksha Bandhan',
            color: 'pink'
          },
          {
            id: 4,
            title: 'Rakhi Drawing',
            images: ['https://i.imghippo.com/files/TMAf4540Eo.jpeg'],
            description: 'Expressing love through vibrant Rakhi drawings.',
            color: 'red'
          },
          {
            id: 5,
            title: 'Dandiya Decoration',
            images: ['https://i.imghippo.com/files/nftD6419Oo.jpeg'],
            description: 'Colorful Dandiya-themed drawings to celebrate the festive spirit.',
            color: 'blue'
          },
          {
            id: 6,
            title: 'Fancy Dress Activity',
            images: ['https://i.imghippo.com/files/wd1673bv.jpeg'],
            description: 'Kids showcase their creativity and confidence in a fun fancy dress event.',
            color: 'pink'
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
      'co-curricular': {
        nursery: [
          {
            id: 1,
            title: 'Tree Plantation',
            images: ['https://i.imghippo.com/files/VaW2737AMU.jpeg'],
            description: 'Children plant saplings, learning about nature and responsibility.',
            color: 'red'
          },
          {
            id: 2,
            title: 'Watering the plants',
            images: ['https://i.imghippo.com/files/KQ4626Q.jpeg'],
            description: 'Kids actively water the plants they have planted, fostering care for the environment.',
            color: 'blue'
          },
          {
            id: 3,
            title: 'Learning the importance of protecting the environment',
            images: ['https://i.imghippo.com/files/CEl3364TdA.jpeg'],
            description: 'Engaging activities that teach children about environmental conservation and protection.',
            color: 'pink'
          },
          {
            id: 4,
            title: 'Fun Carnival',
            images: ['https://i.postimg.cc/W4KWckZq/Fun-Carnival-2.jpg'],
            description: 'A lively carnival with games and activities that spark joy and laughter.',
            color: 'red'
          },
          {
            id: 5,
            title: 'Filling soil in pots',
            images: ['https://i.imghippo.com/files/pfm7339FM.jpeg'],
            description: 'Children get hands-on experience with soil while planting in pots, learning about plant growth.',
            color: 'blue'
          },
        ],
        'jr-kg': [
          {
            id: 1,
            title: 'Cookie decoration parent child activity',
            images: ['https://i.postimg.cc/5NMrtLRw/Cookie-decoration-parent-child-activity-playgroup-Nursery.jpg'],
            description: 'Parents and kids bond while decorating cookies with colorful toppings.',
            color: 'red'
          },
          {
            id: 2,
            title: 'Parent Child activity on Healthy Diet',
            images: ['https://i.postimg.cc/L4kTN7x1/Sr-KG-Parent-Child-activity-on-Healthy-Diet.jpg'],
            description: 'An educational activity promoting healthy eating habits together.',
            color: 'blue'
          },
          {
            id: 3,
            title: 'Christmas Celebration',
            images: ['https://i.imghippo.com/files/VIal4990xRI.jpeg'],
            description: 'Festive activities celebrating Christmas with joy and togetherness.',
            color: 'pink'
          },
          {
            id: 4,
            title: 'Navaratri Celebration',
            images: ['https://i.imghippo.com/files/sbFg2888Y.jpeg'],
            description: 'Vibrant celebrations of Navaratri with traditional attire.',
            color: 'red'
          },
          {
            id: 5,
            title: 'Blue Day Celebration',
            images: ['https://i.imghippo.com/files/cRfv9423CAg.jpeg'],
            description: 'Children celebrate Blue Day by wearing blue and engaging in fun activities themed around the color.',
            color: 'blue'
          },
          {
            id: 6,
            title: 'Teaching through role play',
            images: ['https://i.imghippo.com/files/HwBm2926dzc.jpeg'],
            description: 'Interactive role play sessions where children learn through acting out different scenarios.',
            color: 'pink'
          },
        ],
        'sr-kg': [
          {
            id: 1,
            title: 'Tree Plantation',
            images: ['https://i.postimg.cc/d3hWrqXp/Tree-Plantation.jpg'],
            description: 'Kids participate in planting trees to promote environmental awareness.',
            color: 'red'
          },
          {
            id: 3,
            title: 'Diwali Decoration',
            images: ['https://i.imghippo.com/files/Xnhm1621uGI.jpeg'],
            description: 'Creative Diwali decorations made by children to celebrate the festival of lights.',
            color: 'blue'
          },
          {
            id: 4,
            title: 'Republic Day Celebration',
            images: ['https://i.imghippo.com/files/RDB9330Okw.jpeg'],
            description: 'Patriotic activities and celebrations for Republic Day.',
            color: 'pink'
          },
          {
            id: 5,
            title: 'Workshop on Good Touch and Bad Touch',
            images: ['https://i.imghippo.com/files/TbJ2718rI.jpeg'],
            description: 'Important workshop educating children about personal safety and boundaries.',
            color: 'red'
          },
        ]
      },
      'extra-curricular': {
        nursery: [
          {
            id: 1,
            title: 'Ball Pool',
            images: ['https://i.postimg.cc/Y95sYWqB/Ball-pool.jpg'],
            description: 'Children enjoy diving and playing in a colorful ball pit, enhancing motor skills.',
            color: 'red'
          },
          {
            id: 2,
            title: 'Enjoying the Aeroplane Ride',
            images: ['https://i.postimg.cc/t4BvDfC5/Enjoying-the-Aeroplane-ride.jpg'],
            description: 'Kids experience the thrill of an airplane-themed ride in a safe environment.',
            color: 'blue'
          },
          {
            id: 3,
            title: 'Balloon shooter in Play & learn',
            images: ['https://i.postimg.cc/HWMKHBBY/Balloon-shooter-in-Play-learn-phoenix-Mall.jpg'],
            description: 'Aiming and popping balloons improves focus and hand-eye coordination.',
            color: 'pink'
          },
          {
            id: 4,
            title: 'Picnic',
            images: ['https://i.imghippo.com/files/SF7229RRE.jpeg'],
            description: 'Outdoor picnic where children having fun.',
            color: 'red'
          },
          {
            id: 3,
            title: 'Children enjoying Animated Movie',
            images: ['https://i.imghippo.com/files/BTK7396.jpeg'],
            description: 'Kids watch and enjoy an animated movie, fostering imagination and relaxation.',
            color: 'blue'
          },
        ],
        'jr-kg': [
          {
            id: 15,
            title: 'Free play area',
            images: ['https://i.postimg.cc/rFCPRsB7/Free-play-area-2.jpg'],
            description: 'Children engage in open-ended play, exploring and socializing freely.',
            color: 'red'
          },
          {
            id: 16,
            title: 'Learning Recycling of water',
            images: ['https://i.postimg.cc/DwwBWgdb/Learning-recyling-of-water-at-Play-Learn-Phoenix-mall.jpg'],
            description: 'Children learn about water recycling through interactive displays.',
            color: 'blue'
          },
          {
            id: 4,
            title: 'Having fun playing at Play & Learn',
            images: ['https://i.postimg.cc/h4VCNhth/Having-fun-playing-at-Play-Learn-Phoenix-mall.jpg'],
            description: 'Kids enjoy various fun activities in a colorful play zone.',
            color: 'pink'
          },
          {
            id: 5,
            title: 'Picnic at Xenos Play Area',
            images: ['https://i.imghippo.com/files/myB1678co.jpeg',
              'https://i.imghippo.com/files/Arky5237fvc.jpeg',
              'https://i.imghippo.com/files/YCwE9043xY.jpeg'],
            description: 'Outdoor picnic where children having fun at Xenos Play Area.',
            color: 'red'
          },
        ],
        'sr-kg': [
          {
            id: 2,
            title: 'Fun Carnival',
            images: ['https://i.postimg.cc/4d98fxvL/Fun-carnival-3.jpg',
              'https://i.postimg.cc/tJGBYG2X/Fun-Carnival.jpg'],
            description: 'A lively carnival with games and activities that spark joy and laughter.',
            color: 'red'
          },
          {
            id: 17,
            title: 'Kids enjoying Sandpit at Play & Learn',
            images: ['https://i.postimg.cc/PJb2DVR1/Kids-enjoying-Sandpit-at-Play-Learn-Phoenix-mall.jpg'],
            description: 'Sensory play in a sandpit allows children to dig, build, and explore.',
            color: 'blue'
          },
          {
            id: 2,
            title: 'Picnic at Xenos Play Area',
            images: ['https://i.imghippo.com/files/ZjY2737GY.jpeg'],
            description: 'Outdoor picnic where children having fun at Xenos Play Area.',
            color: 'pink'
          },
        ]
      }
    },
    'primary': {
      title: 'Primary Section Activities',
      curricular: [
        {
          id: 18,
          title: 'Drawing and Coloring',
          images: ['https://i.imghippo.com/files/AHot3777cIw.jpg'],
          description: 'Students engage in creative drawing and coloring activities to enhance artistic skills.',
          color: 'red'
        },
        {
          id: 19,
          title: 'Coding',
          images: ['https://i.postimg.cc/7Z7zBJVZ/CODING.jpg'],
          description: 'Kids explore coding through colorful blocks, learning logic and sequencing.',
          color: 'blue'
        },
        {
          id: 20,
          title: 'Computer Activity',
          images: ['https://i.postimg.cc/yYDcZb39/COMPUTER-ACTIVITY.jpg'],
          description: 'Students design and label computer parts using paper cutouts.',
          color: 'pink'
        },
        {
          id: 21,
          title: 'Maths Activity',
          images: ['https://i.postimg.cc/vHxxBxCt/Maths-activity-3.jpg'],
          description: 'Fun mathematical games and puzzles to make learning numbers enjoyable.',
          color: 'red'
        },
        {
          id: 19,
          title: 'Meditation',
          images: ['https://i.imghippo.com/files/FFqO3249MFs.jpeg'],
          description: 'Meditation sessions to help students relax and improve focus.',
          color: 'blue'
        },
        {
          id: 20,
          title: 'Physical Exercise',
          images: ['https://i.imghippo.com/files/mdvI9345jDI.jpg'],
          description: 'Daily physical exercises to promote health and fitness among students.',
          color: 'pink'
        },
      ],
      'co-curricular': [
        {
          id: 22,
          title: 'Rakhi Making',
          images: ['https://i.postimg.cc/XJFZrntJ/10-Rakhi-Making.jpg'],
          description: 'Creative activity where students design and craft decorative rakhis.',
          color: 'red'
        },
        {
          id: 23,
          title: 'Flute Decoration',
          images: ['https://i.postimg.cc/k4x4nftR/8-Flute-Decoration.jpg'],
          description: 'Artistic activity where students design and decorate flutes.',
          color: 'blue'
        },
        {
          id: 24,
          title: 'Matki Decoration',
          images: ['https://i.postimg.cc/j5V20GCr/9-Matki-Decoration.jpg'],
          description: 'Creative matki decoration using vibrant colors and patterns.',
          color: 'pink'
        },
        {
          id: 25,
          title: 'Diya Making',
          images: ['https://i.postimg.cc/0Nswh5Wd/Diwali-Activity-Diya-Making.jpg'],
          description: 'Creative Diwali activity where students design and decorate traditional diyas.',
          color: 'red'
        },
        {
          id: 26,
          title: 'Fancy Dress Activity',
          images: ['https://i.postimg.cc/fLW0T2hV/FANCY-DRESS-ACTIVITY.jpg'],
          description: 'Students dress up as various characters, enhancing confidence and imagination.',
          color: 'blue'
        },
        {
          id: 24,
          title: 'Taekwando',
          images: ['https://i.imghippo.com/files/hB5846rk.jpeg'],
          description: 'Martial arts training that builds discipline, focus, and physical strength.',
          color: 'pink'
        },
        {
          id: 25,
          title: 'Chess',
          images: ['https://i.imghippo.com/files/CVgs6880UnA.jpeg'],
          description: 'Strategic chess matches develop critical thinking and problem-solving skills.',
          color: 'red'
        },
        {
          id: 26,
          title: 'Gymnastics',
          images: ['https://i.imghippo.com/files/JkDg2363Uk.jpeg'],
          description: 'Physical exercises to develop flexibility, coordination, and strength.',
          color: 'blue'
        },
        {
          id: 24,
          title: 'Rope Malakam',
          images: ['https://i.imghippo.com/files/zGG8213EKg.jpeg'],
          description: 'Rope climbing activities to enhance strength and agility.',
          color: 'pink'
        },
        {
          id: 25,
          title: 'Table Tennis',
          images: ['https://i.imghippo.com/files/NmOt7920grs.jpeg'],
          description: 'Practicing table tennis to improve reflexes and hand-eye coordination.',
          color: 'red'
        },
        {
          id: 31,
          title: 'Music Class',
          images: ['https://i.postimg.cc/yNjk5mSs/Music-Class.jpg'],
          description: 'Interactive music session with instruments and singing to nurture musical talent.',
          color: 'blue'
        }
      ],
      'extra-curricular': [
        {
          id: 27,
          title: 'Book Balancing',
          images: ['https://i.imghippo.com/files/Hssz4033Kw.jpeg'],
          description: 'Fun activity where students balance books on their heads to improve posture and concentration.',
          color: 'red'
        },
        {
          id: 28,
          title: 'Cartoon Watching',
          images: ['https://i.imghippo.com/files/AajH7921OX.jpg'],
          description: 'Students watch cartoons to relax and enjoy storytelling through animation.',
          color: 'blue'
        },
        {
          id: 29,
          title: 'Fun Fair',
          images: ['https://i.imghippo.com/files/Ho5109MKU.jpg'],
          description: 'A lively fun fair with games and activities that spark joy and laughter among students.',
          color: 'pink'
        },
        {
          id: 27,
          title: 'Kidzania Visit',
          images: ['https://i.imghippo.com/files/Zzd3421Ltc.jpg'],
          description: 'Educational outing to Kidzania where students engage in role-playing various professions.',
          color: 'red'
        },
        {
          id: 28,
          title: 'Picnic at Paradise Funland',
          images: ['https://i.imghippo.com/files/JbqW4717PEc.jpg'],
          description: 'Fun-filled picnic fostering camaraderie and relaxation among students.',
          color: 'blue'
        },
        {
          id: 29,
          title: 'Sack Race',
          images: ['https://i.imghippo.com/files/tfF2259cps.jpeg'],
          description: 'Exciting sack race event promoting physical activity and friendly competition.',
          color: 'pink'
        },
        {
          id: 27,
          title: 'Visit to Muso Exhibition',
          images: ['https://i.imghippo.com/files/UJo1871Ma.jpeg'],
          description: 'Educational visit to Muso Exhibition.',
          color: 'red'
        },
      ]
    },
    'secondary': {
      title: 'Secondary Section Activities',
      curricular: [
        {
          id: 1,
          title: 'Art Class',
          images: ['https://i.imghippo.com/files/XlK9805E.jpeg'],
          description: 'Art classes where students explore various techniques to express their creativity.',
          color: 'red'
        },
        {
          id: 2,
          title: 'Piano Keyboard',
          images: ['https://i.imghippo.com/files/G3577Rk.jpg'],
          description: 'Piano keyboard classes to develop musical skills and appreciation.',
          color: 'blue'
        },
        {
          id: 3,
          title: 'PhysicaL Training',
          images: ['https://i.imghippo.com/files/zfAV6843vFs.jpeg'],
          description: 'Physical training sessions to improve health and fitness.',
          color: 'pink'
        },
        {
          id: 4,
          title: 'Project & Activity',
          images: ['https://i.imghippo.com/files/QVMe7796Pio.jpg', 
            'https://i.imghippo.com/files/UJeL8080Ozs.jpeg'],
          description: 'Students showcasing their handmade math models, demonstrating creativity and understanding of concepts.',
          color: 'red'
        },
        {
          id: 5,
          title: 'Language Club',
          images: ['https://i.imghippo.com/files/mNz8452Sc.jpeg',
                    'https://i.imghippo.com/files/LWSq8074VqY.jpeg'],
          description: 'A classroom activity where students participate in engaging English word games led by a teacher.',
          color: 'blue'
        },
        {
          id: 6,
          title: 'Computer Lab',
          images: ['https://i.imghippo.com/files/zqA4309lw.jpeg'],
          description: 'Students engage in computer-based learning like Scratch, MS Office(Word, Excel and PowerPoint), HTML, CSS, Python, Photoshop and Artificial Intelligence',
          color: 'pink'
        },
        {
          id: 7,
          title: 'Gymnastics',
          images: ['https://i.imghippo.com/files/WDav5103uk.jpeg'],
          description: 'Gymnastics routines to enhance flexibility, strength, and coordination.',
          color: 'red'
        },
        {
          id: 8,
          title: 'Rope Malakam',
          images: ['https://i.imghippo.com/files/D7362Hps.jpeg'],
          description: 'Rope climbing activities to enhance strength and agility.',
          color: 'blue'
        },
        {
          id: 9,
          title: 'Table Tennis',
          images: ['https://i.imghippo.com/files/kgU4222qic.jpeg'],
          description: 'Daily physical workouts and drills to improve health and discipline.',
          color: 'pink'
        },
        {
          id: 10,
          title: 'Taekwondo',
          images: ['https://i.postimg.cc/prYQG1zk/Taekwondo.jpg'],
          description: 'Martial arts training that builds discipline, focus, and physical strength.',
          color: 'red'
        },
        {
          id: 11,
          title: 'Chess',
          images: ['https://i.postimg.cc/FRSVcKKM/Chess.jpg'],
          description: 'Strategic chess matches develop critical thinking and problem-solving skills.',
          color: 'blue'
        },
        {
          id: 12,
          title: 'Basketball',
          images: ['https://i.postimg.cc/rwyjbch4/Basketball.jpg'],
          description: 'Competitive basketball training sessions that enhance teamwork and physical fitness.',
          color: 'pink'
        },
        {
          id: 13,
          title: 'Tabla',
          images: ['https://i.imghippo.com/files/tdq5149VuY.jpg'],
          description: 'Tabla classes to nurture musical talent and rhythm skills.',
          color: 'red'
        },
        {
          id: 14,
          title: 'Vocal Music',
          images: ['https://i.imghippo.com/files/RHD4550xM.jpg'],
          description: 'Vocal music sessions to develop singing skills and musical expression.',
          color: 'blue'
        },
        {
          id: 15,
          title: 'Guitar',
          images: ['https://i.imghippo.com/files/duZo9019kI.jpg'],
          description: 'Guitar classes to promote musical creativity and skill development.',
          color: 'pink'
        },
      ],
      'co-curricular': [
        {
          id: 1,
          title: "Speech & Drama",
          images: ['https://i.imghippo.com/files/Kr7802cRs.jpg',
            'https://i.imghippo.com/files/LFp7413HhU.jpeg',
            'https://i.imghippo.com/files/ugrm9083wo.jpeg'
          ],
          description: 'Speech and Drama performances that enhance communication skills and confidence.',
          color: 'pink'
        },
        {
          id: 2,
          title: 'Vist to Nade',
          images: ['https://i.imghippo.com/files/oWc2858JwM.jpeg',
            'https://i.imghippo.com/files/licU8334IY.jpeg'
          ],
          description: 'Educational visit to an exhibition promoting cultural diversity.',
          color: 'red'
        },
        {
          id: 3,
          title: 'Debate Competition',
          images: ['https://i.imghippo.com/files/BWy8311Zgg.jpeg'],
          description: 'Debate competitions that encourage critical thinking and public speaking skills.',
          color: 'blue'
        },
        {
          id: 4,
          title: "Elocution",
          images: ['https://i.imghippo.com/files/hTk1247fw.jpeg'],
          description: 'Elocution contests that help students improve their articulation and presentation skills.',
          color: 'pink'
        },
        {
          id: 5,
          title: 'Singing Competition',
          images: ['https://i.imghippo.com/files/TYR3392o.jpeg'],
          description: 'Singing competitions that foster musical talent and confidence.',
          color: 'red'
        },
        {
          id: 6,
          title: "Awareness Programme on Children's Safety",
          images: ['https://i.imghippo.com/files/Ulzt5531IeI.jpeg'],
          description: 'Important workshop educating students about personal safety and boundaries.',
          color: 'blue'
        },
        {
          id: 7,
          title: 'Vist to an Exhibition - Vasudev Kutumbakam ki Aur',
          images: ['https://i.imghippo.com/files/FNm5951GYM.jpeg',
            'https://i.imghippo.com/files/pOWh5363tw.jpeg'
          ],
          description: 'Educational visit to an exhibition promoting global unity and cultural diversity.',
          color: 'pink'
        },
        {
          id: 8,
          title: 'Eco club workshop on Eco friendly Ganapathy',
          images: ['https://i.postimg.cc/c4Z0FYQW/As-part-of-the-Eco-club-students-attended-a-workshop-on-Eco-friendly-Ganapathy.jpg'],
          description: 'Workshop promoting environmental awareness and sustainability.',
          color: 'red'
        },
        {
          id: 9,
          title: 'Educational visit to The museum of Solutions',
          images: ['https://i.imghippo.com/files/PJYA1131GA.jpeg'],
          description: 'Educational visit enhancing learning through interactive exhibits.',
          color: 'blue'
        },
        {
          id: 10,
          title: 'Eye Checkup Camp',
          images: ['https://i.imghippo.com/files/dxnw1680Cy.jpeg'],
          description: "Eye check up camp by Rotary Club Of Mumbai Queen's Necklace",
          color: 'pink'
        },
        {
          id: 11,
          title: 'Good Touch and Bad Touch Workshop',
          images: ['https://i.imghippo.com/files/Kt2370g.jpeg'],
          description: 'Important workshop educating students about personal safety and boundaries.',
          color: 'red'
        },
        {
          id: 12,
          title: 'Maranatha Orphanage Visit',
          images: ['https://i.imghippo.com/files/vBPI9499vU.jpeg'],
          description: 'Interact members visited  the Maranatha Harvest Mission Orphanage Society at Chembur',
          color: 'blue'
        },
        {
          id: 13,
          title: 'Sevadhan Centre Visit',
          images: ['https://i.imghippo.com/files/NEEI4361yeg.jpeg'],
          description: "Interact members visited Sevadhan centre - A school for special children",
          color: 'pink'
        },
        {
          id: 14,
          title: 'N Ward Science Exhibition',
          images: ['https://i.imghippo.com/files/fzGG2187zJM.jpeg',
            'https://i.imghippo.com/files/Pj1182sw.jpeg'
          ],
          description: "N Ward Science Exhibition  - Sr. and Jr. Group  project on Waste Management",
          color: 'red'
        },
      ],
      'extra-curricular': [
        {
          id: 1,
          title: 'Picnic to Shangrila Resort',
          images: ['https://i.imghippo.com/files/rCn9004GMI.jpeg',
            'https://i.imghippo.com/files/jGK5785wwY.jpeg',
            'https://i.imghippo.com/files/lezR5717HZs.jpeg'
          ],
          description: 'Students enjoy a fun-filled picnic at Shangrila Resort.',
          color: 'red'
        },
        {
          id: 2,
          title: 'Picnic at Paradise Funland',
          images: ['https://i.postimg.cc/RhzQTz6N/Students-of-Std-V-to-Std-X-were-taken-for-a-picnic-on-24th-December-to-Paradise-Funland.jpg'],
          description: 'Fun-filled picnic fostering camaraderie and relaxation among students.',
          color: 'blue'
        },
        {
          id: 3,
          title: 'Swimming Pool',
          images: ['https://i.imghippo.com/files/IZAJ7288KtQ.jpeg'],
          description: 'Students enjoying swimming pool by having dance and playing in water.',
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

  selectTab(tabId: string): void {
    this.activeTab = tabId;
    this.tabs.forEach(tab => {
      tab.active = tab.id === tabId;
    });
    this.initializeSliders();
  }

  selectSubTab(subTabId: string): void {
    this.activeSubTab[this.activeTab] = subTabId;
    this.activeGradeLevel[subTabId] = 'nursery';
    this.initializeSliders();
  }

  selectGradeLevel(gradeLevel: string): void {
    const subTab = this.activeSubTab[this.activeTab];
    this.activeGradeLevel[subTab] = gradeLevel;
    this.initializeSliders();
  }

  getCurrentActivities() {
    if (this.activeTab === 'pre-primary') {
      const subTab = this.activeSubTab[this.activeTab];
      const gradeLevel = this.activeGradeLevel[subTab];
      const tabData = this.activitiesData[this.activeTab];
      const activities = (tabData[subTab as keyof typeof tabData] as any)[gradeLevel] || [];
      return {
        title: tabData.title,
        activities: activities
      };
    } else {
      const tabData = this.activitiesData[this.activeTab as keyof typeof this.activitiesData];
      const subTab = this.activeSubTab[this.activeTab];
      return {
        title: tabData.title,
        activities: (tabData[subTab as keyof typeof tabData] as any) || []
      };
    }
  }

  initializeSliders(): void {
    Object.values(this.sliderStates).forEach(state => {
      if (state.intervalId) {
        clearInterval(state.intervalId);
      }
    });
    this.sliderStates = {};

    const activities = this.getCurrentActivities().activities;
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
    return this.getCurrentActivities().activities.find((activity: any) => activity.id === activityId);
  }
}
