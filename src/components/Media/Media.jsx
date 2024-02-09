import React from 'react'

export default function Media() {
  return (
    <>
      <div className='container-fluid'>
         <div className="row bg-dark text-white text-center py-5">
               <div className="col-md-4">
                   <h4>LOCATION</h4>
                   <p>2215 John Daniel Drive</p>
                   <p>Clark, MO 65243</p>
               </div>
               <div className="col-md-4">
                   <h4>AROUND THE WEB</h4>
                   <div>
                   <i className="fa-brands fa-facebook px-2 rounded-circle" style={{color:' white'}}></i>
                   <i class="fa-brands fa-linkedin-in px-2 rounded-circle" style={{color:' white'}}></i>
                   <i class="fa-solid fa-globe px-2 rounded-circle" style={{color:' white'}}></i>
                   </div>
               </div>
               <div className="col-md-4">
                    <h4>ABOUT FREELANCER</h4>
                    <p>Freelance is a free to use, licensed Bootstrap theme</p>
                    <p> created by Yasmine </p>
               </div>
         </div>
        </div>
    </>
  )
}
