import React from 'react'
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";
import './searchBox.css'

const MySearchBox = () => {
  return (
    <div className='headerSearch ml-3 mr-3'>
        <input type='text' placeholder='Search for products'/> 
        <Button><FaSearch /></Button>
    </div>
  )
}

export default MySearchBox;