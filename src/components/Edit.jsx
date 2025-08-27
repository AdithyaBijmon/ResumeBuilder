import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaEdit } from "react-icons/fa";
import TextField from '@mui/material/TextField';


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

function Edit({resumeId}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(resumeId)
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
                            <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                            <TextField id="standard-basic-title" label="Job Title" variant="standard" />
                            <TextField id="standard-basic-location" label="Location" variant="standard" />
                        </div>

                        {/* Contact details */}
                        <h3>Contact Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-email" label="Email" variant="standard" />
                            <TextField id="standard-basic-phone" label="Phone number" variant="standard" />
                            <TextField id="standard-basic-github" label="Github Profile Link" variant="standard" />
                            <TextField id="standard-basic-linkedIn" label="LinkedIn Profile Link" variant="standard" />
                            <TextField id="standard-basic-portfolio" label="Portfolio  Link" variant="standard" />
                        </div>

                        {/* Education details */}
                        <h3>Education Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-course" label="Course Name" variant="standard" />
                            <TextField id="standard-basic-college" label="College Name" variant="standard" />
                            <TextField id="standard-basic-university" label="University " variant="standard" />
                            <TextField id="standard-basic-year" label="Year of Passout" variant="standard" />
                        </div>
                        {/* Professional details */}
                        <h3>Professional Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-role" label="Job or Internship " variant="standard" />
                            <TextField id="standard-basic-company" label="Company Name" variant="standard" />
                            <TextField id="standard-basic-clocation" label="Location " variant="standard" />
                            <TextField id="standard-basic-duration" label="Duration" variant="standard" />
                        </div>
                        {/* skills */}
                        <h3>Skills</h3>
                        <div className="d-flex align-items-center justify-content-between p-3">
                            <TextField sx={{ width: '300px' }} id="standard-basic-skill" label="Add skills " variant="standard" />
                            <Button variant="text">ADD</Button>
                        </div>
                        <h5>Added Skills:</h5>
                        <div className='d-flex flex-wrap justify-content-between my-3'>
                            <span className='btn btn-outline-primary d-flex justify-content-center align-items-center '>REACT <button className='text-light btn'>X</button></span>
                        </div>

                        {/* Summary */}
                        <h3>Professional Summary</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-summary" label="Write a short summary of yourself" multiline rows={5} variant="standard" />

                        </div>

                    </Typography>
                    <Button>UPDATE</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Edit