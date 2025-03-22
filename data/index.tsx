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
import PowerIcon from "@/assets/icons/ic_power.png";
import WiFiIcon from "@/assets/icons/ic_wifi.png";
import TvIcon from "@/assets/icons/ic_televisio.png";
import MeetupIcon from "@/assets/icons/ic_space.png";
import BookIcon from "@/assets/icons/ic_book.png";
import ProductDesignIllustration from "@/assets/img_product_design.png";
import ProductManagementIllustration from "@/assets/img_product_management.png";
import CybersecurityIllustration from "@/assets/img_privacy.png";
import GraphicDesignIllustration from "@/assets/img_graphic_design.png";
import { StaticImageData } from "next/image";
import IconWebDev from "@/assets/icons/ic_webdev.png";
import IconUiUx from "@/assets/icons/ic_uiux.png";
import IconSoftware from "@/assets/icons/ic_software.png";
import IconPen from "@/assets/icons/ic_pen.png";
import IconShop from "@/assets/icons/ic_shop.png";
import IconMobile from "@/assets/icons/ic_mobile.png";

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
        href: "/price",
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
    link: "/business-hub",
  },
  {
    name: "Kuagi Innovatif Hub",
    link: "/innovatif-hub",
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

export const priceHeroData = [
  {
    icon: PowerIcon,
    description: "24 hrs Power Supply",
  },
  {
    icon: WiFiIcon,
    description: "Fast Internet",
  },
  {
    icon: TvIcon,
    description: "Meetup space",
  },
  {
    icon: MeetupIcon,
    description: "Meetup Space",
  },
  {
    icon: BookIcon,
    description: "Access To Library",
  },
];

export type PricePlan = {
  name: string;
  subscriptions: {
    name: string;
    price: string;
    benefits: string[];
  }[];
};

export type PricePlansData = {
  title: string;
  plans: PricePlan[];
}[];

export const pricePlansData = [
  {
    title: "Shared Space",
    plans: [
      {
        name: "No Internet Plan",
        subscriptions: [
          {
            name: "Daily",
            price: "₦500",
            benefits: [
              "Subscribers can request internet Access when the need arises",
              "Discounted price of ₦300/GB valid through the Coworking space subscription period",
            ],
          },
          {
            name: "Weekly",
            price: "₦2,500",
            benefits: [
              "Subscribers can request internet Access when the need arises",
              "Discounted price of ₦300/GB valid through the Coworking space subscription period",
            ],
          },
          {
            name: "Monthly",
            price: "₦9,000",
            benefits: [
              "Subscribers can request internet Access when the need arises",
              "Discounted price of ₦300/GB valid through the Coworking space subscription period",
            ],
          },
        ],
      },

      {
        name: "Standard Plan",
        subscriptions: [
          {
            name: "Daily",
            price: "₦1,000",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 0.75MBPS",
              "Shared Hot Desk",
            ],
          },
          {
            name: "Weekly",
            price: "₦5,000",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 0.75MBPS",
              "Shared Hot Desk",
            ],
          },
          {
            name: "Monthly",
            price: "₦25,000",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 0.75MBPS",
              "Shared Hot Desk",
            ],
          },
        ],
      },

      {
        name: "Premium Plan",
        subscriptions: [
          {
            name: "Daily",
            price: "₦1,500",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 1.5MBPS",
              "Access to Stationary",
              "Shared Hot Desk",
            ],
          },
          {
            name: "Weekly",
            price: "₦8,000",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 1.5MBPS",
              "Access to Stationary",
              "Shared Hot Desk",
            ],
          },
          {
            name: "Monthly",
            price: "₦40,000",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 1.5MBPS",
              "Access to Stationary",
              "Shared Hot Desk",
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Private Desk",
    plans: [
      {
        name: "No Internet Plan",
        subscriptions: [
          {
            name: "Daily",
            price: "₦1,500",
            benefits: [
              "Subscribers can request internet Access when the need arises",
              "Discounted price of ₦300/GB valid through the Coworking space subscription period",
            ],
          },
          {
            name: "Weekly",
            price: "₦10,000",
            benefits: [
              "Subscribers can request internet Access when the need arises",
              "Discounted price of ₦300/GB valid through the Coworking space subscription period",
            ],
          },
          {
            name: "Monthly",
            price: "₦40,000",
            benefits: [
              "Subscribers can request internet Access when the need arises",
              "Discounted price of ₦300/GB valid through the Coworking space subscription period",
            ],
          },
        ],
      },

      {
        name: "Standard Plan",
        subscriptions: [
          {
            name: "Daily",
            price: "₦2,000",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 0.75MBPS",
              "Shared Hot Desk",
            ],
          },
          {
            name: "Weekly",
            price: "₦12,000",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 0.75MBPS",
              "Shared Hot Desk",
            ],
          },
          {
            name: "Monthly",
            price: "₦50,000",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 0.75MBPS",
              "Shared Hot Desk",
            ],
          },
        ],
      },

      {
        name: "Premium Plan",
        subscriptions: [
          {
            name: "Daily",
            price: "₦2,500",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 1.5MBPS",
              "Access to Stationary",
              "Shared Hot Desk",
            ],
          },
          {
            name: "Weekly",
            price: "₦16,000",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 1.5MBPS",
              "Access to Stationary",
              "Shared Hot Desk",
            ],
          },
          {
            name: "Monthly",
            price: "₦60,000",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 1.5MBPS",
              "Access to Stationary",
              "Shared Hot Desk",
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Meetup",
    plans: [
      {
        name: "No Internet Plan",
        subscriptions: [
          {
            name: "Daily",
            price: "₦1,000",
            benefits: [
              "Subscribers can request internet Access when the need arises",
              "Discounted price of ₦300/GB valid through the Coworking space subscription period",
            ],
          },
          {
            name: "Weekly",
            price: "₦6,000",
            benefits: [
              "Subscribers can request internet Access when the need arises",
              "Discounted price of ₦300/GB valid through the Coworking space subscription period",
            ],
          },
          {
            name: "Monthly",
            price: "₦25,000",
            benefits: [
              "Subscribers can request internet Access when the need arises",
              "Discounted price of ₦300/GB valid through the Coworking space subscription period",
            ],
          },
        ],
      },

      {
        name: "Standard Plan",
        subscriptions: [
          {
            name: "Daily",
            price: "₦2,000",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 0.75MBPS",
              "Shared Hot Desk",
            ],
          },
          {
            name: "Weekly",
            price: "₦12,000",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 0.75MBPS",
              "Shared Hot Desk",
            ],
          },
          {
            name: "Monthly",
            price: "₦55,000",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 0.75MBPS",
              "Shared Hot Desk",
            ],
          },
        ],
      },

      {
        name: "Premium Plan",
        subscriptions: [
          {
            name: "Daily",
            price: "₦3,500",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 1.5MBPS",
              "Access to Stationary",
              "Shared Hot Desk",
            ],
          },
          {
            name: "Weekly",
            price: "₦22,000",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 1.5MBPS",
              "Access to Stationary",
              "Shared Hot Desk",
            ],
          },
          {
            name: "Monthly",
            price: "₦90,000",
            benefits: [
              "Unlimited bandwidth internet access",
              "Wifi speed at 1.5MBPS",
              "Access to Stationary",
              "Shared Hot Desk",
            ],
          },
        ],
      },
    ],
  },
];

