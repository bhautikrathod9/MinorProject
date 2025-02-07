import React from 'react'
import Dialog from '@mui/material/Dialog';
import '../dialog/CountryDialog.css'
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const countryDialog = () => {
  return (
    <>
      <Dialog open={false} className='locationModel' >
        <h4 className='mb-0'>Choose your delivery location</h4>
        <p>Choose your location and we will specify offer for your location</p>
        <Button className='close_'><IoCloseSharp /></Button>
        
        <div className='headerSearch w-100'>
          <input type='text' placeholder='Search your area....'/> 
          <Button><FaSearch /></Button>
        </div>

        <ul className='countryList mt-3'>
          <li><Button>Argentina</Button></li>
          <li><Button>Australia</Button></li>
          <li><Button>Brazil</Button></li>
          <li><Button>Canada</Button></li>
          <li><Button>China</Button></li>
          <li><Button>France</Button></li>
          <li><Button>Germany</Button></li>
          <li><Button>India</Button></li>
          <li><Button>Italy</Button></li>
          <li><Button>Japan</Button></li>
          <li><Button>Mexico</Button></li>
          <li><Button>Netherlands</Button></li>
          <li><Button>New Zealand</Button></li>
          <li><Button>Russia</Button></li>
          <li><Button>South Africa</Button></li>
          <li><Button>South Korea</Button></li>
          <li><Button>Spain</Button></li>
          <li><Button>Sweden</Button></li>
          <li><Button>Switzerland</Button></li>
          <li><Button>United Kingdom</Button></li>
          <li><Button>United States</Button></li>
        </ul>
      </Dialog>
    </>
  )
}

export default countryDialog