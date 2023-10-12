//Import HeroIcons
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './index.css'

const ProductDetail = () => {

  const context = useContext(ShoppingCartContext)
  // console.log('Product to show: ', context.productToShow);

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded bg-white`}>
        <div className="flex justify-between items-center p-6">
            <h2 className='font-medium text-xl'>Detail</h2>
            <div>
                <XMarkIcon 
                  className='h-6 w-6 text-black cursor-pointer'
                  onClick={() => context.closeProductDetail()}  
                />
            </div>
        </div>
        <figure className='px-6 max-h-64'>
          <img 
            className='w-full h-full rounded-lg' 
            src={context.productToShow.images ? context.productToShow.images[0] : ''} 
            alt={context.productToShow.images}
          />
        </figure>
        <p className='flex flex-col p-6'>
          <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
          <span className='font-medium text-md mb-2'>{context.productToShow.title}</span>
          <span className='font-light text-sm mb-2'>{context.productToShow.description}</span>
        </p>
    </aside>
  )
}

export default ProductDetail