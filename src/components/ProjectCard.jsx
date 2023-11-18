import * as React from "react";
import Card from "@mui/material/Card";
import  CardMedia  from "@mui/material/CardMedia";
import Button from '@mui/material/Button';
import {ReadMore , Language} from "@mui/icons-material";



const  ProjectCard = ({items : { pic , title , desc , site , githubLink  }}) => {

  const btn = {
    alignItems : "center", 
    backgroundColor: "rgb(255 255 255)" ,
    fontWeight: "bold" , 
    gap: "4px" , 
    fontSize: "12px" ,
    color :  "black" 
  }
  return (
    <Card  sx={{ margin: 5  , padding : 1}} className="card"  >
      <CardMedia className="card-img"
        component="img"
        alt=" "
        image= {pic} />
      <div className="card-heading">
        <h2 >{title}</h2>
        <p >{desc} </p>


        <div className="card-link" >
    
        <a href= {site} >        
          <Button  size="small" variant="contained"  style={btn}  >View Live <Language sx={{ fontSize: "18px" , color : "#020202" }}/> </Button>
         </a>

        <a href={githubLink} >        
          <Button  size="small" variant="contained"  style={btn}  >Read More  <ReadMore sx={{ fontSize: "18px" , color : "#020202" }}/> </Button>
         </a>


        </div>
      </div>
    </Card>
  );
}
export default ProjectCard ; 
