import React from 'react'
import ProjectCard from './ProjectCard'
import { projectDetails } from '../data/data'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const AllProject = () => {
  return (
    <>
      <div className="projects"  style={{marginTop : "20px"}}>
        <div className="heading">
        <Link to={"/"} >        
        <Button  size="medium" variant="contained" style={{backgroundColor : "rgb(26 90 84)"  ,  color: "#f7f7f7"}}>
            home
          </Button>
         </Link>

        <h1 >PROJECT</h1>
        </div>
        <div className="projectList">
          {projectDetails.map((items) => (
            <ProjectCard sx={{ m: 5 }} key={items.id} items={items} />
          ))}
        </div>
      </div>
    </>
  )
}

export default AllProject
