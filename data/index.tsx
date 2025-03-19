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

export const heroOptionsData = [
  {
    icon: ChairIcon,
    title: "Co-Working Space",
    icon_width: 22.5,
    isActive: true,
  },
  {
    icon: FeminineIcon,
    title: "Women 4Tech",
    icon_width: 15,
    isActive: false,
  },
  {
    icon: EventIcon,
    title: "Events",
    icon_width: 18,
    isActive: false,
  },
];

export const menus = [
  {
    name: "Kuagi Acad",
    link: "#",
    components: [
      {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
          "For sighted users to preview content available behind a link.",
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
