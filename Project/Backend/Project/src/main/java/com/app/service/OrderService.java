package com.app.service;


import java.util.List;

import com.app.dto.OrdersResponseDto;
import com.app.entities.Orders;

public interface OrderService {
	void addOrder(Orders o);
	
	String deleteOrderId(Long orderId);
	
	List<Orders> getOrderByCustomerId(Long customerId); 
}
