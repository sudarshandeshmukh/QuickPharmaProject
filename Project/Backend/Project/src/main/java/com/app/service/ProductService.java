package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.AddProductDto;
import com.app.dto.ApiResponse;
import com.app.dto.ProductRespDTO;
import com.app.dto.ShowProductDto;
import com.app.dto.ShowWholeProductDto;
import com.app.entities.Product;



public interface ProductService {

	Product addNewProduct(ProductRespDTO dto);
	
	Product deleteProduct(Long prodID);
	
	void updateProuctQuantity(Long vendorProductId,Long productId, Long quantity);
	

	ShowWholeProductDto getProductDetails(Long prodID);

	List<ProductRespDTO> getAllProductsFromSubCategory(Long subCategoryId);

	List<ShowProductDto> showProducts(Long subCategoryId);
	
//	ApiResponse uploadImage(Long productId, MultipartFile image) throws IOException;
	
//	byte[] downloadImage(Long productId) throws IOException;
	
//	List<ShowProductDto> showProducts();
	
	
	
}
