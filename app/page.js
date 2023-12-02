import Banner from "@/components/Banner";
import Services from "@/components/Services/Services";
import Slider from "@/components/Slider/Slider.jsx";
import Timing from "@/components/Timing";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <>
      <Banner />
      <Welcome />
      <Services />
      <Timing />
      <Slider />
    </>
  )
}
