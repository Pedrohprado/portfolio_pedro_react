import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Projct1 from '../assets/firstproject_mac.png'
import '../styles/Project.css'

export default function Projects() {
  return (
    <div className='projects'>
      <h2>Projetos pessoais</h2>
      <div className="projectList">
        <ProjectItem name="Criar e compartilhar eventos" image={Projct1}/>
        <ProjectItem name="Portifólio Med Veterinária"/>
        <ProjectItem/>
        <ProjectItem/>

      </div>
    </div>
  )
}
