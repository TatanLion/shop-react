import { useContext } from 'react'
import Layout from '../../components/Layout'
import OrdersCard from '../../components/OrdersCards'
import { ShoppingCartContext } from '../../Context'
import { Link }  from 'react-router-dom'

function MyOrders() {

  const context = useContext(ShoppingCartContext)

  // console.log(context.order);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      {
        context.order.length <= 0 ? 
        (
          <p className='font-bold text-xl text-center mt-4'>No orders have been added</p>
        ) :
        (
          <div>
            <p className='text-center text-md m-5 text-slate-700'>Here is the history of your purchases</p>
            {context.order?.map((order, index) => (
              <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard
                  date={order.date}
                  totalPrice={order.totalPrice}
                  totalProducts={order.totalProducts}
                />
              </Link>
            ))}
          </div>
        )
      }
    </Layout>
  )
}

export default MyOrders
