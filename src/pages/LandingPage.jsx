import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      {/* Frist section */}
      <section className='container-fluid d align-items-center' style={{ width: '100%', height: '80vh', backgroundImage: "url('https://cdn.pixabay.com/photo/2020/07/11/22/57/meeting-5395567_1280.jpg')", backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <div className='row pt-5'>
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 row align-items-center d-flex shadow border  mt-5 py-5 rounded text-center " style={{ backgroundColor: 'rgb(255,255,255,0.5)' }}>
            <h3>Designed to get hired</h3>
            <h4>Your skills,your story,your next job - all in one</h4>
            <Link to={'/resume'}><button className='btn btn-primary'>Make your Resume</button></Link>

          </div>
          <div className="col-12 col-md-4"></div>
        </div>

      </section>

      {/* Tools */}
      <section className='tools p-5'>
        <h1 className='text-center'>Tools</h1>
        <div className='row align-items-center'>
          <div className='tool-content col-12 col-md-6 p-5'>
            <h4>Resume</h4>
            <p>Create unlimited new Resumes and easily edit them afterwards.</p>

            <h4>Cover Letters</h4>
            <p>Easily write proffessional cover letters.</p>

            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>

            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>

          </div>
          <div className='tool-image col-12 col-md-6'>
            <img className='img-fluid' src="" alt="" />

          </div>
        </div>

      </section>

      <section style={{ width: '100%', height: '500px', backgroundImage: "url('https://cdn.pixabay.com/photo/2020/07/11/22/57/meeting-5395567_1280.jpg')", backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      </section>

      {/* Testimony */}

        <section className='tools p-5'>
        <h1 className='text-center'>Testimony</h1>
        <div className='row align-items-center p-5'>
          <div className='tool-content col-12 col-md-6 p-5'>
            <h3>Trusted by proffessional world wide</h3>
            <p>Create unlimited new Resumes and easily edit them afterwards.</p>

            <h4>Cover Letters</h4>
            <p>Easily write proffessional cover letters.</p>

            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>

            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>

          </div>
          <div className='tool-image col-12 col-md-6'>
            <div className='row '>
              <div className="col-3">
                <img className='w-100' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
              </div>

               <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="" />
              </div>

               <div className="col-3">
                <img className='w-100' src="https://cdn.getmerlin.in/cms/Screenshot_2024_04_05_130256_473f8428ec.png" alt="" />
              </div>

               <div className="col-3">
                <img className='w-100' src="https://www.profilebakery.com/wp-content/uploads/2023/04/women-AI-Profile-Picture.jpg" alt="" />
              </div>

            </div>
            <div className='row my-3'>
              <div className="col-3">
                <img className='w-100' src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995dfd_66236531e8288ee0657ae7a7_Business%2520Professional.webp" alt="" />
              </div>

               <div className="col-3">
                <img className='w-100' src="https://www.profilebakery.com/wp-content/uploads/2023/04/ai-headshot-generator-4.jpg" alt="" />
              </div>

               <div className="col-3">
                <img className='w-100' src="https://hyde.sgp1.digitaloceanspaces.com/nexus/items/35d9b18f-2186-4019-915a-4f00e6333ce9.jpeg" alt="" />
              </div>

               <div className="col-3">
                <img className='w-100' src="https://lh3.googleusercontent.com/proxy/3QxvOoGFYnR17Oc_K1jOncMLiNQldN0egZWT-PM4yHqekZqRZaSegFY8aSFVwnfpBgfpRQg8GmXAOMQoIIS6q-bW4xtE8dfBGKYQGDIXkJO28ygUeBrAHw" alt="" />
              </div>

            </div>

            <div className='row '>
              <div className="col-3">
                <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s" alt="" />
              </div>

               <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="" />
              </div>

               <div className="col-3">
                <img className='w-100' src="https://cdn.getmerlin.in/cms/Screenshot_2024_04_05_130256_473f8428ec.png" alt="" />
              </div>

               <div className="col-3">
                <img className='w-100' src="https://www.profilebakery.com/wp-content/uploads/2023/04/women-AI-Profile-Picture.jpg" alt="" />
              </div>

            </div>

          </div>
        </div>

      </section>
    </>
  )
}

export default LandingPage