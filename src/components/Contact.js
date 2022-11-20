import Box from '@mui/material/Box' ; 
import TextField from '@mui/material/TextField' ; 
import Button from '@mui/material/Button';


import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
 // import './Contact.css' ; 


export default function Contact() {
  return (
    <>
      <div className="contact" >
        <div className="head">
        <h1 className="heading">CONTACT ME</h1>
        </div>
        
        <div className="contactCard  ">

        
         <Box component= "form" sx = {{
          '& > :not(style) ' : {m :1 , width : '25ch'}
         }}  style = {{display : "flex" , flexDirection : "column"}}>
          <TextField  id='standard-basic' label = "Name" variant='standard'/>
          <TextField  id='standard-basic' label = "Email" variant='standard'/>
          <TextField  id='standard-multiline-static' label = "Message" multiline rows={4} 
          variant='standard'/>
           <Button className="info"  variant="contained"  
           style={{
          backgroundColor : "#0d6463" 
           }}>Send</Button>
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
    </>
  );
}