export type CourseData = {
  topic: string;
  duration: string;
  classTime: string;
  price: string;
  availability: boolean;
  image: StaticImageData | string;
  description: string;
  classType: string;
  benefits: string[];
  installment: string;
  curriculum: string[];
};

export const onlineCourseData = [
  {
    topic: "Product Design (UI/UX)",
    duration: "2 weeks",
    classTime: "2-3 times a week",
    price: "₦100,000",
    availability: true,
    image: ProductDesignIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Live Virtual Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },

  {
    topic: "Cybersecurity",
    duration: "2 weeks",
    classTime: "2-3 times a week",
    price: "₦250,000",
    availability: false,
    image: CybersecurityIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Live Virtual Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },

  {
    topic: "Product Management",
    duration: "2 weeks",
    classTime: "2-3 times a week",
    price: "₦60,000",
    availability: true,
    image: ProductManagementIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Live Virtual Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },

  {
    topic: "Graphic Design",
    duration: "12 weeks",
    classTime: "2-3 times a week",
    price: "₦60,000",
    availability: true,
    image: GraphicDesignIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Live Virtual Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },

  {
    topic: "Product Design (UI/UX)",
    duration: "2 weeks",
    classTime: "2-3 times a week",
    price: "₦100,000",
    availability: true,
    image: ProductDesignIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Live Virtual Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },

  {
    topic: "Cybersecurity",
    duration: "2 weeks",
    classTime: "2-3 times a week",
    price: "₦250,000",
    availability: false,
    image: CybersecurityIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Live Virtual Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },

  {
    topic: "Product Management",
    duration: "2 weeks",
    classTime: "2-3 times a week",
    price: "₦60,000",
    availability: true,
    image: ProductManagementIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Live Virtual Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },

  {
    topic: "Graphic Design",
    duration: "12 weeks",
    classTime: "2-3 times a week",
    price: "₦60,000",
    availability: true,
    image: GraphicDesignIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Live Virtual Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },
];

