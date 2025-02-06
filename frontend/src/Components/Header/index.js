import React from 'react'
import Logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import CountryDrop from '../countryDropdown/CountryDrop'
import { FaSearch } from "react-icons/fa";
import Button from '@mui/material/Button';


const Header = () => {
  return (
    <>
        <div className='headerWrapper'>
            <div className='top-strip bg-orange'>
                <div className='container'>
                    <p className='mb-0 mt-0 text-center'>Showcasing unique <b>handmade art</b>, connecting <b>creativity with the world!</b></p>
                </div>
            </div>

            <header className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='logoWrapper d-flex align-items-center col-sm-2'>
                            <Link to={'/'}><img src={Logo} alt='logo' /></Link>
                        </div>

                        <div className='col-sm-10 d-flex align-items-center part2'>
                            <CountryDrop />
                            {/* Header search start here */}
                                <div className='headerSearch ml-3 mr-3'>
                                    <input type='text' /> 
                                    <Button><FaSearch /></Button>
                                </div>
                             {/* Header search end here */}
                        </div>
                        <div>
                            <h1>
                                Home pages made my kevin
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </>
  )
}

export default Header