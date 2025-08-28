import React, { useState } from 'react'
import Steps from '../components/Steps'
import Preview from '../components/Preview'

function UserForm() {

  const [userInput, setUserInput] = React.useState({
    personalDetails: {
      name: '',
      jobTitle: '',
      location: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      portfolio: ''
    },
    education: {
      course: '',
      college: '',
      university: '',
      year: ''
    },
    experience: {
      jobRole: '',
      company: '',
      jobLocation: '',
      duration: ''
    },
    skills: [],
    summary: ''
  })

  const [finish, setFinish] = useState(false)

  // state for storing id of created resume
 const [resumeId,setResumeId] = useState("")


  return (
    <>

      {finish ?
        <div style={{ height: '100vh' }} className="d-flex align-items-center justify-content-center">
          <Preview resumeId={resumeId} setUserInput={setUserInput} userInput={userInput} finish={finish}/>
        </div>
        :

        <div className="container">
          <div className="row p-5">
            <div className="col-lg-6">
              <Steps userInput={userInput} setResumeId={setResumeId} setUserInput={setUserInput} setFinish={setFinish}/>
            </div>
            <div className="col-lg-6">
              <Preview userInput={userInput}  />
            </div>
          </div>
        </div>

      }




    </>
  )
}

export default UserForm