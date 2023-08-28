function Category() {

    return ( <>
    <h2 style={{padding:10}}>Shop By Category</h2>
    <div style={{display:"flex" ,justifyContent:"space-evenly"}}>
        <div>
            <img src="https://www.netmeds.com/images/category/prod/thumb/ayush.png" alt=""></img>
        </div>
        <div>
            <img src="https://www.netmeds.com/images/category/prod/thumb/hair_care.png" alt=""></img>
        </div>
        <div>
            <img src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_3.jpg" alt=""></img>
        </div>
        <div>
            <img src="https://www.netmeds.com/images/category/prod/thumb/treatments.png" alt=""></img>
        </div>
        {/* <div>
            <img src="https://www.netmeds.com/images/category/prod/thumb/cold_and_fever.png" alt=""></img>
        </div> */}
    </div> 
    </>);
}

export default Category;