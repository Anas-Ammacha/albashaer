import AboutSummary from "@/components/home/AboutSummary";
import ColorsStrip from "@/components/home/ColorsStrip";
import Hero from "@/components/home/Hero";
import LatestProducts from "@/components/home/LatestProducts";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <LatestProducts />
      <ColorsStrip />
      <WhyUs />
    </>
  );
}
