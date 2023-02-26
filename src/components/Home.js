import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";


function Home() {

  return (
    <div className="home" >
     
      <h1 className="heading">Hello , I'm </h1>
      <h1 className="heading1">Ritu Thakur </h1>
      <p>
        I'm a Front-end Developer and Open Source Contributor. I have a passion <br />
        for learning new technologies and I am always looking to improve my <br />
        skills and learn new things along the way to become a better developer. <br />
      </p>

      <div className="find">
        <img src="./images/avatar.jpeg" alt=""  />
        <h2>FIND  ME  ON</h2>
        <p>feel free to  <span>   connect   </span>    with me</p>
        <div className="icons">
        <a href="https://github.com/Ritu-03Thakur">
                <GitHubIcon sx={{ fontSize: "35px"  , color : "#1f9f93" }} />
              </a>
             
              <a href="https://www.linkedin.com/in/ritu-thakur-6903b8259">
                <LinkedInIcon sx={{ fontSize: "35px" , color : "#1f9f93" }} />
              </a>
              <a href="https://www.twitter.com/">
                <TwitterIcon sx={{ fontSize: "30px" , color : "#1f9f93" }} />
              </a>

              <a href="https://www.instagram.com/">
                <InstagramIcon sx={{ fontSize: "30px" , color : "#1f9f93" }} />
              </a>
        </div>
        

      </div>
    </div>
  );
}
export default Home;
