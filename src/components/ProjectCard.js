import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import wallpaper from "./img/wallpaper.jpg";

export default function ProjectCard() {
  return (
    <Card sx={{ maxWidth: 345  , margin : 5 , boxShadow: 5  }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {wallpaper} />
      <CardActions>
        <Button size="small">Link </Button>
      </CardActions>
    </Card>
  );
}
