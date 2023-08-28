import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { login } from '../features/authSlice'
import { loginUser as loginUserApi } from '../services/user'

function Login() {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  // get the navigation object
  const navigate = useNavigate()

  // get dispatcher object
  const dispatch = useDispatch()
  
  const SignIn = async () => {
    console.log("in signIn function")
    if (email.length == '') {
      toast.error('Please enter email')
    } else if (password.length == '') {
      toast.error('Please enter password')
    } else {
      // call register api
      const response = await loginUserApi(email, password)

      // parse the response
      // if (response['status'] === 'success') {
        if(response.data!=='invalid user credentials'){
          console.log("response ---"+response)
        // parse the response's data and extract the token
        //const { token, name, mobile, profileImage } = response['data']

        const { customerId,firstName, phone,role} = response.data
        console.log("CustomerId---"+customerId+"firstname ----"+firstName+"phone----"+phone)


        // store the token for making other apis
        //sessionStorage['token'] = token
         sessionStorage['firstName'] = firstName
         sessionStorage['customerId'] = customerId

        // sessionStorage['mobile'] = mobile
        //sessionStorage['profileImage'] = profileImage

        // update global store's authSlice with status = true
        dispatch(login())

        toast.success(`Welcome ${firstName} to store application`)

        // go back to login
        if(role==='Customer')
          navigate('/mainPage')
      } else {
        toast.error('Invalid user name or password')
      }
    }
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <img
            src="http://localhost:3000/images/login_page.png"
            style={{ maxWidth: "100%", height: "auto" }}
            className="img-responsive"
            alt="login"
          />
        </div>
        <div className="col">
          <br />
          <br />
          <br />
          <br />
          <div
            className="container"
            style={{
              maxWidth: 500,
              borderColor: "black",
              borderStyle: "solid",
              borderRadius: 20,
              marginLeft: 80,
              marginTop: 90,
              maxHeight: "80vh", // Set the maximum height
              overflowY: "auto", // Enable vertical scrollbar if needed
            }}
          >
            {/* <form className="px-4 py-3"> */}
            <div className='form'>
              <div style={{ padding: 20 }}>
                <div className="mb-3">
                  <label
                    htmlFor ="exampleDropdownFormEmail1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name ="email"
                    className="form-control"
                    id="exampleDropdownFormEmail1"
                    placeholder="email@example.com"
                    onChange={(e) => {
                      setEmail(e.target.value)

                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleDropdownFormPassword1"
                    className="form-label"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name ="password"
                    className="form-control"
                    id="exampleDropdownFormPassword1"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="dropdownCheck"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="dropdownCheck"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={SignIn}
                >
                  Sign in
                </button>
              </div>
           
           </div> {/* </form> */}
            <div className="dropdown-divider"></div>
            <div style={{ textAlign: "center", margin: 15 }}>
              <a
                className="dropdown-item"
                href="/register"
              >
                New around here? Sign up
              </a>
              <a
                className="dropdown-item"
                href="/forgot password"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
