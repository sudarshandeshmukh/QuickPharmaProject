package com.app.controller;

import java.io.IOException;
import static org.springframework.http.MediaType.*;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.VendorProductDto;
import com.app.entities.VendorProducts;
import com.app.service.VendorProductService;

@RestController
@RequestMapping("/vendorProducts")
@CrossOrigin(origins = "http://localhost:3000")

public class VendorProductController {

	@Autowired
	private VendorProductService vendProdService;
	
	
	@GetMapping
	public ResponseEntity<?> getAllVendorProducts(){
		return ResponseEntity.ok(vendProdService.getVendorProdList());
	} 
	
	@PostMapping
	public ResponseEntity<?> addNewVendorProduct(@RequestBody VendorProductDto dto){
		return ResponseEntity.ok(vendProdService.addVendorProduct(dto));
	}
	
	@PutMapping("/{venProdId}")
	public ResponseEntity<?> updateVendorProduct(@PathVariable Long venProdId , @RequestBody VendorProductDto dto){
		
		return ResponseEntity.ok(vendProdService.updateVendorProduct(venProdId, dto));
	}
	
	// 4. upload image
		 	// http://host:port/employees/images/{empId} , method=POST , req param :
			// multipart file(image data)
			@PostMapping(value = "/images/{productId}", consumes = "multipart/form-data")
			public ResponseEntity<?> uploadImage(@PathVariable Long productId, @RequestParam MultipartFile imageFile)
					throws IOException {
				System.out.println("in upload img " + productId);
				return ResponseEntity.status(HttpStatus.CREATED).body(vendProdService.uploadImage(productId, imageFile));
			}

			// 5 . serve(download image) of specific emp
			// http://host:port/employees/images/{empId} , method=GET
		@GetMapping(value="/images/{productId}",produces = {IMAGE_GIF_VALUE,
				IMAGE_JPEG_VALUE,IMAGE_PNG_VALUE})
		public ResponseEntity<?> serveEmpImage(@PathVariable Long productId) throws IOException {
			System.out.println("in download img " + productId);
			return ResponseEntity.ok(vendProdService.downloadImage(productId));
		}
	
	
}
