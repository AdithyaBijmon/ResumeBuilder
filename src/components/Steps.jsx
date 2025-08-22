import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import swal from 'sweetalert';
import { addResumeAPI } from '../services/allAPI';


const steps = ['Basic Informations', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];


function Steps({ userInput, setUserInput,setFinish}) {
  const skillSuggestion = ['NODE JS', 'EXPRESS', 'MONGODB', 'REACT', 'ANGULAR', 'NEXT JS', 'BOOTSTRAP', 'TAILWIND', 'CSS', 'GIT']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  console.log(userInput)

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // add skills
  const addSkillRef = React.useRef()

  const addSkill = (inputSkill) => {
    if (inputSkill) {
      if (userInput.skills.includes(inputSkill)) {
        alert("Skill already exist.")
      }
      else {
        setUserInput({ ...userInput, skills: [...userInput.skills, inputSkill] })
      }
    }
  }

  const removeSkill = (skill) => {
    setUserInput({ ...userInput, skills: userInput.skills.filter(item => (item != skill)) })
  }

  const renderStepArrayContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div >
          <h3>Personal Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, name: e.target.value } })} value={userInput.personalDetails.name} />
            <TextField id="standard-basic-title" label="Job Title" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, jobTitle: e.target.value } })} value={userInput.personalDetails.jobTitle} />
            <TextField id="standard-basic-location" label="Location" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, location: e.target.value } })} value={userInput.personalDetails.location} />
          </div>
        </div>
      )

      case 1: return (
        <div >
          <h3>Contact Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-email" label="Email" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, email: e.target.value } })} value={userInput.personalDetails.email} />
            <TextField id="standard-basic-phone" label="Phone number" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, phone: e.target.value } })} value={userInput.personalDetails.phone} />
            <TextField id="standard-basic-github" label="Github Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, github: e.target.value } })} value={userInput.personalDetails.github} />
            <TextField id="standard-basic-linkedIn" label="LinkedIn Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, linkedin: e.target.value } })} value={userInput.personalDetails.linkedin} />
            <TextField id="standard-basic-portfolio" label="Portfolio  Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, portfolio: e.target.value } })} value={userInput.personalDetails.portfolio} />
          </div>
        </div>
      )

      case 2: return (
        <div >
          <h3>Education Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-course" label="Course Name" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, course: e.target.value } })} value={userInput.education.course} />
            <TextField id="standard-basic-college" label="College Name" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, college: e.target.value } })} value={userInput.education.college} />
            <TextField id="standard-basic-university" label="University " variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, university: e.target.value } })} value={userInput.education.university} />
            <TextField id="standard-basic-year" label="Year of Passout" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, year: e.target.value } })} value={userInput.education.year} />
          </div>
        </div>
      )

      case 3: return (
        <div >
          <h3>Professional Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-role" label="Job or Internship " variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } })} value={userInput.experience.jobRole} />
            <TextField id="standard-basic-company" label="Company Name" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} value={userInput.experience.company} />
            <TextField id="standard-basic-clocation" label="Location " variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } })} value={userInput.experience.jobLocation} />
            <TextField id="standard-basic-duration" label="Duration" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} value={userInput.experience.duration} />
          </div>
        </div>
      )

      case 4: return (
        <div >
          <h3>Skills</h3>
          <div className="d-flex align-items-center justify-content-between p-3">
            {/* <TextField sx={{ width: '300px' }} id="standard-basic-skill" label="Add skills " variant="standard" /> */}
            <input ref={addSkillRef} type="text" className="form-control" placeholder='Add Skills' />
            <Button onClick={() => addSkill(addSkillRef.current.value)} variant="text">ADD</Button>
          </div>

          <h5>Suggestions:</h5>
          <div className='d-flex flex-wrap justify-content-between my-3'>
            {
              skillSuggestion.map(userSkill => (
                <Button onClick={() => addSkill(userSkill)} className='m-1' key={userSkill} variant="outlined">{userSkill}</Button>
              ))
            }
          </div>
          <h5>Added Skills:</h5>
          <div className='d-flex flex-wrap justify-content-between my-3'>
            {
              userInput.skills.length > 0 ?
                userInput.skills.map(skill => (
                  <span key={skill} className='btn btn-primary d-flex justify-content-center align-items-center my-1 '>{skill}<button onClick={() => removeSkill(skill)} className='text-light btn'>X</button></span>
                )) :
                <span>No skills added.</span>
            }
          </div>

        </div>
      )

      case 5: return (
        <div >
          <h3>Professional Summary</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-summary" label="Write a short summary of yourself" multiline rows={5} variant="standard" onChange={e => setUserInput({ ...userInput, summary: e.target.value })} value={userInput.summary} />

          </div>
        </div>
      )

    }
  }
  // add resume
  const handleAddResume = async () => {
    const { name, jobTitle, location } = userInput.personalDetails

    if (name && jobTitle && location) {
      try{
        const result = await addResumeAPI(userInput)
        swal("Success!", "Resume added successfully!", "success");
        setFinish(true)
      }
      catch(error){
      console.log(error)
      swal("OOPs!", "Resume added failed!", "error");
      setFinish(false)
      }
    }
    else {
      alert("Please fill the form")
    }

  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* View of each step */}
          <Box>
            {renderStepArrayContent(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            {activeStep === steps.length - 1 ?
              <Button onClick={handleAddResume}>Finish</Button> :
              <Button onClick={handleNext}>Next</Button>
            }

          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

export default Steps