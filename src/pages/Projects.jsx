import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'

import '../styles/Project.css'

export default function Projects() {
  return (
    <div className='projects'>
      <h2>Projetos pessoais</h2>
      <div className="projectList">
        {ProjectList.map((project, idx) =>{
          return <ProjectItem id={idx} name={project.name} image={project.image}/>
        })}
      </div>
    </div>
  )
} 