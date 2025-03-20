import IconLaptop from "@/assets/icons/ic_laptop.png";
import IconAward from "@/assets/icons/ic_award.png";
import IconTrained from "@/assets/icons/ic_trained.png";
import IconBusiness from "@/assets/icons/ic_business.png";
import IconStudents from "@/assets/icons/ic_students.png";
import IconWeb from "@/assets/icons/ic_web.png";
import Profile from "@/assets/profile.png";
import GDG from "@/assets/partners_gdg.png";
import HAM from "@/assets/partners_ham.png";
import K from "@/assets/partners_k.png";
import NJFP from "@/assets/partners_njfp.png";
import NTC from "@/assets/partners_ntc.png";
import ChairIcon from "@/assets/icons/ic_chair.png";
import EventIcon from "@/assets/icons/ic_event.png";
import FeminineIcon from "@/assets/icons/ic_woman.png";
import LocationImage from "@/assets/img_location.png";
import Logo from "@/assets/logo.png";
import InstagramIcon from "@/assets/icons/ic_instagram.png";
import TwitterIcon from "@/assets/icons/ic_twitter.png";
import LinkedInIcon from "@/assets/icons/ic_linkedin.png";
import FacebookIcon from "@/assets/icons/ic_facebook.png";
import EventImage1 from "@/assets/img_event1.png";
import EventImage2 from "@/assets/img_event2.png";
import EventImage3 from "@/assets/img_event3.png";
import EventImage4 from "@/assets/img_event4.png";
import UpcomingEvent1 from "@/assets/upcoming_event.png";
import PastEvent from "@/assets/past_event1.png";
import ProgramImage1 from "@/assets/img_program1.png";
import ProgramImage2 from "@/assets/img_program2.png";
import ProgramImage3 from "@/assets/img_program3.png";

export const heroOptionsData = [
  {
    icon: ChairIcon,
    title: "Co-Working Space",
    icon_width: 22.5,
    optionNumber: 1,
  },
  {
    icon: FeminineIcon,
    title: "Women 4Tech",
    icon_width: 15,
    optionNumber: 2,
  },
  {
    icon: EventIcon,
    title: "Events",
    icon_width: 18,
    optionNumber: 3,
  },
];

export const menus = [
  {
    name: "Kuagi Acad",
    link: "#",
    components: [
      {
        title: "Program Options",
        href: "/programs",
        description: "Explore Program Options",
      },
      {
        title: "Price Plans",
        href: "/price-plans",
        description: "Explore Price Plans",
      },
      {
        title: "Online Courses",
        href: "/courses/online",
        description: "Explore Online Courses",
      },
      {
        title: "Physical Courses",
        href: "/courses/physical",
        description: "Explore Physical Courses",
      },
    ],
  },
  {
    name: "Kuagi Business Hub",
    link: "#",
  },
  {
    name: "Kuagi Innovative Hub",
    link: "#",
  },
  {
    name: "Contact us",
    link: "#",
  },
];

