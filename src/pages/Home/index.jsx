import { useContext } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {

  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if(context.filteredItems?.length > 0){
      return(
        context.filteredItems?.map(item => ( //El ? se agrega para indicarle que si existe el elemento haga el map para que no genere error
          <Card 
            key={item.id}
            data={item} 
          />
        ))
      )
    }else{
      return(
        <div className='font-medium text-xl'>We don't have items that match your search</div>
      )
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-3">
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input 
        type="text"
        placeholder='Search a Product' 
        className='rounded-lg border border-black w-80 p-3 mb-4 focus:outline-none'
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="container_cards">
        {renderView() /* Esta función nos permitira mostrar los productos bajo una condición */}
        <ProductDetail />
      </div>
    </Layout>
  )
}

export default Home