import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI';

function History() {
  const [resume,setResume] = useState([])

  useEffect(()=>{
    getHistory()
  },[resume])

  const getHistory = async()=>{
    try{
      const result = await getHistoryAPI()
      // console.log(result)
      setResume(result.data)
    }
    catch(err){
      console.log(err);
      
    }
  }
  // console.log(resume)

  const handleRemoveHistory = async(id)=>{
  try{
     await deleteHistoryAPI(id)
     getHistory()
  }
  catch(err){
    console.log(err)
  }
  }

  return (
    <div> 

    <div className=' mt-5'>
        <h1 className="text-center">Downloaded resume history</h1>
        <Link to={'/'} style={{marginTop:'-40px'}} className='float-end me-3 text-decoration-none'>BACK</Link>
    </div>
       <Box component="section" className='container-fluid' >
     <div className='row'>
     {
      resume.length>0?
      resume?.map((item,index)=>(
           <div className='col-md-4'>
          <Paper elevation={3} sx={{ my: 5, p: 2, textAlign: 'center' }}>
        <div className='d-flex align-items-center justify-content-center'>
              <h6>Review At: <br /> {item?.timeStamp}</h6>
              <div onClick={()=>handleRemoveHistory(item?.id)} className="btn text-danger fs-4 ps-5"><MdDelete /></div>
        </div>
          <div className='border rounded p-3 shadow'>
            <img className='img-fluid' src={item?.imgURL} alt="" />
          </div>
    
          </Paper>
        </div>
      ))
      :
      <p>History is empty!!</p>
     }
     </div>
    </Box>
    </div>
  )
}

export default History