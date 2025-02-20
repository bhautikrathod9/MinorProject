import React from 'react'
import './NewsLetter.css'
import newsLetter from '../../assets/images/coupon.png'
import { IoIosMail } from "react-icons/io";

const NewsLetter = () => {
  return (
    <>
    <section className='newsLetterSection mt-3 mb-3 d-flex align-items-center'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <p className='text-white mb-1'>$20 discount for your first order</p>
                    <h3 className='text-white'>Join our newsletter and get...</h3>
                    <p className='text-light'>Join our email subscription now to get updates <br /> on promotions and coupons.
                    </p>

                    <form>
                        <IoIosMail />
                        <input type='text' placeholder='Enter you email address'/>
                        <button>Subscribe</button>
                    </form>
                </div>
                <div className='col-md-6'>
                    <img src={newsLetter} />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default NewsLetter