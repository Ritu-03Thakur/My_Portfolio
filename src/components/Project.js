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
          desc = " Weather App "
          />

          <ProjectCard sx={{ m : 5 }  } 
          pic = "./images/logo.jpeg"
          desc = " Shawn  website "
          />
          <ProjectCard sx={{ m : 5 }  } 
          pic = "./images/logo.jpeg"
          desc = " Ritz-Chat App "
          />
          
        </div>
      </div>
    </>
  );
}
