import * as React from "react";
import Card from "@mui/material/Card";
import "./ProjectCard.css";
import CardActions from '@mui/material/CardActions';
import {Link} from "react-router-dom" ; 
import CardMedia from "@mui/material/CardMedia";
import Button from '@mui/material/Button';



export default function ProjectCard(props) {
  return (
    <Card className="view view-first" sx={{ margin: 5, boxShadow: 5 }}>
      <CardMedia
        className="img"
        component="img"
        alt="green iguana"
        image= {props.pic}
      />
      <div className="mask">
        <h4>{props.title}</h4>
        <p>{props.desc}
        </p>
        <Link to={props.github} >
        <CardActions>
          <Button className="info" size="medium" variant="contained" >Read More</Button>
        </CardActions>
        </Link>
      </div>
    </Card>
  );
}
