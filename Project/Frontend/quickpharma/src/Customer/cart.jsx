import { getCartList, removeCart, removeProductFromCart, giveOrder} from "../services/cart"
import { useEffect , useState } from "react"
import { toast } from "react-toastify"
import NavigationBar from './navigationBar'
import { useNavigate } from "react-router-dom"
import { log } from "../utils/utils"


function Cart() {

  const [rend,setRend]= useState(1)

  const [currentDate, setCurrentDate] = useState(new Date())

  const navigate=useNavigate()

  var cartTotal=0;
  var discount=0;
  useEffect(() => {
    // get the list of vendors from server
    loadCarts()
  }, [])

  useEffect(() => {
    loadCarts()
    
  }, [rend])

  const removeFromCart = async (cartId) => {
    const response = await removeProductFromCart(cartId)
    setRend(rend+1)
    toast.dark("Order palced...")
  }

  const [carts,setCarts] = useState(null)
  const loadCarts = async ()=>{
    const response = await getCartList(sessionStorage.getItem('customerId'))
    console.log(response)
    if(response){
      setCarts(response['data'])
    } else {
      toast.error('Error while calling get /vendor api')
    }

  }

  const PlaceOrder = async(total) => {

    const formattedDate = currentDate.toISOString().split('T')[0];
    const id = sessionStorage.getItem('customerId');
    

    await giveOrder(formattedDate,id,total)

    setCarts([]);
  };

    return (     <>
<NavigationBar ></NavigationBar>
        <section className="bg-light my-5">
          <div className="container">
            <div className="row">
        
              <div className="col-lg-9">
                <div className="card border shadow-0">
                  <div className="m-4">
                    <h4 className="card-title mb-4">Your shopping cart</h4>

                    {carts === null ? (
                    <p>Loading...</p> // Show loading indicator while data is being fetched
                  ) : carts.length > 0 ? (
                    carts.map((cart) => {
                      cartTotal=cartTotal+cart['totalAmount']
                      if (cart['productPrice'] >= 1000) {
                        // Increment the discount by 100
                        discount =discount+ 100;}
                      return (
                        // Your cart item rendering logic here
                        <div className="row gy-3 mb-4">
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            <img src={`http://localhost:9999/vendorProducts/images/${cart.vendorProductId}`} alt="..." className="border rounded me-3" style={{height:96,width:96}}  onClick={() => { navigate(`/product/${cart.productId}`) }}/>
                            <div className="">
                              <p style={{fontSize:20,fontFamily:"cursive"}}>{cart['productName']}</p>
                              <p>{cart.pmanufacturer}</p>

                              {/* <p className="text-muted">Yellow, Jeans</p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                      <div className="" style={{marginRight:150}}>
                          <text className="h6">Quanity: {cart['qty']}</text> <br />
                          
                        </div>
                        {/* <div className="">
                          <select style={{width:100}} className="form-select me-4">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div> */}
                        <div className="">
                          <text className="h6">Total: {cart['totalAmount']}</text> <br />
                         
                          <small className="text-muted text-nowrap"> {cart['productPrice']} / per item </small>
                        </div>
                      </div>
                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          {/* <a href="#" className="btn btn-light border text-danger icon-hover-danger"> Remove</a> */}
                          
                          <button type="button" class="btn btn-danger" onClick={()=>{removeFromCart(cart.cartId)}}>Remove</button>
                          
                        </div>
                      </div>
                    </div>
                      );
                    })
                  ) : (
                    <p>Your cart is empty.</p>
                  )}             
                    
                    
                  </div>
        
                 
                </div>
              </div>
              
              
              <div className="col-lg-3">
                
                <div className="card shadow-0 border">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total price:</p>
                      <p className="mb-2">{cartTotal}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Discount:</p>
                      <p className="mb-2 text-success">-{discount}</p>
                    </div>
                   
                    <hr />
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total price:</p>
                      <p className="mb-2 fw-bold">{cartTotal-discount}</p>
                    </div>
        
                    <div className="mt-3">
                      <button className="btn btn-success w-100 shadow-0 mb-2" onClick={()=>PlaceOrder(cartTotal)}> Place Order </button>
                      <a href="http://localhost:3000/mainPage" className="btn btn-light w-100 border mt-2"> Back to store </a>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>  
        </>
        
          ) ;
}

export default Cart;
