function Carousel() {
    return (  
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://assets.truemeds.in/Images/dwebbanner3.jpeg"  style={{height:500}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn01.pharmeasy.in/dam/banner/banner/712b31dff67-newba.jpg" style={{height:500,width:950}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://assets.truemeds.in/Images/dwebbanner1.jpeg" style={{height:500}} className="d-block w-100" alt="..."/>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Carousel;