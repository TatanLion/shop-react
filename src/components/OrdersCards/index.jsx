import React from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { date, totalPrice, totalProducts} = props;
    // console.log(props);

  return (
    <div className='flex justify-evenly items-center m-3 border border-black w-80 p-4 rounded-lg'>
        <div className='w-64'>
            <p className='font-semibold text-md'>Fecha:<span className='font-light'> {date}</span></p>
            <p className='font-semibold text-md'>Total Products:<span className='font-light'> {totalProducts}</span></p>
            <p className='font-semibold text-md'>Total Price:<span className='font-light'> {totalPrice}</span></p>
        </div>
        <div className="w">
            <PaperAirplaneIcon 
                className='h-5 w-5 text-black cursor-pointer'
            />
        </div>
    </div>
  )
}

export default OrdersCard