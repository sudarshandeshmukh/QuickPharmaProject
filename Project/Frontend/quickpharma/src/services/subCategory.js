import axios from "axios"
import { createUrl, log } from "../utils/utils"

export async function getSubCategory(id) {
    const url = createUrl('/subcategory/categories/'+id)
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