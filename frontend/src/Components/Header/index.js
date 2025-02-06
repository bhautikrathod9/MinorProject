import React from 'react'
import Logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import CountryDrop from '../countryDropdown/CountryDrop'


const Header = () => {
  return (
    <>
        <div className='headerWrapper'>
            <div className='top-strip bg-orange'>
                <div className='container'>
                    <p className='mb-0 mt-0 text-center'>Showcasing unique <b>handmade art</b>, connecting <b>creativity with the world!</b></p>
                </div>
            </div>

            <div className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='logoWrapper d-flex align-items-center col-sm-2'>
                            <Link to={'/'}><img src={Logo} alt='logo' /></Link>
                        </div>

                        <div className='col-sm-10 d-flex align-items-center part2'>
                            <CountryDrop />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header