export const physicalCourseData = [
  {
    topic: "Product Design (UI/UX)",
    duration: "2 weeks",
    classTime: "2-3 times a week",
    price: "₦100,000",
    availability: true,
    image: ProductDesignIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Physical Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },

  {
    topic: "Cybersecurity",
    duration: "2 weeks",
    classTime: "2-3 times a week",
    price: "₦250,000",
    availability: false,
    image: CybersecurityIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Live Virtual Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },

  {
    topic: "Product Management",
    duration: "2 weeks",
    classTime: "2-3 times a week",
    price: "₦60,000",
    availability: true,
    image: ProductManagementIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Physical Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },

  {
    topic: "Graphic Design",
    duration: "12 weeks",
    classTime: "2-3 times a week",
    price: "₦60,000",
    availability: true,
    image: GraphicDesignIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Physical Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },

  {
    topic: "Product Design (UI/UX)",
    duration: "2 weeks",
    classTime: "2-3 times a week",
    price: "₦100,000",
    availability: true,
    image: ProductDesignIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Live Virtual Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },

  {
    topic: "Cybersecurity",
    duration: "2 weeks",
    classTime: "2-3 times a week",
    price: "₦250,000",
    availability: false,
    image: CybersecurityIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Live Virtual Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },

  {
    topic: "Product Management",
    duration: "2 weeks",
    classTime: "2-3 times a week",
    price: "₦60,000",
    availability: true,
    image: ProductManagementIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Live Virtual Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },

  {
    topic: "Graphic Design",
    duration: "12 weeks",
    classTime: "2-3 times a week",
    price: "₦60,000",
    availability: true,
    image: GraphicDesignIllustration,
    description:
      "The Cybersecurity Mastery program offers an extensive 12-week training curriculum tailored for individuals passionate about cybersecurity. Participants will achieve proficiency in cybersecurity principles, delving into advanced techniques and strategic frameworks. ",
    classType: "Live Virtual Training",
    benefits: [
      "Between 17-40 years of age",
      "10 - 12 weeks programme",
      "Access to a laptop or desktop",
      "No previous Cybersecurity experience required",
      "Certificate",
    ],
    installment: "70% on Admission, 30% after one month",
    curriculum: [
      "Firewalls",
      "Antivirus software",
      "Intrusion detection systems",
      "VPNs",
      "Password managers",
      "Encryption tools",
      "SIEM tools",
      "Penetration testing tools",
      "MFA",
      "Incident response tools",
    ],
  },
];

