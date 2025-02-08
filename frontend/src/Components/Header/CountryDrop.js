import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import './CountryDrop.css'
import '../dialog/CountryDialog.css'
import CountryDialog from '../dialog/CountryDialog'
import { MyContext } from '../../App';

const CountryDrop = () => {
  const[OpenModel, setOpenModel] = useState(false)

  const context = useContext(MyContext)
  
  return (
    <>
      <Button className='countryDrop' onClick={() => setOpenModel(true)}>
        <div className='info d-flex flex-column'>
            <span className='label'>Your location</span>
            <span className='name'>{context.selectedCountry!=="" ? context.selectedCountry.length>10 ? context.selectedCountry?.substr(0, 10)+ '...' : context.selectedCountry : "Select location"}</span>
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