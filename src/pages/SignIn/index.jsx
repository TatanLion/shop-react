import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../components/Layout'
import { useNavigate } from "react-router-dom"

function SignIn() {

  const context = useContext(ShoppingCartContext)
  let navegate = useNavigate()

  // console.log(context.password);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36).substr(2)
    return random + fecha
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if(context.email === '' || context.password === ''){
      return;
    }
    const dataUser = {
      userName: generarId(),
      userEmail: context.email,
      userPassword: context.password,
    }
    context.setDataUser(dataUser)
    context.setEmail('')
    context.setPassword('')
    navegate('/')
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-3">
        <h1 className='font-medium text-xl'>Sign In</h1>
      </div>
      <form className='bg-white border border-slate-600 px-4 py-5 rounded-lg w-2/6 mt-5'>
        <div className="relative z-0 w-full mb-6 group">
            <input 
              type="email" 
              name="email" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " 
              required 
              value={context.email}
              onChange={(e) => context.setEmail(e.target.value.trim())}
            />
            <label
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input 
              type="password" 
              name="password" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " 
              required
              value={context.password}
              onChange={(e) => context.setPassword(e.target.value)}
            />
            <label 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
        </div>
        <button 
          type="submit" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => handleLogin(e)}
        >
          Log In
        </button>
      </form>
    </Layout>
  )
}

export default SignIn