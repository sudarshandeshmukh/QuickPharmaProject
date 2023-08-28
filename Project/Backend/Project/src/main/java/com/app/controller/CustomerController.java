package com.app.controller;



import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.dto.CustomerLoginDto;
import com.app.dto.addNewCustomerDto;
import com.app.entities.Customer;
import com.app.service.AddressService;
import com.app.service.CustomerService;

@RestController
@RequestMapping("/Customer")
@Validated
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private AddressService addressService;
	
	@GetMapping
	public ResponseEntity<?> allCustomers() {
		System.out.println("find all Users" );
		return ResponseEntity.status(HttpStatus.OK).body(customerService.getAllCustomer());
	}
	
	
	@PostMapping
	public ResponseEntity<?> addNewCustomer(@RequestBody @Valid addNewCustomerDto dto) {
		System.out.println("add new Customer " + dto);
		
		//Address address=addressService.findAddress(dto.getAddressId());
//		Customer customer=customerService.addNewCustomer(dto);
		Customer customer = customerService.getCustomerByEmail(dto.getEmail());
		System.out.println("cutomer in add customer (email)----"+customer);
		
		Customer customer1 = customerService.getCustomerByPhone(dto.getPhone());
		System.out.println("cutomer in add customer (phone)----"+customer1);
		if(customer!=null || customer1!=null) {
			if(customer!=null) {
				System.out.println("email---------------------");
				return ResponseEntity.status(HttpStatus.OK).body("Customer already registered with this email");}
			else {
				System.out.println("phone---------------------");
				return ResponseEntity.status(HttpStatus.OK).body("Customer already registered with this phoneee");}
		}
		else {System.out.println("added-------------------------------"); 
			return ResponseEntity.status(HttpStatus.OK).body(customerService.addNewCustomer(dto));
		}
	}
	
	
	@GetMapping(value="/{CustomerId}")
	public ResponseEntity<?> finById(@PathVariable Long CustomerId ) {
	//public ResponseEntity<?> findUserById( Long Id ) {
		System.out.println("find user having id--" + CustomerId);
		return ResponseEntity.status(HttpStatus.OK).body(customerService.getCustomer(CustomerId));
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginByEmailAndPsssword(@RequestBody CustomerLoginDto dto ) {
	//public ResponseEntity<?> findUserById( Long Id ) {
		System.out.println("Email and password in findByEmail  --" + dto);	
		Customer customer=customerService.getCustomerAfterLogin(dto);
		System.out.println("customer--------  --" + customer);
		System.out.println("password--------  --" + customer.getPassword().equals(dto.getPassword()));
		if(customer!=null && customer.getPassword().equals(dto.getPassword())) {
			System.out.println("Afterr succesfull logn in Customer cotroller--------------");
			return ResponseEntity.status(HttpStatus.OK).body(customer);			
		}
		else
			return ResponseEntity.status(HttpStatus.OK).body("invalid user credentials");
	}
	
}
