import React from 'react'
import '../HomeProducts/HomeProducts.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import Products from './Products';
import NewsLetter from '../HomeBanner/NewsLetter';

const HomeProducts = () => {
  return (
    <>
    <section className='homeProducts'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='stickey'>
                        <div className='banner'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg' className='cursor'/>
                        </div>

                        <div className='banner mt-3'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg' className='cursor'/>
                        </div>
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

                    <div className='product_row w-100 mt-4'>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={10}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        > 
                            <SwiperSlide>
                                <Products />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Products />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Products />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Products />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Products />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Products />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Products />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Products />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Products />
                            </SwiperSlide>
                        </Swiper>
                    </div>


                    <div className='d-flex align-items-center mt-4'>
                        <div className='info w-75'>
                            <h3 className='mb-0 hd'>NEW PRODUCTS</h3>
                            <p className='text-light text-sml mb-0'>New products with updated price</p>
                        </div>
                        <Button className="viewAllBtn ml-auto">View All <FaLongArrowAltRight /></Button>
                    </div>

                    <div className='product_row productRow2 w-100 mt-4 d-flex'>
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                    </div>

                    <div className='d-flex mt-4 mb-5 bannerSec'>
                        <div className='banner'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-01.jpg' className='cursor w-100'/>
                        </div>

                        <div className='banner'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-02.jpg' className='cursor w-100'/>
                        </div>
                    </div>

                </div>       
            </div>
        </div>

    </section>

    <NewsLetter />
    
    </>
  )
}

export default HomeProducts