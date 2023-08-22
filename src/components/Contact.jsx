
import {  Button, TextField } from '@mui/material'
// import {GitHub , LinkedIn ,  Twitter}  from "@mui/icons-material";

import React from 'react'

const Contact = () => {
  return (
    <div className = "contact" id='contact'>
     <h1 className="contact-heading">Contact Me</h1>
     <h3 className="contact-title">Get in Touch </h3>
     {/* <div className='social-icons'>
     <a className="link" href="https://github.com/Ritu-03Thakur">
                <GitHub sx={{ fontSize: "25px" , color : "#f8f9fa" }} />
              </a>
             
              <a className="link" href="https://www.linkedin.com/in/ritu-thakur-6903b8259">
                <LinkedIn sx={{ fontSize: "25px" , color : "#204070" }} />
              </a>
              <a className="link" href="https://www.twitter.com/Ritu_03Thakur">
                <Twitter sx={{ fontSize: "25px" , color : "#2d7aee"}} />
              </a>

     </div> */}

     <div  className='contact-input'>
     <TextField
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
          className='contact-input'
        />
     <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          className='contact-input'
        />
      <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          className='contact-input'
        />
        <Button className='btn' size="medium" variant="contained" style={{backgroundColor : "rgb(26 90 84)"  ,  color: "#f7f7f7" , width:"100px"}}>
           Send
          </Button>
     </div>
    </div>
  )
}

export default Contact
