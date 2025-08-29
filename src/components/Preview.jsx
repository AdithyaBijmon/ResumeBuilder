import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { GrDocumentDownload } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { addDownloadHistoryAPI } from '../services/allAPI';



function Preview({ userInput, setUserInput, finish, resumeId }) {
    // console.log(userInput)
    const [downloadStatus, setDownloadStatus] = useState(false)

  

    const downloadCV = async () => {

        const input = document.getElementById("result")
        const canvas = await html2canvas(input, { scale: 2 })
        const imgURL = canvas.toDataURL('image/png')

        const pdf = new jsPDF()
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = pdf.internal.pageSize.getHeight()

        pdf.addImage(imgURL, 'PNG', 0, 0, pdfWidth, pdfHeight)
        pdf.save('resume.pdf')

        //get Date
        const localTimeData = new Date()
        const timeStamp = `${localTimeData.toLocaleDateString()},${localTimeData.toLocaleTimeString()}`
        console.log(timeStamp)

        // add download cv to history

        try {
            const result = await addDownloadHistoryAPI({ ...userInput, imgURL, timeStamp })
            console.log(result)
            setDownloadStatus(true)

        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <>

            {userInput.personalDetails.name != "" &&
                <div className='d-flex flex-column'>
                    {finish &&
                        <Stack direction={'row'} sx={{ justifyContent: 'center', paddingTop: '150px' }}>
                            <Stack direction={'row'}>
                                {/* download */}
                                <button onClick={downloadCV} className='btn fs-3 text-primary' ><GrDocumentDownload /></button>
                                {/* edit */}
                                <Edit resumeId={resumeId} setUpdateUserInput={setUserInput} />
                                {
                                    setDownloadStatus &&
                                    <>

                                        {/* history */}
                                        <Link to={'/history'} className='btn fs-3 text-primary' ><FaHistory /></Link>
                                    </>
                                }
                                <Link to={'/resume'} className='btn text-primary' >BACK</Link>
                            </Stack>
                        </Stack>
                    }

                    <Box component="section" >
                        <Paper id="result" elevation={3} sx={{ my: 5, p: 4, textAlign: 'center', marginTop: '80px', width: '600px', height: '700px' }}>
                            <h2>{userInput.personalDetails.name}</h2>
                            <h5>{userInput.personalDetails.jobTitle}</h5>
                            <p><span>{userInput.personalDetails.phone}</span><span>|</span><span>{userInput.personalDetails.email}</span><s mnjuiopan>|</s> <span>{userInput.personalDetails.location}</span></p>
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
                </div>

            }
        </>
    )
}

export default Preview