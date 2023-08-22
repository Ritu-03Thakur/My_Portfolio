
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Testimonials from "./Testimonials";
import HeroSection from "./HeroSection";
import Contact from "./Contact"


function Home() {
  return (
   <>
      <HeroSection /> 
      <About />
      <Skill />
      <Project />  
      <Testimonials />
      <Contact />
   </>
     
   
  );
}
export default Home;
