import {  useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomizedBadges from "./customizedBadge";
import { log } from "../utils/utils";

function NavigationBar(props) {
  const {counts}=props
  log("in nav bar"+counts)
  const navigate = useNavigate()
    return (       
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div className="container-fluid">
   
    <a className="navbar-brand" href="..">
      <img src="http://localhost:3000/images/QuickPharmaLogo.png" alt="Logo" height="50" />
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      {/* <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="***************" onMouseOver="this.style.backgroundColor='red'">Home<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="*******">About</a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href=".." id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="******" onMouseOver="this.style.backgroundColor='red'">Action</a></li>
            <li><a className="dropdown-item" href="******">Another action</a></li>
            <li><a className="dropdown-item" href="******">Something else here</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="******">Separated link</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="Main medicine">One more separated link</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="*******">Contact</a>
        </li>
      </ul> */}

      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit"  > Submit</button>
      </form>

      <ul className="navbar-nav ms-auto">
      <li className="nav-item" >
          <img src="http://localhost:3000/images/orders.png" onClick={()=>{navigate("/Orders"+sessionStorage.getItem("customerId"))}} alt="cart" style={{height: 69, paddingTop: 12, paddingRight: 20}} />
          
        </li>
        <li className="nav-item">
          {/* <img src="http://localhost:3000/images/cart.png" onClick={()=>{navigate("/Cart")}} alt="cart" style={{height: 61, paddingTop: 12, paddingRight: 20}} />
           */}
           <CustomizedBadges count={counts}></CustomizedBadges>
        </li>
        <li className="nav-item">
          <img src="http://localhost:3000/images/Profile-transformed.png" onClick={()=>{navigate('/profile')}} alt="profile" style={{height: 61, paddingTop: 12, paddingRight: 20}}/>{sessionStorage.getItem('firstName')
}
        </li>
      </ul>
    </div>
  </div>
</nav>

 );
}

export default NavigationBar  ;






















// import { useDispatch } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { logout } from '../features/authSlice'

// function NavigationBar() {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   // logout the user
//   const logoutUser = () => {
//     // clear the session storage changes
//     sessionStorage.removeItem('token')
//     sessionStorage.removeItem('name')
//     sessionStorage.removeItem('mobile')
//     sessionStorage.removeItem('profileImage')

//     // hide the navigation bar
//     dispatch(logout())

//     // redirect to login page
//     navigate('/')
//   }

//   return (
//     <div>
//       <nav className='navbar navbar-expand-lg bg-body-tertiary'>
//         <div className='container-fluid'>
//           <a className='navbar-brand'>Store</a>
//           <button
//             className='navbar-toggler'
//             type='button'
//             data-bs-toggle='collapse'
//             data-bs-target='#navbarSupportedContent'
//             aria-controls='navbarSupportedContent'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//           >
//             <span className='navbar-toggler-icon'></span>
//           </button>
//           <div className='collapse navbar-collapse' id='navbarSupportedContent'>
//             <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
//               <li className='nav-item'>
//                 <Link className='nav-link' to='/product-gallery'>
//                   Products
//                 </Link>
//               </li>

//               <li className='nav-item'>
//                 <Link className='nav-link' to='/cart'>
//                   Cart
//                 </Link>
//               </li>

//               <li className='nav-item'>
//                 <Link className='nav-link' to='/cart'>
//                   Orders
//                 </Link>
//               </li>

//               <li className='nav-item'>
//                 <Link className='nav-link' to='/cart'>
//                   Profile
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className='d-flex'>
//             <button onClick={logoutUser} className='btn'>
//               Logout
//             </button>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default NavigationBar
