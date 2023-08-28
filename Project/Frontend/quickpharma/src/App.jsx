import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './Customer/cart'
import Login from './Customer/loginUser'
import MyOrders from './Customer/myOrders'
import NavigationBar from './Customer/navigationBar'
import MainPage from './Customer/mainPage'
import RegisterUser from './Customer/registerUser'
import SubCategory from './Customer/subCategoryProducts'
// used to register react-toastify
// import { useEffect } from 'react'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import { login } from './features/authSlice'
// import Navbar from './Customer/SubCatnavbar'
// import Footer from './Customer/footer'
// import Profile from './Customer/Profile'
// import Product from './Customer/Product'
// Testing Git
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { login } from './features/authSlice'
import Navbar from './Customer/SubCatnavbar'
import Footer from './Customer/footer'
import Profile from './Customer/Profile'
import Product from './Customer/Product'

function App() {
  const loginStatus = useSelector((state) => state.auth.status)
  const dispatch = useDispatch()

  useEffect(() => {
    // first read the current sessionStorage and see if user is logged in
    if (sessionStorage['token'] && sessionStorage['token'].length > 0) {
      // update the auth slice status to true
      dispatch(login())
    }
  }, [])

  return (
    <div className='container-fluid' style={{margin:0,padding:0}}>
      {/* navigation bar here */}
      {/* conditional rendering */}

      
      {/* {loginStatus && <NavigationBar />} */}

    <div>
      {/* <div className='container'> */}
        <Routes>
          {/* home component  */}
          {/* <Route path='/' element={} /> */}

          {/* login component */}
          <Route path='/' element={<Login />} />

          {/* register component */}
          <Route path='/register' element={<RegisterUser />} />

          {/* product-gallery component */}
          <Route path='/mainPage' element={<MainPage />} />

          <Route path='/subCategoryProducts/:subCatName/:subCatId' element={<SubCategory/>} />

          

          {/* my orders component */}
          <Route path='/my-orders' element={<MyOrders />} />

          {/* category navbar */}
          <Route path='/nav' element={<Navbar />} />

          {/* cart */}
          <Route path='/cart' element={<Cart />} />

          {/* <Route path='/cart' element={<Cart1 />} /> */}

          {/* footer */}
          <Route path='/footer' element={<Footer />} />

          <Route path='/profile' element={<Profile />} />

          <Route path='/product/:productId' element={<Product />} />

          <Route path='/Orders' element={<MyOrders />} />

        </Routes>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App

