import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div> 

    <div className=' mt-5'>
        <h1 className="text-center">Downloaded resume history</h1>
        <Link to={'/'} style={{marginTop:'-40px'}} className='float-end me-3 text-decoration-none'>BACK</Link>
    </div>
       <Box component="section" className='container-fluid' >
     <div className='row'>
        <div className='col-md-4'>
          <Paper elevation={3} sx={{ my: 5, p: 2, textAlign: 'center' }}>
        <div className='d-flex align-items-center justify-content-center'>
              <h6>Review At: <br /> 19-08-25,7:22:45 AM</h6>
              <div className="btn text-danger fs-4 ps-5"><MdDelete /></div>
        </div>
          <div className='border rounded p-3 shadow'>
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
      
              <Stack justifyContent={'space-evenly'} spacing={2} direction="row" sx={{ flexWrap: 'wrap', gap: '10px' }}>
                <Button variant="contained">skill</Button>
      
              </Stack>
          </div>
    
          </Paper>
        </div>
     </div>
    </Box>
    </div>
  )
}

export default History