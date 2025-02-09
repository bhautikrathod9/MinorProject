import React from 'react'
import '../HomeBanner/HomeBanner.css'
import Slider from "react-slick";

const HomeBanner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='"homeBannerSection'>  
        <div {...settings}>
            <div className='item'>
                <img src='' className='w-100' />
            </div>
        </div>
    </div>
  )
}

export default HomeBanner