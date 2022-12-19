import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import "./Contact.css";


export default function Contact() {
  return (
    <>
      <Card  sx={{ margin: 5, boxShadow: 5 }} >
        <div className="contact" style={{display : "flex" }}>

          <div className="head" >
            <h1 style={{fontSize : "12px" ,color:" #041440" }}>CONTACT ME</h1>
            <h4>Get In Touch </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Nisi saepe doloremque officia laudantium velit voluptatum <br />
              tenetur temporibus consequatur esse ab!
            </p>
            <div className="info">
              <div className="comp">
            
                <HomeIcon sx={{ fontSize: "20px"  }} style={{color : "#0d6463"}} /> 
                <h4>Location </h4>
                <p>99 ,XYZ , India , New-Delhi</p>
              </div>
              <div className="comp">
                <PhoneIcon sx={{ fontSize: "20px" }} style={{color : "#0d6463"}}/>
                <h4>Phone Number </h4>
                <p >(+91) - 777777777</p>
              </div>
              <div className="comp">
                <EmailIcon sx={{ fontSize: "20px" }} style={{color : "#0d6463"}}/>
                <h4>Email Address </h4>
                <p>xyz@gmail.com</p>
              </div>
            </div>
          </div>

  
          <div className="ritu" >
            <div className="contactCard  ">
              <Box
                component="form"
                sx={{
                  "& > :not(style) ": { m: 1, width: "25ch" },
                }}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <TextField
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                />
                <TextField
                  id="standard-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  variant="standard"
                />
                <Button
                  className="info"
                  variant="contained"
                  style={{
                    backgroundColor: "#0d6463",
                  }}
                >
                  Send
                </Button>
              </Box>
            </div>

            <div className="social-icon">
              <a href="/">
                <GitHubIcon sx={{ fontSize: "25px" }} />
              </a>
              <a href="/">
                <InstagramIcon sx={{ fontSize: "20px" }} />
              </a>
              <a href="/">
                <LinkedInIcon sx={{ fontSize: "20px" }} />
              </a>
              <a href="/">
                <TwitterIcon sx={{ fontSize: "20px" }} />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
