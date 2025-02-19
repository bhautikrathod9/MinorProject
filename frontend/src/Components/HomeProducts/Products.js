import React from 'react'
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import './product.css'
import { Rating } from '@mui/material';

const Products = () => {
  return (
    <div className='item productItem'>
        <div className='imgWrapper'>
            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg' className='w-100' />

            <span className='badge badge-primary'>28%</span>
            <div className='actions'>
                <button><AiOutlineFullscreen/></button>
                <button><FaRegHeart /></button>
            </div>
        </div>
        <div className='info'>
            <h4>Wethrel's original ceramal hard candies</h4>
            <span className='text-success d-block'>In Stock</span>
            <Rating className='mt-2 mb-2' name='read-only' value={5} readOnly size='small' precision={0.5} />
            <div className='d-flex'>
                <span className='oldPrice'>$20.00</span>
                <span className='netPrice text-danger ml-2'>$16.99</span>
            </div>
        </div>
    </div>
  )
}

export default Products