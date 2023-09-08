import ProjectCard from "./ProjectCard";
import { projectDetails } from "../data/data";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Project() {
  return (
    <>
      <div className="projects" id="projects">
        <div className="heading">
        <h1 >PROJECT</h1>
        </div>
        <div className="projectList">
        {projectDetails.slice(0, 2).map((items) => (
  <ProjectCard sx={{ m: 5 }} key={items.id} items={items} />
))}
        </div>
        <Link to={"/allprojects"} >        
        <Button  size="medium" variant="contained" style={{backgroundColor : "rgb(26 90 84)"  ,  color: "#f7f7f7"}}>
            MORE PROJECTS
          </Button>
         </Link>
      </div>
    </>
  );
}
