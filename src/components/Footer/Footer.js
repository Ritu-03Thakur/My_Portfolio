

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./Footer.css";


export default function Footer() {
  return (
    <>
      <div className="footer">
   <div className="design">
    <span>Designed and Developed by Ritu Thakur</span>
   </div>

   <div className="copyright">
    <span>Copyright © 2023 RT</span>
   </div>
            <div className="social-icon">
              <a href="https://github.com/Ritu-03Thakur">
                <GitHubIcon sx={{ fontSize: "20px" }} />
              </a>
             
              <a href="https://www.linkedin.com/in/ritu-thakur-6903b8259">
                <LinkedInIcon sx={{ fontSize: "20px" }} />
              </a>
              <a href="https://www.twitter.com/">
                <TwitterIcon sx={{ fontSize: "20px" }} />
              </a>
            </div>
      </div>
         
    </>
  );
}
