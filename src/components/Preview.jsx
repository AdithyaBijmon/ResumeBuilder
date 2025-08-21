import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { GrDocumentDownload } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';



function Preview({ userInput }) {
    console.log(userInput)
    return (
        <>

            {userInput.personalDetails.name != "" &&
                <>
                    <Stack direction={'row'} sx={{ justifyContent: 'flex-end' }}>
                        <Stack direction={'row'}>
                            {/* download */}
                            <button className='btn fs-3 text-primary' ><GrDocumentDownload /></button>
                            {/* edit */}
                            <Edit />
                            {/* history */}
                            <Link to={'/history'} className='btn fs-3 text-primary' ><FaHistory /></Link>
                            <Link to={'/resume'} className='btn text-primary' >BACK</Link>
                        </Stack>
                    </Stack>

                    <Box component="section" >
                        <Paper elevation={3} sx={{ my: 5, p: 4, textAlign: 'center' }}>
                            <h2>{userInput.personalDetails.name}</h2>
                            <h5>{userInput.personalDetails.jobTitle}</h5>
                            <p><span>{userInput.personalDetails.phone}</span><span>|</span><span>{userInput.personalDetails.email}</span><span>|</span> <span>{userInput.personalDetails.location}</span></p>
                            <p>
                                <Link className='me-2' href={userInput.personalDetails.github}>GitHub</Link><span>|</span>
                                <Link className='mx-2' href={userInput.personalDetails.linkedin}>LinkedIn</Link><span>|</span>
                                <Link className='ms-2' href={userInput.personalDetails.portfolio}>Portfolio</Link>
                            </p>
                            <Divider sx={{ fontSize: '22px' }}>Summary</Divider>
                            <p className='fs-5 text-start ms-2'>{userInput.summary}</p>

                            <Divider sx={{ fontSize: '22px', marginBottom: '10px' }}>Education</Divider>
                            <h5 className='mb'>{userInput.education.course}</h5>
                            <p><span>{userInput.education.college}</span><span>|</span><span>{userInput.education.university}</span><span>|</span> <span>{userInput.education.year}</span></p>

                            <Divider sx={{ fontSize: '22px', marginBottom: '10px' }}>Professional Experience</Divider>
                            <h5 className='mb'>{userInput.experience.jobRole}</h5>
                            <p><span>{userInput.experience.company}</span><span>|</span><span>{userInput.experience.jobLocation}</span><span>|</span> <span>{userInput.experience.duration}</span></p>

                            <Divider sx={{ fontSize: '22px', marginBottom: '10px' }}>Skills</Divider>

                            <Stack justifyContent={'space-evenly'} spacing={2} direction="row" sx={{ flexWrap: 'wrap', gap: '10px' }}>
                                {userInput.skills?.map(skill => (
                                    <Button variant="contained">{skill}</Button>
                                ))}



                            </Stack>

                        </Paper>
                    </Box>
                </>

            }
        </>
    )
}

export default Preview