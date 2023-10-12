//Import HeroIcons
import { useContext } from 'react'
import { Link }  from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './index.css'

const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext)
  // console.log('Product to show: ', context.productToShow);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    if(context.cartProducts.length == 0){
      return;
    }
    const orderToAdd = {
      date: new Date().toLocaleDateString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd]) //Pasamos toda la orden que queramos comprar
    context.setCartProducts([]); //Ya que pasamos toda la order debemos de limpiar el arreglo original
    context.setCount(0)
    context.setSearchByTitle('')
  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded bg-white`}>
        <div className="flex justify-between items-center p-6">
            <h2 className='font-medium text-xl'>My Order</h2>
            <div>
                <XMarkIcon 
                  className='h-6 w-6 text-black cursor-pointer'
                  onClick={() => context.closeCheckoutSideMenu()}  
                />
            </div>
        </div>
        <div className="px-6 overflow-y-scroll flex-1">
          {
            context.cartProducts?.map(product => (
                <OrderCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageURL={product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                />
            ))
          }
        </div>
        <div className="px-6 mb-6">
          <p className='flex justify-between items-center mb-3'>
            <span className='font-light'>Total: </span>
            <span className='font-medium text-2xl'>$ {totalPrice(context.cartProducts)}</span>
          </p>
          <Link to='/my-orders/last'>
            <button
              className='bg-black py-3 text-white w-full rounded-lg' 
              onClick={() => handleCheckout()}
            >
              Checkout
            </button>
          </Link>
        </div>
    </aside>
  )
}

export default CheckoutSideMenu