import React from 'react'

/**
* @author
* @function ProductCard
**/

export const ProductCard = ({
    title,
    price=500,
    discount=10,
    width=180,
    imgSrc = 'download.jpg',
    className=''
}) => {
  return(
    <div 
    className="h-[380px] cursor-pointer  transition-transform duration-700 hover:scale-105  font-syne" style={{ width: `${width}px` }}>
        <div className='flex justify-center'>
            <img 
            src={imgSrc}
            alt="product img"
            className={`rounded-xl h-96 w-full object-cover ${className}`}
            />

        </div>

        <div className='text-center text-sm'>
            <span>{title ? title :'Premium Oversized SILVER Cotton T-Shirt'}</span>
        </div>

        <div className='text-center text-sm flex justify-center gap-3 mt-1'>
            <span className='text-black-1 font-semibold'>
                Rs.{discount? Math.max(price-((price*discount)/100), 0).toFixed(2) : 500 }
            </span>
            <span className='text-xs items-center text-opacity-50 line-through text-gray-700 mt-[3px]'>
            Rs.{price? price.toFixed(2):100}
            </span>
        </div>
    </div>
   )
  }
