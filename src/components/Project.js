import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <>
      <div className="project">
        <div className="head">

        <h1 className="heading">PROJECT</h1>
        </div>
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
