import React from 'react'
import Button from '@mui/material/Button';
import { FaUser } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../Header/UserHeader.css'

const UserHeader = () => {
  return (
    <div className='part3 d-flex align-items-center ml-auto'>
        <Button className='circle mr-3'><FaUser /></Button>
        <div className='ml-auto cartTab d-flex align-items-center'>
            <span className='price'>₹299.99</span>
            <div className='position-relative ml-2'>
                <Button className='circle'><AiOutlineShoppingCart /></Button>
                <span className='count d-flex align-items-center justify-content-center'>1</span>
            </div>
        </div>
    </div>
  )
}

export default UserHeader