import React, { useContext, useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import '../dialog/CountryDialog.css'
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { MyContext } from '../../App';

const CountryDialog = ({ open, onClose}) => {

  const [selectedTab, setSelectedTab] = useState(null)
  const [CountryList, setCountryList] = useState(null)

  const context = useContext(MyContext)

  useEffect(() => {
    setCountryList(context.countryList)

    CountryList.filter((item) => {
      return item.toLowerCase().includes(keyword)
    })
  })

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase()
  }

  const selectedCountry = (index) => {
    setSelectedTab(index)
    onClose()
  }

  return (
    <>
      <Dialog open={open} onClose={onClose} className='locationModel' >
        <h4 className='mb-0'>Choose your delivery location</h4>
        <p>Choose your location and we will specify offer for your location</p>
        <Button className='close_' onClick={onClose}><IoCloseSharp /></Button>
        
        <div className='headerSearch w-100'>
          <input type='text' placeholder='Search your area....' onChange={filterList}/> 
          <Button><FaSearch /></Button>
        </div>

        <ul className='countryList mt-3'>
          {
            context.countryList?.length!==0 && context.countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button onClick={() => selectedCountry(index)} className={`${selectedTab===index ? 'active' : ''}`}>
                    {item.country}
                  </Button>
                </li>
              )
            })
          }
        </ul>
      </Dialog>
    </>
  )
}

export default CountryDialog