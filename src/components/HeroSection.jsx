import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="heroSection" id="heroSection">
        <div className="heroSection-content">
          <div className="content">
            <h1>Hello , I'm </h1>
            <h2 className="heading1">Ritu Thakur </h2>
            <p>
              I'm a Front-end Developer and Open Source Contributor. I have a
              passion <br />
              for learning new technologies and I am always looking to improve
              my
              <br />
              skills and learn new things along the way to become a better
              developer. <br />
            </p>
          </div>
          <video autoPlay muted loop className="videoContainer">
            <source src="./images/bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
