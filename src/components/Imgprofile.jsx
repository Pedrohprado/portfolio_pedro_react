import React from 'react'
import '../styles/Imgprofile.css'

export default function Imgprofile(image) {
  return (
    <div className='imgprofile'>
      <div style={{backgroundImage: `url(${image})`}} className='b'/>
    </div>
  )
}
