package com.app.service;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ApiException;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.CategoryDTO;
//import com.app.dto.DepartmentDTO;

//import com.app.dto.DepartmentEmpsDTO;

//import com.app.entities.Department;
import com.app.entities.Category;
import com.app.entities.VendorProducts;
//import com.app.repository.DepartmentRepository;
import com.app.respository.CategoryRepo;


@Service
@Transactional
public class CategoryServiceImpl implements CategoryService{
	
	

//	// dep
//	@Autowired
//	private DepartmentRepository departmentDao;
//
	//cat
	@Autowired
	private CategoryRepo categoryRepo;
	@Autowired
	private ModelMapper mapper;
	@Value("${folder.location}")
	private String folderLocation;
//	@Override
//	public List<Department> getAllDepartmens() {
//
//		return departmentDao.findAll();
//	}
//
	@Override
	public List<Category> getAllCategory() {
		
		return categoryRepo.findAll();
	}
	
//	@Override
//	public DepartmentDTO getDepartmentDetails(Long deptId) {
//		Department dept=departmentDao.findById(deptId).
//		orElseThrow(() -> new ResourceNotFoundException("Invalid Dept Id !!!!"));
//		return mapper.map(dept,DepartmentDTO.class);
//				
//	}
	@Override
	public CategoryDTO getCategoryDetails(Long catId) {
		Category cat=categoryRepo.findById(catId).
				orElseThrow(() -> new ResourceNotFoundException("Invalid cat Id !!"));
		return mapper.map(cat, CategoryDTO.class);
	}
	
//
//	@Override
//	public DepartmentDTO addNewDepartment(DepartmentDTO dept) {
//		Department departmentEntity = mapper.map(dept, Department.class);
//		Department persistentDept = departmentDao.save(departmentEntity);
//		return mapper.map(persistentDept, DepartmentDTO.class);
//	}
//
	@Override
	public CategoryDTO adddNewCategory(CategoryDTO cat) {
		Category categoryEntity = mapper.map(cat,Category.class);
		Category persistentCat = categoryRepo.save(categoryEntity);
		return mapper.map(persistentCat, CategoryDTO.class);
	}
	@Override
	public ApiResponse uploadImage(Long categoryId, MultipartFile image) throws IOException {
	    // get emp from emp id
	    Category category=categoryRepo.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("Invalid product ID!!!!"));
	    // emp found --> PERSISTENT
	    // store the image on server side folder
	    String path = folderLocation.concat(image.getOriginalFilename());
	    System.out.println(path);
	    // Use FileUtils method : writeByte[] --> File
	    FileUtils.writeByteArrayToFile(new File(path), image.getBytes());
	    // set image path
	    category.setImg(path);
	    // OR to store the img directly in DB as a BLOB
	    // emp.setImage(image.getBytes());
	    return new ApiResponse("Image file uploaded successfully for categoryId -- " + categoryId);
	}
	
	@Override
	public byte[] downloadImage(Long categoryId) throws IOException {
	    // get emp by id
	    Category category = categoryRepo.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("Invalid emp ID!!!!"));
	    // emp found --> PERSISTENT
	    String path = category.getImg();
	    if (path != null) {
	        // path ---> File --> byte[]
	        return FileUtils.readFileToByteArray(new File(path));
	        // OR from DB : return emp.getImage();
	    } else
	        throw new ApiException("Image not yet assigned !!!!");
	}
	
//	@Override
//	public DepartmentEmpsDTO getDepartmentAndEmpDetails(Long deptId) {		
//		Department department = departmentDao.getDepartmentAndEmpDetails(deptId);
//		return mapper.map(department,DepartmentEmpsDTO.class);
//	}//dept +emps dto reted to the caller
	
	
	
	
	




	
	
	
	
	



	
}
