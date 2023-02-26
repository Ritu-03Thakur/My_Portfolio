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
          pic = "./images/weather.png"
          desc = " Weather App "
          />

          <ProjectCard sx={{ m : 5 }  } 
          pic = "./images/shawn.png"
          desc = " Shawn  website "
          />
          <ProjectCard sx={{ m : 5 }  } 
          pic = "./images/chat.png"
          desc = " Ritz-Chat App "
          />
          
        </div>
      </div>
    </>
  );
}
