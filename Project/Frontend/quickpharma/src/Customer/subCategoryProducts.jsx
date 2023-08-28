// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// import { toast } from "react-toastify";
// import { log } from "../utils/utils";
//  // Make sure to import constants if not already done
// import { getSubCategory } from "../services/category";
// import { getProductList } from "../services/product";
// import NavigationBar from "./navigationBar";

// function SubCategory() {
//   const { subCatId } = useParams();
//   const { subCatName } = useParams();

//   const navigate = useNavigate()
//   const [subCat, setSubCat] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [qty, setQty] = useState(0);
//   var quan=0

//   useEffect(() => {
//     loadSubCategory();
//     loadProducts();
//   }, []);

//   const loadSubCategory = async () => {
//     const response = await getSubCategory(subCatId);
//     if (response['status'] === 200) {
//       setSubCat(response.data);
//       log(response.data);
//     } else {
//       toast.error('Error while calling get /subcategory api');
//     }
//   };

//   const loadProducts = async () => {
//     const response = await getProductList(subCatId);
//     if (response['status'] === 200) {
//       setProducts(response.data);
//     } else {
//       toast.error('Error while calling get /subcategory api');
//     }
//   };

//   const inc=()=>{
//     quan=quan+1
//   }

//   return (<>
//     <NavigationBar></NavigationBar>
//     <h1>{subCatName} Products</h1>
//     <div style={{ display: "flex" }}>
//       <div className="row" style={{ marginTop: 50 }}>
//         {products.map((product) => (
//           // <div className="col-md-6 " key={product.vendorProductId}>
//             <div className="card" style={{marginLeft:20,width:200}}>
//               <img src={`http://localhost:9999/vendorProducts/images/${product.vendorProductId}`} style={{ height: 150 }} alt={product.productName} onClick={()=>{navigate(`/product/${product.productId}`)}}/>
//               <div className="card-body">
//                 {/* <h5 className="card-productId">{product['vendorProductId']}</h5> */}
//                 <h5 className="card-productName">{product['productName']}</h5>
//                 <div className="card-text">
//                   <div>{product['productDesc']}</div>
//                   <div>₹ {product['productPrice']}</div>
//                   <div><p > {product.pmanufacturer}</p></div>             
//                  <div style={{display:"flex" ,justifyContent:"center"}}>  
//                  <button type="button" class="btn btn-primary">AddToCart</button>
//                  </div>
//                  <div style={{display:"flex" ,justifyContent:"space-evenly"}}>  
//                  <button type="button" class="btn btn-danger" style={{height:25}} onClick={()=>{inc()}}>-</button>
//                  Qty :{quan}
//                  <button type="button" class="btn btn-success" style={{height:25 , justifyContent:"center",}} onClick={()=>{inc()}}>+</button>
//                  </div>
//                 </div>
//               </div>
//             {/* </div> */}
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// }

// export default SubCategory;


// // <div className='col-md-3'>
// // <div className='card'>
// //   <img
// //     src={constants.serverUrl + '/' + product['image']}
// //     style={{ height: 200 }}
// //     alt=''
// //   />
// //   <div className='card-body'>
// //   <h5 className='card-productId'>{product['vendorProductId']}</h5>
// //     <h5 className='card-productName'>{product['productName']}</h5>
// //     <div className='card-text'>
// //       <div>{product['productDesc']}</div>
// //       <div>₹ {product['productPrice']}</div>
// //     </div>
// //   </div>
// // </div>
// // </div>

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { log } from "../utils/utils";
import { getSubCategory } from "../services/category";
import { getProductList } from "../services/product";
import NavigationBar from "./navigationBar";
import { UpdateCart } from "../services/cart";

function SubCategory() {
  const { subCatId } = useParams();
  const { subCatName } = useParams();

  const navigate = useNavigate();
  const [subCat, setSubCat] = useState([]);
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    loadSubCategory();
    loadProducts();
  }, []);

  const loadSubCategory = async () => {
    const response = await getSubCategory(subCatId);
    if (response['status'] === 200) {
      setSubCat(response.data);
      log(response.data);
      setQuantities(Array(response.data.length).fill(0));
    } else {
      toast.error('Error while calling get /subcategory api');
    }
  };

  const loadProducts = async () => {
    const response = await getProductList(subCatId);
    if (response['status'] === 200) {
      setProducts(response.data);
    }
     else if(response['status'] === 204){
      toast.dark('No products in this subCategory!');
    }
    else {
      toast.error('Error while calling get /subcategory api');
    }
  };

  const inc = (index) => {
    if (quantities[index] < 4) {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
    }
  };

  const addToCart = async(quantities,productId,productName) => {
    if(quantities>0){
    const response = await UpdateCart(sessionStorage.getItem('customerId'),quantities,productId);
    log(response.data)
    toast.dark(quantities +" "+productName+" added to Cart")
    
  }
  };
  

  const dec = (index) => {
    if (quantities[index] > 0) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
    }
  };

  return (
    <>  
      <NavigationBar></NavigationBar>
      <h1>{subCatName} Products</h1>
      <div style={{ display: "flex" }}>
        <div className="row" style={{ marginTop: 50 }}>
          {products.map((product, index) => (
             <div className="card" style={{ marginLeft: 20, width: 200 }} key={product.vendorProductId}>
              <img src={`http://localhost:9999/vendorProducts/images/${product.vendorProductId}`} style={{ height: 150 }} alt={product.productName} onClick={() => { navigate(`/product/${product.productId}`) }} />
              <div className="card-body">
                <h5 className="card-productName">{product['productName']}</h5>
                <div className="card-text">
                  <div>{product['productDesc']}</div>
                  <div>₹ {product['productPrice']}</div>
                  <div><p>{product.pmanufacturer}</p></div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button type="button" className="btn btn-primary" key={quantities[index]} onClick={()=>{addToCart(quantities[index],product.productId,product.productName)}}>AddToCart</button>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                    <button type="button" className="btn btn-danger" style={{ height: 25 }} onClick={() => dec(index)}>-</button>
                    Qty: {quantities[index]}
                    <button type="button" className="btn btn-success" style={{ height: 25 }} onClick={() => inc(index)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SubCategory;
/**
 * 

 */