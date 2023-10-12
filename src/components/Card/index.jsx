//Import HeroIcons
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid'

import { useContext } from "react";
import { ShoppingCartContext } from '../../Context'

function Card(data) {

    const context = useContext(ShoppingCartContext) //El nombre de la variable es a criterio en este caso se trata de ser descriptivo con el proposito, el parametro dentro del useContext sera la variable como la creamos desde el Context

    //Esta función abre el sidebar de product detail y muestra la información a la cual se le dio clic
    const showProduct = (productDetail) => {
      context.closeCheckoutSideMenu()
      context.openProductDetail()
      context.setProductToShow(productDetail)
    }

    //Agregamos esta función para poder mostrar los datos en el carrito de compras, cojemos una copia del arreglo actual y le pasamos el objeto al cual se le dio clic, agregamos el count aquí mismo para que la funicón se dispare desde el padre
    const addProductsToCart = (event, productData) => {
      event.stopPropagation();
      context.setCount(context.count + 1)
      context.setCartProducts([...context.cartProducts, productData])
      context.closeProductDetail() //Cerramos el sidebar de product detail
      context.openCheckoutSideMenu() // Abrimos el modal del carrito Checkout Side Menu
      // console.log('Products to Cart: ', context.cartProducts);
    }

    const renderIcon = (id) => {
      const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
      if(isInCart){
        return(
          <div 
          className="absolute top-0 right-0 flex justify-center items-center bg-black hover:bg-blue-500 w-6 h-6 rounded-full m-2 p-1"
          >
            <CheckIcon 
              className='h-6 w-6 text-white'
            />
          </div>
        )
      }else{
        return(
          <div 
          className="absolute top-0 right-0 flex justify-center items-center bg-white hover:bg-blue-500 w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, data.data)}
          >
            <PlusIcon 
              className='h-6 w-6 text-black'
            />
          </div>
        )
      }
      
    }

  return (
    <div 
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">$ {data.data.price}</span>
      </p>
    </div>
  );
}

export default Card;
