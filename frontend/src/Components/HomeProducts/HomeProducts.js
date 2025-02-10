import React from 'react'
import '../HomeProducts/HomeProducts.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from '@mui/material/Button';
import Slider from 'react-slick';

const HomeProducts = () => {
    var productsSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
      };
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

                    <div className='product_row w-100'>
                        <Slider {...productsSliderOptions}>
                            <div className='item productItem'>
                                <div className='imgWrapper'>
                                    <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg' className='' />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                
            </div>
        </div>

    </section>
  )
}

export default HomeProducts