import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getCategoryImg, getCategoryList } from '../services/category'
import { useNavigate } from 'react-router-dom'
import Navbar from './SubCatnavbar'
import Footer from './footer'
import NavigationBar from './navigationBar'
import { log } from '../utils/utils'
import { cartQty } from '../services/cart'




function MainPage() {
   
 
   const [imageData, setImageData] = useState([]);
   const [count, setCount] = useState();
  const navigate =useNavigate()


  useEffect(() => {
    // get the list of products from server
    log("in main page")
    log("beforrr---")
    log(imageData)
    loadCategory()
    log("after---")    
    log(imageData)
    setCount(cartQty(sessionStorage.getItem('customerId')))

    //loadProducts()
  }, [])

  log("count in ,manipage--"+count)
  const loadCategory = async () => {
    const response = await getCategoryList()
    if (response['status'] === 200) {
      setImageData(response.data)
    console.log(imageData) 
    } else {
      toast.error('Error while calling get /product api')
    }
  }

  const   navigatToSubCat=(categoryId)=>{
    navigate('/subCategory/'+categoryId)
  }


//   const responsefetchImage = getCategoryList()

  return (
    <>
    <NavigationBar ></NavigationBar>
    <Navbar></Navbar>
    {/* Carousel */}
  <div id="carouselId" class="carousel slide" data-bs-ride="carousel" >
    <ol class="carousel-indicators">
      <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
      <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
      <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <img src="http://localhost:3000/images/_hair_care_Mini_banner_web.jpg" class="w-100 d-block" alt="First slide"/>
      </div>
      
      <div class="carousel-item">
        <img src="http://localhost:3000/images/_Ayurvedic_banner_web.jpg" class="w-100 d-block" alt="Second slide"/>
      </div>
      <div class="carousel-item">
        <img src="http://localhost:3000/images/_Fitness_banner_web.jpg" onClick={()=>navigate('/subCategory/1')} class="w-100 d-block" alt="Third slide"/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
      </button>
  </div>
    
        <a class="left carousel-control" href="#carousel-id" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
        <a class="right carousel-control" href="#carousel-id" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
    
    

{/* Category */}
<h2 className='container' style={{padding:10}}>Shop By Category</h2>
    <div className='container-fluid' style={{display:"flex" ,justifyContent:"space-evenly"}}>
      <div>
      {
        imageData.map((image)=>{
          const response =  getCategoryImg(image.categoryId)
         
          // setImage(image)
          return  <img src={`http://localhost:9999/categories/images/${image.categoryId}
          `} alt={image.categoryName} id={image.categoryId} onClick={(e)=>{navigatToSubCat(e.target.id)}} />

        // {/* <img src={imageUrl} alt="med" /> */}
 })
      }
    </div>

       
    </div> 
      {/* <Footer></Footer> */}

      
    </>
     )
}

export default MainPage

