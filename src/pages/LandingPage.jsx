import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    <section id='part1' style={{width:'100%',overflowX:'hidden',height:'500px',backgroundImage:"url('https://cdn.pixabay.com/photo/2020/07/11/22/57/meeting-5395567_1280.jpg')",backgroundPosition:'top',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:'fixed'}}>
      <div className='row pt-5'>
        <div className="col-12 col-md-4"></div>
        <div className="col-12 col-md-4 border box my-5 py-5 rounded text-center">
          <h3>Designed to get hired</h3>
          <h4>Your skills,your story,your next job - all in one</h4>
          <Link to={'/resume'}><button className='btn btn-primary'>Make your Resume</button></Link>

        </div>
        <div className="col-12 col-md-4"></div>
      </div>

    </section>
    </>
  )
}

export default LandingPage