import React from 'react'
import img1 from '../../assets/images/poert1.png'
import img2 from '../../assets/images/port2.png'
import img3 from '../../assets/images/port3.png'

export default function Portfolio() {
  return (
    <div className='text-white text-center'>
      <h1 className='py-2 pt-4 color fw-bolder'>PORTFOLIO COMPONENT</h1>
      <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3 style2"/>
          <i className="fa-solid fa-star color" /> 
          <div className="line ms-3 style2"/>
       </div>
      <div className="container">
        <div className="row py-4">
            <div className="col-md-4">
               <img src={img1} className='w-100 pt-2' height={250} alt="" />
            </div>
            <div className="col-md-4">
               <img src={img2} className='w-100 pt-2' height={250} alt="" />
            </div>
            <div className="col-md-4">
               <img src={img3} className='w-100 pt-2' height={250} alt="" />
            </div>
            <div className="col-md-4">
               <img src={img1} className='w-100 pt-2' height={250} alt="" />
            </div>
            <div className="col-md-4">
               <img src={img2} className='w-100 pt-2' height={250} alt="" />
            </div>
            <div className="col-md-4">
               <img src={img3} className='w-100 pt-2' height={250} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
