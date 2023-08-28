import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function registerUser(
  firstName,
  lastName,
  email,
  password,
  phone
) {
  const url = createUrl('/Customer')
  const body = {
    firstName,
    lastName,
    email,
    password,
    phone,
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function loginUser(email, password) {
  //const url = createUrl('/user/login')
  const url = createUrl('/Customer/login')
 
  const body = {
    email,
    password,
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log("response -----in loginUserapI-------"+response.data)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}
export async function getProfileDetails(id) {
  const url = createUrl('/Customer/'+id)
  try {
    // make the api call using the token in the header
    const response = await axios.get(url)
    log(response)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function getAddress(id) {
  const url = createUrl('/address/'+id)
  try {
    // make the api call using the token in the header
    const response = await axios.get(url)
    log(response)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}