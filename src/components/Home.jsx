import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Testimonials from "./Testimonials";
import HeroSection from "./HeroSection";
import Contact from "./Contact";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skill />
      <Project />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;
