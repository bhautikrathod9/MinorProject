import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import './Nav.css'

const Nav = () => {
    
    const [isopenSidebarVal, setisopenSidebarVal] = useState(false)
  return (
    <nav>
    <div className='container'>
        <div className='row'>
            <div className='col-sm-2 navPart1'>
                <div className='catWrapper'>
                    <Button className='allCatTab align-items-center' onClick={() => setisopenSidebarVal(!isopenSidebarVal)}>
                        <span className='icon1 mr-2'><IoMenu/></span>
                        <span className='text'>ALL CATEGARIES</span>
                        <span className='icon2 ml-2'><FaAngleDown /></span>
                    </Button>
                    <div className={`sideNavBar ${isopenSidebarVal === true ? 'open' : ''}`}>
                        <ul> 
                            <li><Link to={'/'}><Button>Art <FaAngleRight className='ml-auto' /></Button></Link>
                                <div className='subMenu'> 
                                    <Link to={'/'}><Button>Decor</Button></Link>
                                    <Link to={'/'}><Button>Decor</Button></Link>
                                    <Link to={'/'}><Button>Decor</Button></Link>
                                    <Link to={'/'}><Button>Decor</Button></Link>
                                </div>
                            </li>
                            <li><Link to={'/'}><Button>Decor</Button></Link></li>
                            <li><Link to={'/'}><Button>Craft supplies</Button></Link></li>
                            <li><Link to={'/'}><Button>Gifts</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-sm-10 navPart2 d-flex align-items-center'>
                <ul className='list list-inline ml-auto'>
                    <li className='list-inline-item'><Link to={'/'}>Home</Link></li>
                    <li className='list-inline-item'><Link to={'/'}>Art</Link></li>
                    <li className='list-inline-item'><Link to={'/'}>Decor</Link></li>
                    <li className='list-inline-item'><Link to={'/'}>Craft supplies</Link></li>
                    <li className='list-inline-item'><Link to={'/'}>Gifts</Link></li>
                    <li className='list-inline-item'><Link to={'/'}>Blog</Link></li>
                    <li className='list-inline-item'><Link to={'/'}>About Us</Link></li>
                    <li className='list-inline-item'><Link to={'/'}>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </div>
</nav>
  )
}

export default Nav