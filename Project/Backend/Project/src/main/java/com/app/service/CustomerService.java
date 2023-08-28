package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.CustomerLoginDto;
import com.app.dto.addNewCustomerDto;
import com.app.entities.Customer;

public interface CustomerService {
	Customer  addNewCustomer(addNewCustomerDto dto);
	
	List<Customer> getAllCustomer();
	
	Customer getCustomer(Long customerId);
	
	Customer getCustomerByEmail(String email);
	
	Customer getCustomerByPhone(String phone);
	
	Customer getCustomerAfterLogin(CustomerLoginDto dto);
}
