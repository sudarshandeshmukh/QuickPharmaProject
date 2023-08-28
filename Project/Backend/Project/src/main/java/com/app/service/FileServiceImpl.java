package com.app.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.entities.Category;
import com.app.respository.CategoryRepo;

@Service
@Transactional
public class FileServiceImpl implements FileService {

	@Autowired
	private CategoryRepo catRepo;
	
	@Override
	public Category uploadImage(String Catname ,String desc ,MultipartFile imageFile) throws IOException {
		String name = imageFile.getOriginalFilename();
		System.out.println("in service upload image  name---"+name);
		String randomId = UUID.randomUUID().toString();
		System.out.println("in service upload image  randId---"+randomId);
		String filename1 = randomId.concat(name.substring(name.lastIndexOf(".")));	
		System.out.println(filename1);
		Category cat = new Category();
		cat.setCategoryName(Catname);
		cat.setCategoryDesc(desc);
		cat.setImg(filename1);
		return catRepo.save(cat);
	}
	
	
	@Override
	public InputStream getResource(String path, String fileName) throws FileNotFoundException {

		String fullPath = path + File.separator + fileName;

		InputStream is = new FileInputStream(fullPath);

		return is;
	}


}
