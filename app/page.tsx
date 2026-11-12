import CallToAction from "@/components/CallToAction";
import AboutSummary from "@/components/home/AboutSummary";
import Hero from "@/components/home/Hero";
import HowToOrder from "@/components/home/HowToOrder";
import TrustStrip from "@/components/home/TrustStrip";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSummary />
      <WhyUs />
      <HowToOrder />
      <CallToAction />
    </>
  );
}
