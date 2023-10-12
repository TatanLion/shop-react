import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../components/Layout'
import OrderCard from '../../components/OrderCard'
import { Link }  from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'


function MyOrder() {

  const context = useContext(ShoppingCartContext)
  // console.log(context.order?.slice(-1)[0].products);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if(index === 'last') index = context.order?.length - 1

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-6">
        <Link to='/my-orders/' className='absolute left-0'>
          <ChevronLeftIcon className='h-5 w-5 text-black cursor-pointer'/>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {
          context.order.length <= 0 ? 
          (
            <p className='font-bold text-2xl text-center mt-4'>No se han añadido ordenes aún</p>
          ) : (
            context.order?.[index]?.products.map(product => (
              <OrderCard 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  imageURL={product.images}
                  price={product.price}
              />
            ))
          )
        }
      </div>
    </Layout>
  )
}

export default MyOrder