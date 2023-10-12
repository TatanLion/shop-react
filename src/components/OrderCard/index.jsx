import React from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const { id, title, imageURL, price, handleDelete} = props;
    let renderTrashIcon
    if(handleDelete){
        renderTrashIcon = 
            <TrashIcon 
                className='h-5 w-5 text-red-500 cursor-pointer'
                onClick={() => handleDelete(id)}
            />
    }

  return (
    <div className='flex justify-between items-center mb-3'>
        <div className="flex items-center gap-2">
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src={imageURL} alt={title} />
            </figure>
            <p className='text-sm font-light'>{title}</p>
        </div>
        <div className="flex items-center gap-2">
            <p className='text-lg font-medium'>{price}</p>
            {renderTrashIcon}
        </div>
    </div>
  )
}

export default OrderCard