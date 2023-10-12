import { useState, useEffect, createContext } from "react";

export const ShoppingCartContext = createContext(); //Creamos el contexto que vamos a necesitar

export const ShoppingCartProvider = ({children}) => {

    // Shooping cart - Increment quantity
    const [count, setCount] = useState(0);

    //Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen ] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //CheckOut Side Menu  - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen ] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Product Detail / Show product
    const [ productToShow, setProductToShow ] = useState({})

    // Product Cart / Add products to cart
    const [ cartProducts, setCartProducts ] = useState([])

    //Shopping Cart / Order
    const [ order, setOrder ] = useState([])

    //Get products
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=150')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [items])

    const [ filteredItems, setFilteredItems ] = useState(null)

    //Searcher
    const [ searchByTitle, setSearchByTitle ] = useState('');

    //Category
    const [ searchByCategory, setSearchByCategory ] = useState('')

    //Function to filter by title
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().trim().includes(searchByTitle.toLowerCase()))
    }

    //Function to filter by category
    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    //Function global for parameters
    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if( searchType === 'BY_TITLE'){
            return filteredItemsByTitle(items, searchByTitle)
        }
        if( searchType === 'BY_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory)
        }
        if( searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().trim().includes(searchByTitle.toLowerCase()))
        }
        if( !searchType){
            return items
        }
    }

    useEffect(() => {
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])

    // console.log('Elementod filtrados: ', filteredItems);

    //Manejar Login
    const [ userLogin, setUserLogin ] = useState({})

    return(
        //Con el provider vamos a enviarle a los hijos (en este caso es toda la app) los valores que le pasemos en el value al provider
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}