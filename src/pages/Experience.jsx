import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import '../styles/Experience.css'
import SchoolIcon from '@material-ui/icons/SchoolRounded'
import WorkIcon from '@material-ui/icons/WorkRounded'

export default function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#35013A'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2015 - 2017'
          iconStyle={{ background: '#35013A', color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h4 className='vertical-timeline-element-title'>Colegio Preve Objetivo</h4>
          <p className='descrition'>Ensino Médio, Pederneiras, SP</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2019 - 2022 / incompleto'
          iconStyle={{ background: '#35013A', color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h4 className='vertical-timeline-element-title'>Ciência da Computação - Unisagrado</h4>
          <p className='descrition'>Ensino Superior, Bauru, SP</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2020 - 2022'
          iconStyle={{ background: '#35013A', color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className='vertical-timeline-element-title'>Instrutor de Treinamento</h4>
          <p className='descrition'>Pedertractor, Pederneiras, SP</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2022 - atual'
          iconStyle={{ background: '#35013A', color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className='vertical-timeline-element-title'>Instrutor de Treinamento / Desenvolvedor IoT</h4>
          <p className='descrition'>Pedertractor, Pederneiras, SP</p>
          <p>Atuando no desenvolvimento de projetos Front-end e automação industrial, utilizando microcontroladores e linguagens de programação/ferramentas como: <br /> C++, JavaScript, ReactJS, nodeJS e entre outras.</p>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
