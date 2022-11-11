import * as React from "react";
import Card from "@mui/material/Card";
import "./ProjectCard.css";
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import wallpaper from "./img/wallpaper.jpg";

export default function ProjectCard() {
  return (
    <Card className="view view-first" sx={{ margin: 5, boxShadow: 5 }}>
      <CardMedia
        className="img"
        component="img"
        alt="green iguana"
        image={wallpaper}
      />
      <div className="mask">
        <h2>Calculator</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          modi quos 
        </p>
        <CardActions>
          <Button className="info" size="medium" variant="contained"  >Read More</Button>
        </CardActions>
      </div>
    </Card>
  );
}
