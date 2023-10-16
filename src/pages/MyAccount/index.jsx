import { useContext } from 'react'
import Layout from '../../components/Layout'
import { ShoppingCartContext } from '../../Context'
import { useNavigate } from "react-router-dom"

function MyAccount() {

  const context = useContext(ShoppingCartContext)
  let navegate = useNavigate()
  // console.log(context.dataUser);

  const handleLogout = () => {
    context.setDataUser(null);
    navegate('/')
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className='font-medium text-xl'>My Account</h1>
      </div>
      <div className="bg-white border border-x-slate-200 px-4 py-5 rounded-lg w-2/6 mt-5">
        <div className="flex justify-center items-center gap-5">
          <p className='font-semibold'>User: </p>
          <p>user-{context.dataUser?.userName}</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <p className='font-semibold'>E-mail: </p>
          <p> {context.dataUser?.userEmail}</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <p className='font-semibold'>Password: </p>
          <p type="password">********</p>
        </div>
        <div 
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm w-80 m-auto cursor-pointer mt-5 px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          onClick={() => handleLogout()}
        >
          Log Out
        </div>
      </div>
    </Layout>
  )
}

export default MyAccount