export const testimonial_data = [
  {
    profile: Profile,
    name: "Ryan Olaonipekun",
    testimony:
      "My time using the kuagi resources Co-working space has been nothing but productive, from the level\
             of hospitality to a very conducive atmosphere. \
             This is a recommended spot for your remote jobs. Keep it up Kuagi Resources ✊🏽",
  },
  {
    profile: Profile,
    name: "Jane Doe",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    profile: Profile,
    name: "Will Smith",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const successData = [
  {
    icon: IconLaptop,
    numbers: "200+",
    description: "Job Created",
    className: "lg:col-start-4 lg:col-span-2",
  },
  {
    icon: IconAward,
    numbers: "150+",
    description: "Project Awarded",
    className: "lg:col-start-2 lg:col-end-4",
  },
  {
    icon: IconBusiness,
    numbers: "100+",
    description: "Business Empowered",
    className: "lg:col-start-6 lg:col-end-8",
  },
  {
    icon: IconTrained,
    numbers: "150+",
    description: "Women Trained",
    className: "lg:col-start-2 lg:col-end-4",
  },
  {
    icon: IconWeb,
    numbers: "76+",
    description: "Websites Created",
    className: "lg:col-start-6 lg:col-end-8",
  },
  {
    icon: IconStudents,
    numbers: "300+",
    description: "Students Trained",
    className: "lg:col-start-4 lg:col-span-2",
  },
];

export const partners_data = [
  {
    img: GDG,
    alt: "Google developers group",
  },
  {
    img: HAM,
    alt: "Ham Foundation",
  },
  {
    img: K,
    alt: "k",
  },
  {
    img: NJFP,
    alt: "Nigeria Jubilee Fellows Program",
  },
  {
    img: NTC,
    alt: "Nupe tech community",
  },
];

export const FAQData = [
  {
    question: "Can I book a Space?",
    answer:
      "Yes, you can visit the hub. Kindly send an email to kuagiresorces@gmail.com requesting a visit and stating the purpose of your visit.",
  },
  {
    question: " What time are the opening hours in the Hub?",
    answer:
      "Our Space is open from 8am to 5pm from Mondays to Saturdays excluding Sundays. If a subscriber books a 24/7 access plan can have access to the space anytime.",
  },
  {
    question: "Who can use the Co working Space in the Hub?",
    answer:
      "The Co working Spaces are open to freelancers, remote workers, startups, small businesses, and larger organizations looking for a flexible office space.",
  },
  {
    question: "Can I host meetings or events?",
    answer:
      "Yes, we have meeting rooms and event spaces available for booking by members and non members.",
  },
];

export const selectData = [
  "From a friend",
  "Social Media",
  "Search Engine",
  "Advertisement",
  "Email Campaign",
  "Word of Mouth",
  "Event or Conference",
  "Blog or Article",
  "Online Forum",
  "Other",
];

export const locationData = {
  maplink:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4680.611636668824!2d4.583387075688324!3d8.509639996900965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364da3007db973%3A0x815b55986b8ba110!2s28%20Sango%20Rd%2C%20Oko%20Erin%20240102%2C%20Kwara%2C%20Nigeria!5e1!3m2!1sen!2sus!4v1742404141228!5m2!1sen!2sus",
  image: LocationImage,
};

export const footerData = {
  logo: Logo,
  description:
    "Be the first to receive all the recent updates, articles, and valuable materials.",
  sections: [
    {
      header: "Links",
      items: [
        {
          text: "Home",
          link: "/",
        },
        {
          text: "About Us",
          link: "/",
        },
        {
          text: "Service",
          link: "/",
        },
        {
          text: "Contact",
          link: "/",
        },
      ],
    },

    {
      header: "Our Service",
      items: [
        {
          text: "Home",
          link: "/",
        },
        {
          text: "About Us",
          link: "/",
        },
        {
          text: "Service",
          link: "/",
        },
        {
          text: "Contact",
          link: "/",
        },
      ],
    },
  ],

  contact: {
    header: "Contact Us",
    address: "No 28 Muritala Muhammed,Sango Road, Ilorin,Kwara State, Nigeria.",
    phone: "+234 816 073 0725",
    email: "Kuagiresources@gmail.com",
    socials: [
      {
        icon: InstagramIcon,
        link: "/",
      },

      {
        icon: LinkedInIcon,
        link: "/",
      },
      {
        icon: FacebookIcon,
        link: "/",
      },
      {
        icon: TwitterIcon,
        link: "/",
      },
    ],
  },
  policies: [
    {
      name: "Terms of Service",
      link: "/",
    },
    {
      name: "Privacy Policy",
      link: "/",
    },
    {
      name: "Security",
      link: "/",
    },
    {
      name: "Sitemap",
      link: "/",
    },
  ],

  copyright: "© 2024 Kuagi. All rights reserved.",
};

export const women4TechData = [
  {
    image: EventImage1,
    description:
      "Some of the ladies on the Twitter space panel speaking about the good impact technology has done in the environment and how impactful it can be gaining a Tech skill",
  },
  {
    image: EventImage2,
    description:
      "A co-working space that is designed to stimulate productivity and collaboration. From a personal workstation to private meeting rooms, the shared amenities encompassing high speed WI-FI and coffee",
  },
  {
    image: EventImage3,
    description:
      "A co-working space that is designed to stimulate productivity and collaboration. From a personal workstation to private meeting rooms, the shared amenities encompassing high speed WI-FI and coffee",
  },
  {
    image: EventImage4,
    description:
      "A co-working space that is designed to stimulate productivity and collaboration. From a personal workstation to private meeting rooms, the shared amenities encompassing high speed WI-FI and coffee",
  },
];

export const eventData = {
  upcoming: [
    {
      image: UpcomingEvent1,
      title: "Tech ladies Unite 2.0",
      description:
        'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster...',
      eventId: 1,
    },
    {
      image: UpcomingEvent1,
      title: "Tech ladies Unite 2.0",
      description:
        'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster...',
      eventId: 2,
    },
  ],
  past: [
    { image: PastEvent },
    { image: PastEvent },
    { image: PastEvent },
    { image: PastEvent },
  ],
};

export const programData = [
  {
    image: ProgramImage1,
    title: "Day 2, Intensive Workshop on GoogleWorkspace",
    content:
      'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster',
    date: "Jan 27",
    read_minute: "5 min read",
  },
  {
    image: ProgramImage2,
    title: "Day 1, Intensive Workshop on GoogleWorkspace",
    content:
      'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster',
    date: "Feb 03",
    read_minute: "4 min read",
  },
  {
    image: ProgramImage3,
    title: "Day 1, Intensive Workshop on GoogleWorkspace",
    content:
      'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster',
    date: "Feb 09",
    read_minute: "6 min read",
  },
  {
    image: ProgramImage1,
    title: "Day 2, Intensive Workshop on GoogleWorkspace",
    content:
      'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster',
    date: "Jan 27",
    read_minute: "5 min read",
  },
  {
    image: ProgramImage2,
    title: "Day 1, Intensive Workshop on GoogleWorkspace",
    content:
      'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster',
    date: "Feb 03",
    read_minute: "4 min read",
  },
  {
    image: ProgramImage3,
    title: "Day 1, Intensive Workshop on GoogleWorkspace",
    content:
      'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster',
    date: "Feb 09",
    read_minute: "6 min read",
  },
  {
    image: ProgramImage1,
    title: "Day 2, Intensive Workshop on GoogleWorkspace",
    content:
      'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster',
    date: "Jan 27",
    read_minute: "5 min read",
  },
  {
    image: ProgramImage2,
    title: "Day 1, Intensive Workshop on GoogleWorkspace",
    content:
      'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster',
    date: "Feb 03",
    read_minute: "4 min read",
  },
  {
    image: ProgramImage3,
    title: "Day 1, Intensive Workshop on GoogleWorkspace",
    content:
      'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster',
    date: "Feb 09",
    read_minute: "6 min read",
  },
  {
    image: ProgramImage1,
    title: "Day 2, Intensive Workshop on GoogleWorkspace",
    content:
      'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster',
    date: "Jan 27",
    read_minute: "5 min read",
  },
  {
    image: ProgramImage2,
    title: "Day 1, Intensive Workshop on GoogleWorkspace",
    content:
      'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster',
    date: "Feb 03",
    read_minute: "4 min read",
  },
  {
    image: ProgramImage3,
    title: "Day 1, Intensive Workshop on GoogleWorkspace",
    content:
      'The workshop titled "Enhancing Creative Thinking in the Workplace" aimed to equip participants with the necessary tools and techniques to foster',
    date: "Feb 09",
    read_minute: "6 min read",
  },
];
