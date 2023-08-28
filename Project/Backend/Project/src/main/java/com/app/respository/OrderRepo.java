package com.app.respository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.app.dto.OrdersResponseDto;
import com.app.entities.Orders;

public interface OrderRepo extends JpaRepository<Orders, Long>{
	Orders findByOrderId(Long orderId);
	
	void deleteByOrderId(Long orderId);
	
//	@Query("SELECT new com.app.dto.CustomerOrderDetailsDto(od.quantity,p.productPrice,vp.productName,vp.vendorProductId) FROM OrderDetails od join od.product p join p.vendorProduct vp  WHERE od.orders.orderId =:orderId ")
	
	@Query("select o from Orders o where o.customer.customerId=:customerId")
	List<Orders> findByCustomerId(Long customerId); 
	
}
