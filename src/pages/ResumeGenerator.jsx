import React from 'react'
import { FcDocument } from "react-icons/fc";
import { IoDownload } from "react-icons/io5";
import { Link } from 'react-router-dom';

function ResumeGenerator() {
  return (
    <div className='container-fluid'>
      <div  >
        <h1 className='text-center mt-5'>Create a job-winning Resume in minutes</h1>

        <div style={{ height: '60vh' }} className='row d-flex align-items-center justify-content-center'>

          <div className='col-4 shadow p-5 text-center'>
            <FcDocument className='fs-1 mb-3'/>
            <h4>Add your information</h4>
            <p>Add pre-written examples to each section</p>

            <h5>Step 1</h5>

          </div>
          <div className="col-1"></div>

          <div className="col-4 shadow p-5 text-center">
            <IoDownload  className='text-danger fs-1 mb-3'/>
            <h4>Download your Resume</h4>
            <p>Download and start applying</p>

            <h5>Step 2</h5>
          </div>

          <div className='text-center'>
            <Link to={'/form'}><button className='btn text-light' style={{backgroundColor:'purple'}}>Let's start</button></Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ResumeGenerator