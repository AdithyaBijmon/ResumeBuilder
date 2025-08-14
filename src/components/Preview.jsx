import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function Preview() {
    return (
        <div style={{marginTop:'100px'}}>

            <Box component="section" >
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                    <h2>Name</h2>
                    <h5>Job title</h5>
                    <p><span>phone</span><span>|</span><span>Email</span><span>|</span> <span>location</span></p>
                    <p>
                        <Link href={""}>GitHub</Link>
                        <Link href={""}>LinkedIn</Link>
                        <Link href={""}>Portfolio</Link>
                    </p>
                    <Divider sx={{ fontSize: '22px' }}>Summary</Divider>
                    <p className='fs-5 text-start'>User summary</p>

                    <Divider sx={{ fontSize: '22px', marginBottom: '10px' }}>Education</Divider>
                    <h5 className='mb'>User education</h5>
                    <p><span>college</span><span>|</span><span>university</span><span>|</span> <span>Year</span></p>

                    <Divider sx={{ fontSize: '22px', marginBottom: '10px' }}>Professional Experience</Divider>
                    <h5 className='mb'>User Job</h5>
                    <p><span>Comapany</span><span>|</span><span>location</span><span>|</span> <span>duration</span></p>

                    <Divider sx={{ fontSize: '22px', marginBottom: '10px' }}>Skills</Divider>

                    <Stack justifyContent={'space-evenly'} spacing={2} direction="row" sx={{flexWrap:'wrap',gap:'10px'}}>
                        <Button variant="contained">skill</Button>
                       
                    </Stack>

                </Paper>
            </Box>
        </div>
    )
}

export default Preview