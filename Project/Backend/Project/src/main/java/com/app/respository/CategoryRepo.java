package com.app.respository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Category;


public interface CategoryRepo  extends JpaRepository<Category, Long>{
	Category findByCategoryId(Long Id);
	
	//List<Category> findAll();
//	//get department n emp details in a single join query
//		@Query("select d from Department d left join fetch d.emps where d.id=?1")
//		Department getDepartmentAndEmpDetails(Long deptId);
//	@Query("select c from Category c left join fetch c.productList where c.id=?1")
//	Category getCategoryAndProducts(Long catId);
	
}
