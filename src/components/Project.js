import ProjectCard from "./ProjectCard/ProjectCard";

export default function Project() {
  return (
    <>
      <div className="project">
        <div className="head">

        <h1 className="heading">PROJECT</h1>
        </div>
        <div className="projectList">
          <ProjectCard sx={{ m : 5 }  } 
          pic = "./images/logo.jpeg"
          title = "Shopping Website" 
          desc = " Full Stack website "
          github = "/"
          />
          {/* <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
        </div>
      </div>
    </>
  );
}
