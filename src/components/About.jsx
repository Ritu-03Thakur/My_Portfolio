import Button from "@mui/material/Button";

function About() {
  return (
    <>
      <div className="about" id="about">
          <h1 className="about-heading">ABOUT ME</h1>
          <div className="about-box">

        <div className="about-img">
          <img
            src="./images/about.jpeg"
            alt=""
          />
        </div>
        <div className="about-content">
          <p>
            I am Ritu Thakur a front-end developer . I am currently pursuing
            bachelors in computer science. and I am always looking to improve my 
            skills and learn new things along the way to become a better
            developer.
            
          </p>
      <a href={"/"} className="link">
          <Button  size="medium" variant="contained" style={{backgroundColor : "rgb(26 90 84)"  ,  color: "#f7f7f7"}}>
            Download CV
          </Button>
      </a>
        </div>
          </div>

      </div>
    </>
  );
}
export default About;
