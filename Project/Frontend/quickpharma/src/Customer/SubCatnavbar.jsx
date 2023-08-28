import React, { useEffect, useState } from 'react';
import '../navbar.css'; // Import the CSS file
import { getCategoryList, getSubCategory } from '../services/category';
import { toast } from 'react-toastify';
import { log } from '../utils/utils';

function SubCatNavbar() {
  useEffect(() => {
    loadCategory();
  }, []);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const loadCategory = async () => {
    const response = await getCategoryList();
    if (response['status'] === 200) {
      setCategory(response.data);
    } else {
      toast.error('Error while calling get /category api');
    }
  };

  const handleSubCategoryClick = async (categoryId) => {
    const response = await getSubCategory(categoryId);
    if (response['status'] === 200) {
      setSubCategory(response.data);
    } else {
      toast.error('Error while calling get /subcategory api');
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {category.map((cat) => (
          <li className="nav-item dropdown" key={cat.categoryId} style={{marginLeft:"20px"}}>
            {/* <a href="http://localhost:3000/" onMouseEnter={() => handleSubCategoryClick(cat.categoryId)}> */}
            <p  onMouseEnter={() => handleSubCategoryClick(cat.categoryId)}>

              {cat.categoryName}
            </p>
            <ul className="dropdown-menu">
              {subCategory.map((subCat) => (
                <li key={subCat.subCatId}>
                  <a href={`http://localhost:3000/subCategoryProducts/${subCat.subCatName}/${subCat.subCatId}`} >{subCat.subCatName}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SubCatNavbar;


// import React, { useEffect, useState } from 'react';
// import '../navbar.css'; // Import the CSS file
// import { getCategoryList, getSubCategory } from '../services/category';
// import { toast } from 'react-toastify';
// import { log } from '../utils/utils';

// function Navbar() {

//     useEffect(() => {
//         loadCategory()

//       }, [])

// const [category,setCategory ]= useState([])
// const [subCategory,setSubCategory ]= useState([])


//   const loadCategory = async () => {
//     const response = await getCategoryList()
//     if (response['status'] === 200) {
//         setCategory(response.data)
//     console.log(category) 
//     } else {
//       toast.error('Error while calling get /category api')
//     }
//   }


//   const loadSubCategory = async (categoryId) => {
//     const response = await getSubCategory(categoryId)
//     if (response['status'] === 200) {
//     setSubCategory(response.data)
//       log(response.data)
//     } else {
//       toast.error('Error while calling get /subcategory api')
//     }
//   }

//   return (
//     <nav className="navbar">
//       <ul className="nav-list">
//         {category.map((cat)=>{


//             return <li className="nav-item dropdown">
//           <a href="...">{cat.categoryName}</a>
//           <ul className="dropdown-menu">
//             {loadSubCategory(cat.categoryId)
//             }

//             <li><a href="...">Service 1</a></li>
//             <li><a href="...">Service 2</a></li>
//             <li><a href="...">Service 3</a></li>
//           </ul>
//         </li>

//         })}

//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
