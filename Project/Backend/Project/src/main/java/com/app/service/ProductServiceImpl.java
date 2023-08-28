package com.app.service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.apache.commons.io.FileUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ApiException;
import com.app.custom_exceptions.ResourceNotFoundException;
//import com.app.custom_exceptions.ApiException;
//import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.AddProductDto;
import com.app.dto.ApiResponse;
import com.app.dto.ProductRespDTO;
import com.app.dto.ShowProductDto;
import com.app.dto.ShowWholeProductDto;
//import com.app.entities.Address;
import com.app.entities.Category;

import com.app.entities.Product;
import com.app.entities.VendorProducts;
//import com.app.entities.Project;
//import com.app.repository.AddressRepository;
import com.app.respository.CategoryRepo;
import com.app.respository.ProductRepo;
import com.app.respository.VendorProductRepo;

@Service
@Transactional
public class ProductServiceImpl implements ProductService{
	@Autowired
	private CategoryRepo catRepo;
	
	@Autowired
	private ProductRepo prodRepo;
	
	@Autowired
	private VendorProductRepo vendorProdRepo;
	
	@Value("${folder.location}")
	private String folderLocation;
	
	
	
	@Autowired
	private ModelMapper mapper;
	

	@Override
	public List<ProductRespDTO> getAllProductsFromSubCategory(Long subCategoryId) {
		System.out.println("in service  prod get");	
		
		return null;
	}

	@Override
	public Product addNewProduct(ProductRespDTO dto) {

//			Category cat = catRepo.findById(dto.getCatId())
//					.orElseThrow(()->new ResourceNotFoundException("Invalid Cat id !!!"));
			Product product =mapper.map(dto, Product.class);
			product.setVendorProduct(vendorProdRepo.findById(dto.getVendorProductId()).orElseThrow(() -> new ResourceNotFoundException("Invalid Prod ID , Prod not found !!!!")));
			
			System.out.println(product);
			
			
			//cat.addProduct(product);//cascade on save

		return mapper.map(prodRepo.save(product),Product.class);
		
	}

//	@Override
//	public Product updateProduct(Long prodID, ProductRespDTO dto) {
//		
//		Product prod = prodRepo.findById(prodID)
//				.orElseThrow(() -> new ResourceNotFoundException("Invalid Prod ID , Prod not found !!!!"));
//		Category cat = catRepo.findById(dto.getCatId())
//				.orElseThrow(()-> new ResourceNotFoundException("Invalid Cat Id"));
//		mapper.map(dto,prod);
//		prod.setProductId(prodID);
//		//cat.addProduct(prod);
//		return mapper.map(prod,Product.class);
//		
//	}

	
	@Override
	public ShowWholeProductDto getProductDetails(Long prodID) {
		ShowWholeProductDto product = prodRepo.getWholeProduct(prodID);
		System.out.println("product----------"+product);
		return product;
	}

	@Override
	public Product deleteProduct(Long prodID) {
		
		//System.out.println("Optional"+product1);
		Product product = prodRepo.findById(prodID)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Prod ID!!!"));
		//System.out.println("product"+product);
		prodRepo.delete(product);
		return product;
	}

	@Override
	public void updateProuctQuantity(Long vendorProductId,Long productId, Long quantity) {
		// TODO Auto-generated method stub
		Product product = prodRepo.findById(vendorProductId).orElseThrow(()-> new ResourceNotFoundException("Invalid VendorProductId"));
//		prodRepo.findBy
		
		VendorProducts vendorProduct = vendorProdRepo.findById(vendorProductId).orElseThrow(()-> new ResourceNotFoundException("Invalid VendorProductId"));
		
		vendorProduct.setProductQuantity((int)(vendorProduct.getProductQuantity()-quantity));
		
		product.setPq(product.getPq()+quantity);
		
		vendorProdRepo.save(vendorProduct);
		
		prodRepo.save(product);
	}
	@Override
	public List<ShowProductDto> showProducts(Long subCategoryId) {
		return prodRepo.showProduct(subCategoryId);
	}
	
//	public ApiResponse uploadImage(Long productId, MultipartFile image) throws IOException {
//	    // get emp from emp id
//	    Product product= prodRepo.findById(productId).orElseThrow(() -> new ResourceNotFoundException("Invalid product ID!!!!"));
//	    // emp found --> PERSISTENT
//	    // store the image on server side folder
//	    String path = folderLocation.concat(image.getOriginalFilename());
//	    System.out.println(path);
//	    // Use FileUtils method : writeByte[] --> File
//	    FileUtils.writeByteArrayToFile(new File(path), image.getBytes());
//	    // set image path
////	    product.setImg(path);
//	    // OR to store the img directly in DB as a BLOB
//	    // emp.setImage(image.getBytes());
//	    return new ApiResponse("Image file uploaded successfully for emp id " + productId);
//	}

}
