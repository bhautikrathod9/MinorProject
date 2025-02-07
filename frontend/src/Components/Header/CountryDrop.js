import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import './CountryDrop.css'
import Dialog from '@mui/material/Dialog';
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import '../dialog/CountryDialog.css'

const CountryDrop = () => {
  const[OpenModel, setOpenModel] = useState(false)
  
  return (
    <>
      <Button className='countryDrop' onClick={() => setOpenModel(true)}>
        <div className='info d-flex flex-column'>
            <span className='label'>Your location</span>
            <span className='name'>India</span>
        </div>
        <span className='ml-auto'>
            <FaAngleDown />
        </span>
      </Button>

      <Dialog open={OpenModel} onClose={() => setOpenModel(false)} className='locationModel' >
        <h4 className='mb-0'>Choose your delivery location</h4>
        <p>Choose your location and we will specify offer for your location</p>
        <Button className='close_' onClick={() => setOpenModel(false)}><IoCloseSharp /></Button>
        
        <div className='headerSearch w-100'>
          <input type='text' placeholder='Search your area....'/> 
          <Button><FaSearch /></Button>
        </div>

        <ul className='countryList mt-3'>
          <li><Button onClick={() => setOpenModel(false)}>Argentina</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>Australia</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>Brazil</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>Canada</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>China</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>France</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>Germany</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>India</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>Italy</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>Japan</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>Mexico</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>Netherlands</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>New Zealand</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>Russia</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>South Africa</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>South Korea</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>Spain</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>Sweden</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>Switzerland</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>United Kingdom</Button></li>
          <li><Button onClick={() => setOpenModel(false)}>United States</Button></li>
        </ul>
      </Dialog>
    </>
  )
}

export default CountryDrop