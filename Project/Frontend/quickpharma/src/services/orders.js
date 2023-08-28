import axios from "axios"
import { createUrl, log } from "../utils/utils"



export async function getOrderList(customerId)
{
  const url= createUrl('/ordercontroller/'+customerId)
  
  try {     
      const response=await axios.get(url)
      log(response.data)
      return response
    } catch (error) {
      log(error)
        
    }
}

export async function getOrderDetailsList(orderId)
{
  const url= createUrl('/orderDetailscontroller/'+orderId)
  
  try {     
      const response=await axios.get(url)
      log(response.data)
      return response
    } catch (error) {
      log(error)
      
    }
}