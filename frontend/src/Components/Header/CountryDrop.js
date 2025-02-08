import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import './CountryDrop.css'
import '../dialog/CountryDialog.css'
import CountryDialog from '../dialog/CountryDialog'

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

      <CountryDialog 
        open={OpenModel}
        onClose={() => setOpenModel(false)}
      />
    </>
  )
}

export default CountryDrop