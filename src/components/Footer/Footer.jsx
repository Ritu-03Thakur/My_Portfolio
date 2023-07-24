

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ArrowUpward , Instagram , WhatsApp , Facebook , Email , LogoDev } from "@mui/icons-material";

import Button from "@mui/material/Button";

import "./Footer.scss";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <>
      <div className="footer">

        <div className="footer-start">
          <div className="left">
            <span>Quicks Links</span>
            <li>
                <Link to = {"/#skills"}className="link">  Skill
            </Link>
            </li>
            <li>
                <Link to = {"/#about"}className="link">  About
            </Link>
            </li>
            <li>
                <Link to = {"/#projects"}className="link"> Project
            </Link>
            </li>
            <li>
                <Link to = {"/#testimonials"}className="link"> Testimonials
            </Link>
            </li>
            <li>
                <Link to = {"/"}className="link">  Download Resume
            </Link>
            </li>
          </div>
          <div className="right">
            <span>Connect</span>
          <li>
                <Link to = {"/" }className="link">  Blog
            </Link>
            </li>
            <li>
            <Link to = {"/"}className="link" > chedule A Meeting
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
         <Button size="small" variant="contained" style={{  backgroundColor:" rgb(26 90 84)" ,  color: "#f7f7f7" , width : "200px"}}>
           <Link to={"/#heroSection"} className="link" style={{  color: "#f7f7f7"}}>Back to Top <ArrowUpward style={{  color: "#f7f7f7"}}/>  </Link>
          </Button>
         <span>Copyright © 2023 RT</span>
        </div>
       
      </div>
         
    </>
  );
}
