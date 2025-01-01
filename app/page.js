import home1 from "@/public/home-bg1.png";
import home2 from "@/public/home-bg2.png";
import home3 from "@/public/home-bg3.png";
import Image from "next/image";
import CoffeeBrewingTips from "./_components/_homeSections/CoffeeBrewingTips";
import CustomerTestimonials from "./_components/_homeSections/CustomerTestimonials";
import FeaturedCoffeeOfTheMonth from "./_components/_homeSections/FeaturedCoffeeOfTheMonth";
import HowOurCoffeeIsGreat from "./_components/_homeSections/HowOurCoffeeIsGreat";
import MeetOurBaristas from "./_components/_homeSections/MeetOurBaristas";
import NewsletterSubscription from "./_components/_homeSections/NewsletterSubscription";
import OverviewList from "./_components/_homeSections/OverviewList";
import SustainabilityInitiatives from "./_components/_homeSections/SustainabilityInitiatives";
import Welcome from "./_components/_homeSections/Welcome";
import FadeInOutWrapper from "./_components/FadeInOutWrapper";

export const metadata = {
  title: "Cafe Junior",
  description: "An online website to order coffee online",
};

function Page() {
  return (
    <div className="py-10 px-5 relative flex flex-col items-center justify-center min-h-screen rounded-xl text-primary-900 overflow-hidden">
      <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 h-[35rem] w-[35rem]">
        <Image
          className="object-cover rounded-full animate-spinSlow bg-primary-300/50"
          src={home1}
          alt="home"
          layout="fill"
          priority
        />
      </div>
      <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 h-[35rem] w-[35rem]">
        <Image
          className="object-cover rounded-full animate-spinSlow bg-primary-300/50"
          src={home2}
          alt="home"
          layout="fill"
          priority
        />
      </div>
      <div className="absolute top-3/4 right-0 transform translate-x-1/2 -translate-y-1/2 h-[35rem] w-[35rem]">
        <Image
          className="object-cover rounded-full animate-spinSlow bg-primary-300/50"
          src={home3}
          alt="home"
          layout="fill"
          priority
        />
      </div>

      <Welcome />
      <OverviewList />

      <FadeInOutWrapper>
        <HowOurCoffeeIsGreat />
      </FadeInOutWrapper>

      <FadeInOutWrapper>
        <CustomerTestimonials />
      </FadeInOutWrapper>

      <FadeInOutWrapper>
        <FeaturedCoffeeOfTheMonth />
      </FadeInOutWrapper>

      <FadeInOutWrapper>
        <CoffeeBrewingTips />
      </FadeInOutWrapper>

      <FadeInOutWrapper>
        <MeetOurBaristas />
      </FadeInOutWrapper>

      <FadeInOutWrapper>
        <SustainabilityInitiatives />
      </FadeInOutWrapper>

      <FadeInOutWrapper>
        <NewsletterSubscription />
      </FadeInOutWrapper>
    </div>
  );
}

export default Page;
