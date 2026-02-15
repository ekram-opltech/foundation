
import About from "./components/home/about";
import Banner from "./components/home/banner";
import Campaign from "./components/home/campaign";
import Feature from "./components/home/feature";
import MissionSection from "./components/home/misstion-section";

export default function Home() {
  return (
    <>
      <section className="main-slider main-slider-style1">
        <div className="main-slider-style1__shape2">
          <img src="/images/shapes/main-slider-style1-shape-2.png" alt="" />
        </div>
        <Banner />
      </section>

      <Feature />
      <About />
      <Campaign />
      <MissionSection />
    </>

  );
}
