import React from 'react'
import '../HomeProducts/HomeProducts.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from '@mui/material/Button';

const HomeProducts = () => {
  return (
    <section className='homeProducts'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='banner'>
                        <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg' className='cursor'/>
                    </div>
                </div>

                <div className='col-md-9 productRow'>
                    <div className='d-flex align-items-center'>
                        <div className='info w-75'>
                            <h3 className='mb-0 hd'>BEST SELLER</h3>
                            <p className='text-light text-sml mb-0'>Do not miss the current offers until the end of March.</p>
                        </div>
                        <Button className="viewAllBtn ml-auto">View All <FaLongArrowAltRight /></Button>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default HomeProducts