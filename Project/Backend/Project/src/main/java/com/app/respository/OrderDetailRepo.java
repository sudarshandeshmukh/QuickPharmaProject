package com.app.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.dto.CustomerOrderDetailsDto;
import com.app.dto.Top10product;
import com.app.entities.OrderDetails;

public interface OrderDetailRepo extends JpaRepository<OrderDetails, Long> {
	
	@Query("select od from OrderDetails od where od.orders.orderId=:orderId")
	List<OrderDetails> findOrderDetailsByOrderId(Long orderId);
	
	

//	@Query("SELECT new com.app.dto.CartProductRepo(c.cartId,p.productId,vpp.productDesc,vpp.productName,vpp.pmanufacturer,c.qty,vpp.vendorProductId,p.productPrice) from Cart c join c.product p join c.product.vendorProduct vpp where c.customer.customerId=:customerID")
//	
//	@Query("select com.app.dto.OrderProductDto(orderId,productName,pmanufacturer,od.quantity,o.total,vp.vendorProductId) from OrderDetails od join  where od.orders.cutsomer.customerId=:customerID")
//	List<OrderDetails> findOrderDetailsByCustomerID(Long customerID);
	
	@Query("SELECT SUM(od.amount) FROM OrderDetails od WHERE od.orders.orderId =:orderId GROUP BY od.orders.orderId")
	Long findTotalSumOfProducts(Long orderId);
	
	@Query("SELECT new com.app.dto.CustomerOrderDetailsDto(od.quantity,p.productPrice,vp.productName,vp.vendorProductId) FROM OrderDetails od join od.product p join p.vendorProduct vp  WHERE od.orders.orderId =:orderId ")
	List<CustomerOrderDetailsDto> findByOrderId(Long orderId);
	
	void deleteByOdId(Long odId);
	
//*****************?????????????????????????**********************
	
//	@Query("SELECT od.product.productId, SUM(od.quantity) as sum FROM OrderDetails od GROUP BY od.product.productId ORDER BY sum ")
//	List<Object[]> findTop10Products();

	

	
	
	//void deleteBy(Long odId);
}
