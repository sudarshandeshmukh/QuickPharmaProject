import axios from "axios"
import { createUrl, log } from "../utils/utils"

export async function getCategoryList() {
    const url = createUrl('/categories/AllCategory')
  
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

  export async function getCategoryImg(id) {
    const url = createUrl('/categories/images/'+id)
  
    try {
      // make the api call using the token in the header
      const response = await axios.get(url,{responseType: 'arraybuffer' })
      log(response)
      return response
    } catch (ex) {
      log(ex)
      return null
    }
  }


  export async function getSubCategory(id) {
    const url = createUrl('/subcategory/categories/'+id)
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