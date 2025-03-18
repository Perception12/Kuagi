import Image from "next/image";
import HeroImage from "@/assets/hero_1.jpeg";
import HeroOptions from "./HeroOptions";
import ChairIcon from "@/assets/icons/ic_chair.png";
import EventIcon from "@/assets/icons/ic_event.png";
import FeminineIcon from "@/assets/icons/ic_woman.png";

const Hero = () => {
  const optionsData = [
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

  return (
    <section className="relative bg-muted py-32 flex flex-col items-center justify-center h-[calc(90vh-5rem)]">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <Image
          alt="background"
          src={HeroImage}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-primary opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <p className="text-white lg:text-xl">
                Aimed at building digital literacy in women.
              </p>

              <h1 className="mb-6 text-2xl font-bold text-white lg:text-5xl">
                Bridging the gender tech gap
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Page Options - Positioned to Overlap Image and Background */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 w-full lg:w-3/5">
        <div className="flex items-center justify-center bg-white rounded-3xl shadow-sm py-6 px-8 gap-8">
          {optionsData.map((option, index) => (
            <HeroOptions
              key={index}
              icon={option.icon}
              title={option.title}
              icon_width={option.icon_width}
              isActive={option.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
