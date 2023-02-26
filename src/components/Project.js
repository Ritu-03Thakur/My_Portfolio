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
          git = "https://github.com/Ritu-03Thakur/WeatherApp"
          site = "https://weather-app-zeta-nine-68.vercel.app/"
          />

          <ProjectCard sx={{ m : 5 }  } 
          pic = "./images/shawn.png"
          desc = " Shawn  website "
          git = "https://github.com/Ritu-03Thakur/shawn-website"
          site = "https://shawn-website.vercel.app/"
          />
          <ProjectCard sx={{ m : 5 }  } 
          pic = "./images/chat.png"
          desc = " Ritz-Chat App "
          git = "https://github.com/Ritu-03Thakur/chat-app"
          site = "https://ritz-chat.netlify.app"
          />
          
        </div>
      </div>
    </>
  );
}
