import React, { useContext } from 'react'
import Logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import CountryDrop from './CountryDrop'
import MySearchBox from './searchBox';
import UserHeader from './UserHeader';
import { HeaderLine } from './HeaderLine';
import Nav from '../Navigation/Nav';
import { MyContext } from '../../App';

const Header = () => {

    const context = useContext(MyContext);
  return (
    <>
        <div className='headerWrapper'>
            <HeaderLine />

            <header className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='logoWrapper d-flex align-items-center col-sm-2'>
                            <Link to={'/'}><img src={Logo} alt='logo' /></Link>
                        </div>

                        <div className='col-sm-10 d-flex align-items-center part2'>
                            {
                                context.countryList.Length!==0 && <CountryDrop />
                            }
                            <MySearchBox />
                            <UserHeader />
                        </div>
                    </div>
                </div>
            </header>
            <Nav />
        </div>
    </>
  )
}

export default Header