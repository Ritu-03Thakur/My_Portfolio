

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ArrowUpward , Instagram , WhatsApp , Facebook , Email , LogoDev  } from "@mui/icons-material";

import Button from "@mui/material/Button";

import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <>
      <div className="footer">

        <div className="footer-start">
          <div className="left">
            <span>Quicks Links</span>
            <li>
                <HashLink to = {"/#skills"}className="link">  Skill
            </HashLink>
            </li>
            <li>
                <HashLink to = {"/#about"}className="link">  About
            </HashLink>
            </li>
            <li>
                <HashLink to = {"/#projects"}className="link"> Project
            </HashLink>
            </li>
            <li>
                <HashLink to = {"/#testimonials"}className="link"> Testimonials
            </HashLink>
            </li>
            <li>
                <Link to = {"/"}className="link">  Download Resume
            </Link>
            </li>
          </div>
          <div className="right">
            <span>Connect</span>
          <li>
                <HashLink to = {"/" }className="link">  Blog
            </HashLink>
            </li>
            <li>
            <Link to = {"/"}className="link" > Schedule A Meeting
            </Link>
            </li>
            <div className="social-icon">
            <a className="link" href="https://github.com/Ritu-03Thakur">
                <GitHubIcon sx={{ fontSize: "25px" , color : "#f8f9fa" }} />
              </a>
             
              <a className="link" href="https://www.linkedin.com/in/ritu-thakur-6903b8259">
                <LinkedInIcon sx={{ fontSize: "25px" , color : "#204070" }} />
              </a>
              <a className="link" href="https://www.twitter.com/Ritu_03Thakur">
                <TwitterIcon sx={{ fontSize: "25px" , color : "#2d7aee"}} />
              </a>

              <a className="link" href="https://www.instagram.com">
                <Instagram sx={{ fontSize: "25px" , color : "#c8377f" }} />
              </a>
              <a className="link" href="https://www.whatsapp.com">
                <WhatsApp sx={{ fontSize: "25px"  , color : "#148c1a"}} />
              </a>
              <a className="link" href="https://www.facebook.com">
                <Facebook sx={{ fontSize: "25px"  , color : "#082266"}} />
              </a>
              <a  className="link" href="https://ritutec001@gmail.com">
                <Email sx={{ fontSize: "25px"  , color : "#c84e0c"}} />
              </a>
              <a className="link" href="dev.to/rituthakur">
                <LogoDev sx={{ fontSize: "25px"  , color : "#657076"}} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-end">
         <span>Built with <FavoriteIcon style={{ color: "rgb(193 112 12)"}}/> By Ritu Thakur</span>
           <Link  onClick={() => window.scrollTo(0, 0)} className="link" style={{  color: "#f7f7f7"}}>
         <Button size="small" variant="contained" style={{  backgroundColor:" rgb(26 90 84)" ,  color: "#f7f7f7" , width : "200px"}}>
            Back to Top <ArrowUpward style={{  color: "#f7f7f7"}}/> 
          </Button>
            </Link>
         <span>Copyright © 2023 RT</span>
        </div>
       
      </div>
         
    </>
  );
}
