import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaEdit } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import { editResumeAPI, getResumeAPI } from '../services/allAPI';
import swal from 'sweetalert';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Edit({ resumeId,setUpdateResume }) {

    const [userSkills, setUserSkills] = React.useState("")
    const [userInput, setUserInput] = React.useState({})
    const [open, setOpen] = React.useState(false);

    console.log(userInput)
    React.useEffect(() => {
        resumeId && getEditResumeDetails()
    }, [resumeId])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // console.log(resumeId)


    const handleResumeUpdate = async () => {
        try {
            const result = await editResumeAPI(userInput?.id, userInput)
             swal("Success!", "Resume updated successfully!", "success");
             setUpdateResume(result?.data)
            handleClose()
        }
        catch (err) {
            console.log(err);

        }
    }

    const getEditResumeDetails = async () => {
        try {
            const result = await getResumeAPI(resumeId)
            setUserInput(result?.data)
        }
        catch (err) {
            console.log(err);

        }
    }

    const addSkill = () => {
        if (userSkills) {
            if (userInput.skills.includes(userSkills)) {
                alert("Skill already exist.")
            }
            else {
                setUserInput({ ...userInput, skills: [...userInput.skills, userSkills] })

            }
            setUserSkills('')
        }
    }

    const removeSkill = (skill) => {
        setUserInput({ ...userInput, skills: userInput.skills.filter(item => (item != skill)) })
    }


    return (
        <>
            <button onClick={handleOpen} className='btn fs-3 text-primary' ><FaEdit /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* Personal details */}
                        <h3>Personal Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, name: e.target.value } })} value={userInput?.personalDetails?.name} />
                            <TextField id="standard-basic-title" label="Job Title" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, jobTitle: e.target.value } })} value={userInput?.personalDetails?.jobTitle} />
                            <TextField id="standard-basic-location" label="Location" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, location: e.target.value } })} value={userInput?.personalDetails?.location} />
                        </div>

                        {/* Contact details */}
                        <h3>Contact Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-email" label="Email" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, email: e.target.value } })} value={userInput?.personalDetails?.email} />
                            <TextField id="standard-basic-phone" label="Phone number" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, phone: e.target.value } })} value={userInput?.personalDetails?.phone} />
                            <TextField id="standard-basic-github" label="Github Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, github: e.target.value } })} value={userInput?.personalDetails?.github} />
                            <TextField id="standard-basic-linkedIn" label="LinkedIn Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, linkedin: e.target.value } })} value={userInput?.personalDetails?.linkedin} />
                            <TextField id="standard-basic-portfolio" label="Portfolio  Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails, portfolio: e.target.value } })} value={userInput?.personalDetails?.portfolio} />
                        </div>

                        {/* Education details */}
                        <h3>Education Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-course" label="Course Name" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, course: e.target.value } })} value={userInput?.education?.course} />
                            <TextField id="standard-basic-college" label="College Name" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, college: e.target.value } })} value={userInput?.education?.college} />
                            <TextField id="standard-basic-university" label="University " variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, university: e.target.value } })} value={userInput?.education?.university} />
                            <TextField id="standard-basic-year" label="Year of Passout" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, year: e.target.value } })} value={userInput?.education?.year} />
                        </div>
                        {/* Professional details */}
                        <h3>Professional Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-role" label="Job or Internship " variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } })} value={userInput?.experience?.jobRole} />
                            <TextField id="standard-basic-company" label="Company Name" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} value={userInput?.experience?.company} />
                            <TextField id="standard-basic-clocation" label="Location " variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } })} value={userInput?.experience?.jobLocation} />
                            <TextField id="standard-basic-duration" label="Duration" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} value={userInput?.experience?.duration} />
                        </div>
                        {/* skills */}
                        <h3>Skills</h3>
                        <div className="d-flex align-items-center justify-content-between p-3">

                            <TextField onChange={e => setUserSkills(e.target.value)} sx={{ width: '300px' }} id="standard-basic-skill" label="Add skills " value={userSkills} variant="standard" />
                            <Button onClick={addSkill} variant="text">ADD</Button>
                        </div>
                        <h5>Selected Skills:</h5>
                        <div className='d-flex  my-3 flex-wrap'>
                            {
                                userInput?.skills?.length > 0 && userInput?.skills?.map(item => (
                                    <span key={item} className='btn btn-outline-primary d-flex justify-content-center align-items-center m-1'>{item} <button onClick={() => removeSkill(item)} className='text-light btn'>X</button></span>
                                ))
                            }
                        </div>

                        {/* Summary */}
                        <h3>Professional Summary</h3>
                        <div className="d-flex row p-3">
                            <TextField onChange={e => setUserInput({ ...userInput, summary: e.target.value })} id="standard-basic-summary" label="Write a short summary of yourself" multiline rows={5} variant="standard" value={userInput?.summary} />

                        </div>

                    </Typography>
                    <Button onClick={handleResumeUpdate}>UPDATE</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Edit