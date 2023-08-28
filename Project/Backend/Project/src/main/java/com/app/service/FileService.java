package com.app.service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import org.springframework.web.multipart.MultipartFile;

import com.app.entities.Category;

public interface FileService {
	Category uploadImage(String name ,String desc, MultipartFile imageFile) throws IOException;
	
	InputStream getResource(String path,String fileName) throws FileNotFoundException;

}
