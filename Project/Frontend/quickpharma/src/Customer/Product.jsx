import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { log } from "../utils/utils";
import { getProfileDetails } from "../services/user";
import { getProductDetails } from "../services/product";
import NavigationBar from "./navigationBar";

function Product() {
  const {productId}= useParams();
  const [product,setProduct ] = useState([]);


      
  useEffect(() => {
    loadProductDetails();

  }, []);

  const loadProductDetails = async () => {
    const response = await getProductDetails(productId);
    if (response['status'] === 200) {
      setProduct(response.data);
      log(response.data);
    } else {
      toast.error('Error while calling get /productDetails api');
    }
  };

    return (
      <><NavigationBar></NavigationBar>
      <img src={`http://localhost:9999/vendorProducts/images/${product.vendorProductId}`} style={{height:300}} alt={product.productName}/>
      <h1>productId--{productId}</h1>
      <h3>{product.productName}</h3>
      <h3>{product.pmanufacturer}</h3>
      <h3>{product.productPrice}</h3>
      <h3>{product.productMfgDate}</h3>
      <h3>{product.productExpDate}</h3>
      <h3>{product.productDesc}</h3>

      

      


      </>
    )
  }
  
  export default Product
  