export type SeminarData = {
  name: string;
  duration: string;
  classTimes: string;
  classType: string;
  installment: string;
  tuition: string;
  description: string;
  benefits: string[];
  objectives: string[];
  expectations: {
    attendancePolicy: string;
    assignments: string;
    projectDescription: string;
    projects: string[];
    courseEvaluation: string;
    lateWork: string;
    grading: string;
  };
};

export const seminarData = [
  {
    name: "Starter Package",
    duration: "12 Weeks",
    classTimes: "3 Times a Week",
    classType: "Physical and Live Virtual Training",
    installment: "70% on Admission, 30% After one Month",
    tuition: "₦50,000",
    description:
      "This package is for entrepreneurs with low or little knowledge on handling business. By the end of the package, participants should be able to:",
    benefits: [
      "Understand the concept of business",
      "Develop Strategies to promote online presence",
      "Place business on Google MyBusiness",
      "Manage and Control Google MyBusiness",
      "Create and Manage MyBusiness Site",
      "Explore Google Maps",
      "Use Drive for Cloud Storage",
      "Access and analyze the performance on your social platform",
    ],
    objectives: [
      "Increase efficiency of business practices.",
      "At the end of the class owners should be able to identify areas that will benefit from digitalization and implement the right technologies to improve them.",
      "Reduce costs of the business to maximize income.",
      "Improve customer satisfaction by leveraging technology.",
    ],
    expectations: {
      attendancePolicy:
        "You are expected to attend and participate in all classes given according to the time schedule.",
      assignments:
        "The only way to learn is by putting into practice what you learn. The facilitator will have assignments at the end of each class throughout the course. These assignments are to reinforce what code or theory is taught during the class. Most of these assignments are less intensive than the projects and focus more on execution rather than creativity and design. For each assignment, you will have at least 20 hours to complete unless otherwise noted.",
      projectDescription:
        "There will be 2 major projects assigned after the conclusion of each topic. The alloted time for the completion of assigned project as well as other requirements will be detailed in the project description via WhatsApp.",
      projects: [
        "Place your business on Google my business and Google maps.",
        "Your product photography and mobile edit.",
        "Create a Business flier on Canva",
        "Create a google site for your business.",
      ],
      courseEvaluation:
        "Participants are expected to provide feedback on the quality of instruction in this course by completing online evaluations through email. Evaluations are typically open during the last two or three days of the class, but students will be given specific times when they are open.",
      lateWork:
        "All work is due on or before the due date. Extensions for deadlines will only be given on a case-by-case basis. Minor inconveniences such as family vacation or minor illness are not valid reasons for extensions. Unless excused, work submitted within 20 hours after the due date will automatically be deducted by 30% of the maximum points allowed. No work will be accepted for a grade past 20 hours.",
      grading:
        "Participants are evaluated on the basis of their timely and effective completion of assignments and projects.",
    },
  },

  {
    name: "Advance Package",
    duration: "12 Weeks",
    classTimes: "3 Times a Week",
    classType: "Physical and Live Virtual Training",
    installment: "70% on Admission, 30% After one Month",
    tuition: "₦50,000",
    description:
      "This package includes the tools from the starter package and more. By the end of the package, participants should be able to:",
    benefits: [
      "Learn all the tools from Starter Package",
      "Build E-Commerce Platform",
      "Create Online and physical strategies business improvement",
      "Create Social ad’s (Facebook, IG, Twitter, WhatsApp)",
      "Build a Personal Website or Web Application",
      "Canva -Graphics platform",
      "Smartphone Photography & Mobile Image Editing",
    ],
    objectives: [
      "Increase efficiency of business practices.",
      "At the end of the class owners should be able to identify areas that will benefit from digitalization and implement the right technologies to improve them.",
      "Reduce costs of the business to maximize income.",
      "Improve customer satisfaction by leveraging technology.",
    ],
    expectations: {
      attendancePolicy:
        "You are expected to attend and participate in all classes given according to the time schedule.",
      assignments:
        "The only way to learn is by putting into practice what you learn. The facilitator will have assignments at the end of each class throughout the course. These assignments are to reinforce what code or theory is taught during the class. Most of these assignments are less intensive than the projects and focus more on execution rather than creativity and design. For each assignment, you will have at least 20 hours to complete unless otherwise noted.",
      projectDescription:
        "There will be 2 major projects assigned after the conclusion of each topic. The alloted time for the completion of assigned project as well as other requirements will be detailed in the project description via WhatsApp.",
      projects: [
        "Place your business on Google my business and Google maps.",
        "Your product photography and mobile edit.",
        "Create a Business flier on Canva",
        "Create a google site for your business.",
      ],
      courseEvaluation:
        "Participants are expected to provide feedback on the quality of instruction in this course by completing online evaluations through email. Evaluations are typically open during the last two or three days of the class, but students will be given specific times when they are open.",
      lateWork:
        "All work is due on or before the due date. Extensions for deadlines will only be given on a case-by-case basis. Minor inconveniences such as family vacation or minor illness are not valid reasons for extensions. Unless excused, work submitted within 20 hours after the due date will automatically be deducted by 30% of the maximum points allowed. No work will be accepted for a grade past 20 hours.",
      grading:
        "Participants are evaluated on the basis of their timely and effective completion of assignments and projects.",
    },
  },
];

