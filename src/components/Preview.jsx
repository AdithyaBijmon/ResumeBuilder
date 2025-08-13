import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';



function Preview() {
    return (
        <>

            <Box component="section" >
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                    <h2>Name</h2>
                    <h4>Job title</h4>
                    <p><span>phone</span><span>|</span><span>Email</span><span>|</span> <span>location</span></p>
                    <p>
                        <Link href={""}>GitHub</Link>
                        <Link href={""}>LinkedIn</Link>
                        <Link href={""}>Portfolio</Link>
                    </p>
                    <Divider>Summary</Divider>
                </Paper>
            </Box>
        </>
    )
}

export default Preview