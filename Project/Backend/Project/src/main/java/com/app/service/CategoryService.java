package com.app.service;

import com.app.entities.Category;
import com.app.dto.ApiResponse;
import com.app.dto.CategoryDTO;

import java.io.IOException;
//import com.app.dto.DepartmentEmpsDTO;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;




public interface CategoryService {
	
	
	//	List<Department> getAllDepartmens();
List<Category> getAllCategory();
	
	
	//	DepartmentDTO getDepartmentDetails(Long deptId);
CategoryDTO getCategoryDetails(Long catId);

	//	DepartmentDTO addNewDepartment(DepartmentDTO dept);
CategoryDTO adddNewCategory(CategoryDTO cat);


ApiResponse uploadImage(Long categoryId, MultipartFile image) throws IOException;


byte[] downloadImage(Long categoryId) throws IOException;

	//	DepartmentEmpsDTO getDepartmentAndEmpDetails(Long deptId);
}