export type InnovativeSolution = {
  title: string;
  description: string;
};

export const innovativeSolutions = {
  name: "Innovative ICT Solutions",

  services: [
    {
      title: "At Kuagi Innovatif Hub",
      description:
        "We are commited to provide innovative ICT solutions to our customers.",
    },

    {
      title: "As a vibrant provider in the industry",
      description:
        "We specialize in delivering modern technologies and services that help our clients stay connected and competitive in today’s fast paced digital landscape",
    },

    {
      title: "Whether its helping start-ups & businesses",
      description:
        "whether it is helping business and start-ups to enhance their systems or providing secure and scalable network infrastructure, we have the skills and resources to deliver exceptional results. ",
    },
  ],
};

export type InnovativeService = {
  icon: StaticImageData | string;
  title: string;
  description: string;
};
export const innovativeServices = [
  {
    icon: IconWebDev,
    title: "Web Development",
    description:
      "You are covered on oustanding responsive website that follows a fast go-to market strategy and is ready to be tested by yours truly ",
  },
  {
    icon: IconUiUx,
    title: "UI/UX Design",
    description:
      "Grow revenue and business value with a well thought out user experience and interface that increases conversion",
  },
  {
    icon: IconSoftware,
    title: "Software Development",
    description:
      "Our team covers the full software development cycle and  create custom development solutions that reflect clients needs to the highest degree",
  },

  {
    icon: IconPen,
    title: "Brand Identity",
    description:
      "Unique and memorable branding solutions that effectively communicate your brand’s message and identity ",
  },
  {
    icon: IconShop,
    title: "E-commerce Solutions",
    description:
      "Dynamic and responsive e-commerce platform designed to boost sales and streamline users interaction ",
  },
  {
    icon: IconMobile,
    title: "Mobile App Development",
    description:
      "Innovative and user-centric mobile application designs that enhance functionality and engagement  ",
  },
];

export const workingProcess = [
  {
    title: "Research",
    description:
      "Understand the project’s goals, target’s goal, target audience, and technical requirements.",
  },
  {
    title: "Design & Prototype",
    description:
      "Create a visually appealing and user-friendly design concept.",
  },
  {
    title: "Development",
    description:
      "Build a functional and stable solutions meeting the project requirements ",
  },
  {
    title: "Testing",
    description:
      "Ensure the solution meets the project requirements and is free of defects. ",
  },
];
