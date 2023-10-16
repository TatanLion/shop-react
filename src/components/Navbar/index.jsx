import { useContext } from 'react'
//Import HeroIcons
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

function Navbar() {

    const activeStyle = 'underline underline-offset-4'

    const context = useContext(ShoppingCartContext)

    const showCheckOutSide = () => {
        context.closeProductDetail() //Cerramos el sidebar de product detail
        context.openCheckoutSideMenu() // Abrimos el modal del carrito Checkout Side Menu
    }
    

    return (
        <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to='/'
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({isActive}) => isActive ? activeStyle : undefined} //Si esta activo al dar clic se agregara la clase
                        onClick={() => context.setSearchByCategory()}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={({isActive}) => isActive ? activeStyle : undefined} //Si esta activo al dar clic se agregara la clase
                        onClick={() => context.setSearchByCategory('clothes')}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={({isActive}) => isActive ? activeStyle : undefined} //Si esta activo al dar clic se agregara la clase
                        onClick={() => context.setSearchByCategory('electronics')}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        className={({isActive}) => isActive ? activeStyle : undefined} //Si esta activo al dar clic se agregara la clase
                        onClick={() => context.setSearchByCategory('furnitures')}
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        className={({isActive}) => isActive ? activeStyle : undefined} //Si esta activo al dar clic se agregara la clase
                        onClick={() => context.setSearchByCategory('toys')}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        className={({isActive}) => isActive ? activeStyle : undefined} //Si esta activo al dar clic se agregara la clase
                        onClick={() => context.setSearchByCategory('others')}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    {context.dataUser !== null ?
                        (
                            <span className='flex items-center gap-2'>
                                <UserIcon className='h-5 w-5 '/>
                                <p>{context.dataUser?.userEmail}</p>
                            </span>
                        ) : ('')
                            
                    }
                </li>
                <li>
                    { context.dataUser !== null ?
                        (
                            <NavLink
                                to='/my-orders'
                                className={({isActive}) => isActive ? activeStyle : undefined} //Si esta activo al dar clic se agregara la clase
                            >
                                My Orders
                            </NavLink>
                        ) : ('')
                    }
                </li>
                <li>
                    { context.dataUser !== null ?
                        (
                            <NavLink
                                to='/my-account'
                                className={({isActive}) => isActive ? activeStyle : undefined} //Si esta activo al dar clic se agregara la clase
                            >
                                My Account
                            </NavLink>
                        ) : ('')
                    }
                </li>
                <li>
                    { context.dataUser === null ? 
                        (
                            <NavLink
                                to='/sign-in'
                                className={({isActive}) => isActive ? activeStyle : undefined} //Si esta activo al dar clic se agregara la clase
                            >
                                Sign In
                            </NavLink>
                        ) : (
                            <NavLink
                                onClick={() => context.setDataUser(null)}
                                className={`${({isActive}) => isActive ? activeStyle : undefined} font-semibold`} //Si esta activo al dar clic se agregara la clase
                            >
                                Log out
                            </NavLink>
                        )
                    }
                </li>
                <li 
                    className='flex items-center gap-2 cursor-pointer'
                    onClick={() => showCheckOutSide()}
                    
                >
                    <ShoppingCartIcon className='h-5 w-5 text-black'/>
                    <span className={context.cartProducts.length == 0 ? '' : 'bg-blue-500 rounded-full text-white px-2 py-0.5 font-semibold'}>{context.cartProducts.length} {/* Obtenemos el valor desde el Context y lo actualizamos */}</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar