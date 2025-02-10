import React from 'react';
import './HomeBanner.css';
import Slider from "react-slick";
import src from '../../assets/images/banner.jpeg';

const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <div className='homeBannerSection'>  
            <Slider {...settings}>
                <div className='item'>
                    <img src="https://cmsimages.shoppersstop.com/Footwear_main_banner_web_5162bed0d0/Footwear_main_banner_web_5162bed0d0.png" className='w-100' />
                </div>
                <div className='item'>
                    <img src="https://cmsimages.shoppersstop.com/001_web_7483be4eb9/001_web_7483be4eb9.png" className='w-100' />
                </div>
                <div className='item'>
                    <img src="https://cmsimages.shoppersstop.com/ELCA_Banners_SS_Feb_25_Web_4e03a35189/ELCA_Banners_SS_Feb_25_Web_4e03a35189.jpg" className='w-100' />
                </div>
                <div className='item'>
                    <img src={src} className='w-100' />
                </div>
            </Slider>
        </div>
    );
}

export default HomeBanner;