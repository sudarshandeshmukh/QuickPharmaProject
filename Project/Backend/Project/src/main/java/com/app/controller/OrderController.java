package com.app.controller;

import java.util.List;

import javax.persistence.criteria.Order;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.OrdersDto;
import com.app.entities.Customer;
import com.app.entities.Orders;
import com.app.respository.CustomerRepo;
import com.app.respository.OrderRepo;
import com.app.service.OrderService;

import lombok.Delegate;

@RestController
@RequestMapping("/ordercontroller")
@Validated
@CrossOrigin(origins = "http://localhost:3000")

public class OrderController {
		
	@Autowired
	private OrderService service;
	
	@Autowired
	private OrderRepo repo;
	
	@Autowired
	private CustomerRepo custRepo;
	
	
	@Autowired 
	private ModelMapper mapper;
	
	@PostMapping
	public ResponseEntity<?>  insertOrder(@RequestBody OrdersDto dto)
	{ 
		System.out.println("order dto----"+dto);
		Customer customer=custRepo.findByCustomerId(dto.getCustomerId());
		Orders o=mapper.map(dto, Orders.class);
		o.setCustomer(customer);
		service.addOrder(o);
		return ResponseEntity.ok("order added....");
	}
	
//	@GetMapping("/{orderId}")
//	public ResponseEntity<?> searchOrders(@PathVariable Long orderId)
//	{
//		return ResponseEntity.status(HttpStatus.FOUND).body(repo.findByOrderId(orderId));
//
//	}
	
	
	@GetMapping("/{customerId}")
	public ResponseEntity<?> getOrdersByCustomerID(@PathVariable Long customerId)
	{
//		List<Orders> list= service.getOrderByCustomerId(customerId);
//		list.forEach((e)->System.out.println(e));
		return ResponseEntity.status(HttpStatus.OK).body(service.getOrderByCustomerId(customerId));
		
	}
	
	@DeleteMapping("/{orderId}")
	public void  deleteOrderId(@PathVariable Long orderId){
		service.deleteOrderId(orderId);
	}
}
