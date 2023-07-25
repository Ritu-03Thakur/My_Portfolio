import ProjectCard from "./ProjectCard";
import { projectDetails } from "../data/data";

export default function Project() {
  return (
    <>
      <div className="projects" id="projects">
        <div className="heading">
        <h1 >PROJECT</h1>
        </div>
        <div className="projectList">
          {projectDetails.map((items) => (
            <ProjectCard sx={{ m: 5 }} key={items.id} items={items} />
          ))}
        </div>
      </div>
    </>
  );
}
