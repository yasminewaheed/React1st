import React from 'react'
import man from '../../assets/images/man1.svg'

export default function Home() {
  return (
    <div className='bg-app text-white text-center py-2'>

        <img src={man} className='w-25 pt-2 ' height={250} alt="man" />
        <h1 className='py-2 pt-4 fw-bolder'>START FRAMEWORK</h1>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3 style"/>
          <i className="fa-solid fa-star text-white" /> 
          <div className="line ms-3 style"/>
       </div>
       <p>Graphic Artist - Web Designer - Illustrator</p>

    </div>
  )
}
