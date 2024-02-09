import React from 'react'

export default function About() {
  return (
    <div className='bg-app text-white text-center py-5'>
      <h2 className='py-2 pt-4 fw-bolder'>ABOUT COMPONENT</h2>
      <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3 style"/>
          <i className="fa-solid fa-star text-white" /> 
          <div className="line ms-3 style"/>
       </div>
      <div className="container">
        <div className="row py-4">
            <div className="col-md-6">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </div>
            <div className="col-md-6">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </div>
        </div>
      </div>
    </div>
  )
}
