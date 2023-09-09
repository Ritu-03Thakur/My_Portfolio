
import {  Button, TextField } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <div className = "contact" id='contact'>
      <div className='contact-gradient'/>
      <div className='contact-box' style={{position : "absolute"}}>

     <h1 
     className="contact-heading"

     >Contact Me</h1>
     <h3 className="contact-title">Get in Touch </h3>

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
      </div>
  )
}

export default Contact
