import React from 'react'
import '../styles/Home.css'
import { FaRegHandPeace } from 'react-icons/fa'

export default function Home() {
  return (
    <div className='home'>
      <div className="about">
        <h3 className='mobileDesc'>Developer Frontend & IoT</h3>
        <p className='mobileName'>Pedro H Prado</p>

        <h2>Oi <FaRegHandPeace /> <span>eu sou o Pedro Prado</span></h2>
        <h1>Developer FrontEnd & IoT</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ex quod voluptas eveniet iste enim Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, nisi possimus, molestiae reiciendis numquam dicta temporibus voluptatibus tempore, consectetur consequuntur in at quibusdam. Nam provident officiis cupiditate asperiores sapiente iure?</p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <div className="list">
          <div className="item">
            <h3>Front-End</h3>
            <span>ReactJS, HTML, CSS, BootStrap, MaterialUI, TailwindCSS e StyledComponents.</span>
          </div>
          <div className="item">
            <h3>Linguagens de programação</h3>
            <span>JavaScript, TypeSctipt, C++ e Python.</span>
          </div>
          <div className="item">
            <h3>IoT</h3>
            <span>Microcontroladores - ARM, Atmega, ESP32, ESP8266;</span>
            <span>Protocolos - HTTP, HTTPS e MQTT.</span>
          </div>
          <div className="item">
            <h3>Back-End - estudando</h3>
            <span>NodeJS, ExpressJS, MySQL e Mongo DB.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
