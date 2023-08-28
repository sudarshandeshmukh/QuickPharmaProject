package com.app.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.CustomerLoginDto;
import com.app.dto.addNewCustomerDto;
import com.app.entities.Address;
import com.app.entities.Customer;
import com.app.respository.CustomerRepo;


@Service
@Transactional
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private CustomerRepo customerRepo;
	
	
	@Override
	public Customer addNewCustomer(addNewCustomerDto dto) {
		
			Customer customer = mapper.map(dto, Customer.class);
			System.out.println("dto in addCustomer service--"+dto);
			//Address address= addressService.findAddress(dto.getAddressId());
			//customer.setAddress(address);
			customer.setRole("Customer");
			System.out.println("in customer service   --"+customer );
			customerRepo.save(customer);
//			mapper.map(customerRepo.save(customer ), addNewCustomerDto.class);
			return customer ;
		
	}

	@Override
	public List<Customer> getAllCustomer() {
		
		return customerRepo.findAll();
	}

	@Override
	public Customer getCustomer(Long customerId) {
		System.out.println("in get customer -id--"+customerId);
		Customer customer = customerRepo.findByCustomerId(customerId);
		//System.out.println(customer.getAddress());
		System.out.println("customer----"+customer);
		return customer;

	}


	@Override
	public Customer getCustomerByEmail(String email) {
		Customer cust=customerRepo.findByEmail(email);
		System.out.println("customer------"+cust);
		return cust;
	}

	@Override
	public Customer getCustomerAfterLogin(CustomerLoginDto dto) {
//		Customer customer = customerRepo.findByEmail(dto.getEmail());
		return customerRepo.findByEmail(dto.getEmail());
	}

	@Override
	public Customer getCustomerByPhone(String phone) {
		return customerRepo.findByPhone(phone);
	}
	
	
	
}
