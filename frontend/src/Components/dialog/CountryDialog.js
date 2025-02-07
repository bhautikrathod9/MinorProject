import React from 'react'
import Dialog from '@mui/material/Dialog';
import '../dialog/CountryDialog.css'
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const countryDialog = ({ open, onClose}) => {
  return (
    <>
      <Dialog open={open} onClose={onClose} className='locationModel' >
        <h4 className='mb-0'>Choose your delivery location</h4>
        <p>Choose your location and we will specify offer for your location</p>
        <Button className='close_' onClick={onClose}><IoCloseSharp /></Button>
        
        <div className='headerSearch w-100'>
          <input type='text' placeholder='Search your area....'/> 
          <Button><FaSearch /></Button>
        </div>

        <ul className='countryList mt-3'>
          <li><Button onClick={onClose}>Argentina</Button></li>
          <li><Button onClick={onClose}>Australia</Button></li>
          <li><Button onClick={onClose}>Brazil</Button></li>
          <li><Button onClick={onClose}>Canada</Button></li>
          <li><Button onClick={onClose}>China</Button></li>
          <li><Button onClick={onClose}>France</Button></li>
          <li><Button onClick={onClose}>Germany</Button></li>
          <li><Button onClick={onClose}>India</Button></li>
          <li><Button onClick={onClose}>Italy</Button></li>
          <li><Button onClick={onClose}>Japan</Button></li>
          <li><Button onClick={onClose}>Mexico</Button></li>
          <li><Button onClick={onClose}>Netherlands</Button></li>
          <li><Button onClick={onClose}>New Zealand</Button></li>
          <li><Button onClick={onClose}>Russia</Button></li>
          <li><Button onClick={onClose}>South Africa</Button></li>
          <li><Button onClick={onClose}>South Korea</Button></li>
          <li><Button onClick={onClose}>Spain</Button></li>
          <li><Button onClick={onClose}>Sweden</Button></li>
          <li><Button onClick={onClose}>Switzerland</Button></li>
          <li><Button onClick={onClose}>United Kingdom</Button></li>
          <li><Button onClick={onClose}>United States</Button></li>
        </ul>
      </Dialog>
    </>
  )
}

export default countryDialog