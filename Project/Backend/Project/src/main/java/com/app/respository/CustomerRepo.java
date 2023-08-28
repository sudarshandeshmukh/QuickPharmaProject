package com.app.respository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Customer;

public interface CustomerRepo extends JpaRepository<Customer,Long> {
	
	Customer findByCustomerId(Long customerId);
	
	List<Customer> findAll();
	
	Customer findByEmail(String email);
	
	Customer findByPhone(String phone);
	
}
