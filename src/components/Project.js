import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <>
      <div className="project">
        <h1 className="heading">PROJECT</h1>
        <div className="projectList">
          <ProjectCard sx={{ m : 5 }  }/>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  );
}
