import React, { useContext, useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import './CountryDialog.css'
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { MyContext } from '../../App';

const CountryDialog = ({ open, onClose}) => {

  const [selectedTab, setSelectedTab] = useState(null)
  const [CountryList, setCountryList] = useState([])

  const context = useContext(MyContext)

  useEffect(() => {
    setCountryList(context.countryList)
  }, [])

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase()
    if(keyword !== ""){
      const list = CountryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword)
      })
      setCountryList(list)
    }else{
      setCountryList(context.countryList)
    }
    
  }

  const selectedCountry = (index, country) => {
    setSelectedTab(index)
    onClose()
    context.setSelectedCountry(country)
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
            CountryList?.length!==0 && CountryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button onClick={() => selectedCountry(index, item.country)} className={`${selectedTab===index ? 'active' : ''}`}>
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