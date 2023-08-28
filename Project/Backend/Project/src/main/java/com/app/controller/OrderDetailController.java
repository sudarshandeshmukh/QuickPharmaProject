package com.app.controller;

import java.util.List;

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
import com.app.dto.CustomerOrderDetailsDto;
import com.app.dto.OrderDetailsDto;
import com.app.entities.OrderDetails;
import com.app.entities.Orders;
import com.app.entities.Product;
import com.app.respository.OrderDetailRepo;
import com.app.respository.OrderRepo;
import com.app.respository.ProductRepo;
import com.app.service.OrderDetailsService;
import com.app.service.OrderService;

@RestController
@RequestMapping("/orderDetailscontroller")
@Validated
@CrossOrigin(origins = "http://localhost:3000")

public class OrderDetailController {
	@Autowired
	private OrderDetailsService orderDetailService;
	
	
	
	@PostMapping
	public ResponseEntity<?> addOrderDetail(@RequestBody OrderDetailsDto dto) {
		System.out.println("in orderDetailController addOrder-------------");
		return ResponseEntity.status(HttpStatus.OK).body(orderDetailService.addOrderDetails(dto));
	}
	
//	@GetMapping("/{orderId}")
//	public ResponseEntity<?> getOrderDetailByOrderId(@PathVariable Long orderId) {
//		
//		return ResponseEntity.status(HttpStatus.OK).body(orderDetailService.getOrderDetailsByOrderId(orderId));
//	}
	
//	@GetMapping
//	public ResponseEntity<?> getTop10productssold() {
//		return ResponseEntity.status(HttpStatus.CREATED).body(orderDetailService.find10products());
//	}
	
	@DeleteMapping("/{odId}")
	public void deleteByOdId(@PathVariable Long odId) {
		orderDetailService.deletByOdId(odId);
	}
	
	@GetMapping("/{orderId}")
	public ResponseEntity<?> getAllOrderDetailsByOrderId(@PathVariable Long orderId){
		System.out.println("in get All orderdetails---"+orderId);
		List<CustomerOrderDetailsDto> list=orderDetailService.gellAllodOrderDetailsByOrderId(orderId);
		list.forEach((e)->System.out.println(e.toString()));
//		return ResponseEntity.status(HttpStatus.OK).body(orderDetailService.gellAllodOrderDetailsByOrderId(orderId));
		return ResponseEntity.ok(list);
	}
	
	@GetMapping
	public ResponseEntity<?> getAllOrderDetails(){
		return ResponseEntity.ok(orderDetailService.gellAllodOrderDetails());
	}
}
