import React from 'react'

export default function Contact() {
  return (
    <div className='text-white text-center my-3'>
      <h1 className='py-2 pt-4 color fw-bolder'>CONATCT SECTION</h1>
      <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3 style2"/>
          <i className="fa-solid fa-star color" /> 
          <div className="line ms-3 style2"/>
      </div>
      <input type="text" placeholder="userName" id="name" name="name" className="form-control border-0 w-50 border-bottom py-3 mb-3"/>
      <input type="number" placeholder='userAge' id='age' name="age" className="form-control border-0 w-50 border-bottom py-3 mb-3" />
      <input type="email" placeholder='userEmail' id='email' name="email" className="form-control border-0 w-50 border-bottom py-3 mb-3" />
      <input type="password" placeholder='userPassword' id='password' name="password" className="form-control border-0 w-50 border-bottom py-3 mb-3" />
      <button type='submit' className='btn btn-dark text-white '>Send Message</button>

    </div>
  )
}
