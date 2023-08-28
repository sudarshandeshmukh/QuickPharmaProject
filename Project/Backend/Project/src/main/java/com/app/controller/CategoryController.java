package com.app.controller;

import static org.springframework.http.MediaType.IMAGE_GIF_VALUE;
import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;
import static org.springframework.http.MediaType.IMAGE_PNG_VALUE;

import java.io.IOException;
import java.io.InputStream;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.hibernate.engine.jdbc.StreamUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.CategoryDTO;
import com.app.service.CategoryService;
//import com.app.dto.DepartmentDTO;
//import com.app.service.DepartmentService;
import com.app.service.FileService;


@RestController
@RequestMapping("/categories")
@Validated
@CrossOrigin(origins = "http://localhost:3000")

public class CategoryController {
//	// dependency
//		@Autowired
//		private DepartmentService departmentService;

	@Autowired
	private CategoryService categoryService;
	
	
//	
//	@Value("${project.image}")
//	private String path;

	
	//Shreya code----------------->
//	 @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//	    public ResponseEntity<?> uploadImage(@RequestParam("name") String name,@RequestParam("desc") String desc,
//@RequestParam("image") MultipartFile image) throws IOException {
//	        System.out.println(image);
//	        System.out.println(desc);
//	        System.out.println(name);
//	        System.out.println("in upload img " + image.getOriginalFilename());
////	        
//	        return ResponseEntity.status(HttpStatus.OK).body(fileService.uploadImage(name,desc, image));
//	    }
//	 
//	 @GetMapping(value = "/{imgName}", produces = MediaType.IMAGE_JPEG_VALUE)
//		public void downloadFile(@PathVariable String imgName, HttpServletResponse response) throws IOException {
//			InputStream resource = fileService.getResource(path, imgName);
//			response.setContentType(MediaType.IMAGE_JPEG_VALUE);
//			StreamUtils.copy(resource, response.getOutputStream());
//			System.out.println(StreamUtils.copy(resource, response.getOutputStream()));
//		}


	@GetMapping("/{catId}")
	public ResponseEntity<?> getCatDetails(@PathVariable @Min(1) @Max(10) Long catId) {
		System.out.println("in get cat dtls " + catId);
		return ResponseEntity.ok(categoryService.getCategoryDetails(catId));
	}
	
	@PostMapping
	public ResponseEntity<?> addCategory(@RequestBody CategoryDTO dto) {
		return ResponseEntity.ok(categoryService.adddNewCategory(dto));
	}
	
	@PostMapping(value = "/images/{categoryId}", consumes = "multipart/form-data")
	public ResponseEntity<?> uploadImage(@PathVariable Long categoryId, @RequestParam MultipartFile imageFile) throws IOException {
		System.out.println("in upload img " + categoryId);
		return ResponseEntity.status(HttpStatus.OK).body(categoryService.uploadImage(categoryId, imageFile));
	}
	
	
	@GetMapping(value="/images/{categoryId}",produces = {IMAGE_GIF_VALUE,
			IMAGE_JPEG_VALUE,IMAGE_PNG_VALUE})
	public ResponseEntity<?> serveEmpImage(@PathVariable Long categoryId) throws IOException {
		System.out.println("in download img " + categoryId);
		return ResponseEntity.ok(categoryService.downloadImage(categoryId));
	}
	
	@GetMapping("/AllCategory")
	public ResponseEntity<?> getAllCategory() {
		System.out.println("in allcategroy-----------");
		return ResponseEntity.ok(categoryService.getAllCategory());
	}
		
}
