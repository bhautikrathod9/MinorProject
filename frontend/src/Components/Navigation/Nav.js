import React from 'react'
import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  return (
    <nav>
    <div className='container'>
        <div className='row'>
            <div className='col-sm-3 navPart1'>
                
                <Button className='allCatTab align-items-center'>
                    <span className='icon1 mr-2'><IoMenu/></span>
                    <span className='text'>ALL CATEGARIES</span>
                    <span className='icon2 ml-2'><FaAngleDown /></span>
                </Button>
            </div>
            <div className='col-sm-9 navPart2 d-flex align-items-center'>
                <ul className='list list-inline ml-auto'>
                    <li className='list-inline-item'><Link to={'/'}>Home</Link></li>
                    <li className='list-inline-item'><Link to={'/'}>Art</Link></li>
                    <li className='list-inline-item'><Link to={'/'}>Decor</Link></li>
                    <li className='list-inline-item'><Link to={'/'}>Craft supplies</Link></li>
                    <li className='list-inline-item'><Link to={'/'}>Gifts</Link></li>
                    <li className='list-inline-item'><Link to={'/'}>Blog</Link></li>
                    <li className='list-inline-item'><Link to={'/'}>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </div>
</nav>
  )
}

export default Nav