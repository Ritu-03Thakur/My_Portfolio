import * as React from "react";
import Card from "@mui/material/Card";
import "./ProjectCard.css";
import  CardMedia  from "@mui/material/CardMedia";
import Button from '@mui/material/Button';



export default function ProjectCard(props) {
  return (
    <Card className="view view-first" sx={{ margin: 5  , padding : 1}} style = {{
      backgroundColor :  "#000000"  ,boxShadow : "1px 2px 2px 3px rgb(36 91 116)"
    }}>
      <CardMedia
        className="img"
        component="img"
        alt="green iguana"
        image= {props.pic}
        height = {100}
        width = {75}
      />
      <div className="mask" style={{display : "flex" ,  gap : "10px" , flexDirection : "column" }}>
        <p>{props.desc} </p>
        <div className="links" style={{display : "flex" ,  gap : "10px"  }}>
          <Button className="info" size="medium" variant="contained" >Github</Button>
          <Button className="info" size="medium" variant="contained" >Demo</Button>
        </div>
      </div>
    </Card>
  );
}
