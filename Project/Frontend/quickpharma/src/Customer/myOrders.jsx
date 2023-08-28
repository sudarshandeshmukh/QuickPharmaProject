import { useEffect, useState } from 'react'
import { getOrderList,getOrderDetailsList } from '../services/orders'
import { toast } from 'react-toastify'
// function MyOrders() {

//   const [orders, setOrders] = useState([]);
//   const [orderDetails, setOrderDetails] = useState([]);
//   useEffect(() => {
//     loadOrder(sessionStorage.getItem('customerId'))
//   }, [])

//   const loadOrder = async (customerID) => {
//     const response = await getOrderList(customerID)
//     if (response['status'] === 200) {
//       setOrders(response.data)
//     console.log(orders) 
//     } else {
//       toast.error('Error while calling get /orders api')
//     }
//   }

//   const loadOrderDetails = async (orderId) => {
//     const response = await getOrderDetailsList(orderId)
//     if (response['status'] === 200) {
//       setOrderDetails(response.data)
//     console.log(orderDetails) 
//     } else {
//       toast.error('Error while calling get /product api')
//     }
//   }


//   return (
//     <>
    
//       <div>
//       {
//         orders.map((order)=>{
          
//           return<div> <h2>Order--{order.orderId}</h2>
//           <p>Order Date : {order.odate}</p>
//           <p>Total : {order.total}</p>
//           {loadOrderDetails(order.orderId)}
//               {
//                 orderDetails.map((od)=>{

//                  return <div style={{display:"flex"}}>
//           <div> <img src={`http://localhost:9999/vendorProducts/images/${od.vendorProductId}`}  alt="img" /></div>  
//           <div><h3>{od.productName}</h3>
//           <h4>Quantity :{od.quantity}</h4>
//            </div>  

//           </div>
//           })
//         }
//           </div>


//         // {/* <img src={imageUrl} alt="med" /> */}
//  })
//       }
//       </div>
//     </>
//   )
// }

// export default MyOrders
function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    loadOrder(sessionStorage.getItem('customerId'));
  }, []);

  

  const loadOrder = async (customerID) => {
    try {
      const response = await getOrderList(customerID);
      if (response.status === 200) {
        setOrders(response.data);
      } else {
        toast.error('Error while calling get /orders api');
      }
    } catch (error) {
      toast.error('An error occurred while fetching orders');
    }
  };

  const loadOrderDetails = async (orderId) => {
    try {
      const response = await getOrderDetailsList(orderId);
      if (response.status === 200) {
        setOrderDetails(response.data);
      } else {
        toast.error('Error while calling get /product api');
      }
    } catch (error) {
      toast.error('An error occurred while fetching order details');
    }
  };

  return (
    <>
      <div>
        {orders.map((order) => (
          <div key={order.orderId}>
            <h2>Order--{order.orderId}</h2>
            <p>Order Date: {order.odate}</p>
            <p>Total: {order.total}</p>
            <button onClick={() => loadOrderDetails(order.orderId)}>Load Order Details</button>
            {orderDetails.map((od) => (
              <div key={od.vendorProductId} style={{ display: "flex" }}>
                <div><img src={`http://localhost:9999/vendorProducts/images/${od.vendorProductId}`} alt="img" /></div>
                <div>
                  <h3>{od.productName}</h3>
                  <h4>Quantity: {od.quantity}</h4>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default MyOrders;
