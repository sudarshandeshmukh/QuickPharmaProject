package com.app.respository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.dto.CartProductRepo;
import com.app.entities.Vendor;
import com.app.entities.VendorProducts;

public interface VendorProductRepo extends JpaRepository<VendorProducts, Long>{

//	Vendor findByVendorId(Long vendorId);
	
	VendorProducts findByProductName(String productName);
	
List<VendorProducts> findByVendor(Vendor vendor);
	
//	@Query("SELECT new com.app.dto.CartProductRepo(vpp.productDesc,c.qty,p.productPrice) from Cart c join c.product p join c.product.vendorProduct vpp where c.customer.customerId=:customerID")
//	List<CartProductRepo> listofCartProducts(Long customerID);
//	
	@Query("SELECT new com.app.dto.CartProductRepo(c.cartId,p.productId,vpp.productDesc,vpp.productName,vpp.pmanufacturer,c.qty,vpp.vendorProductId,p.productPrice) from Cart c join c.product p join c.product.vendorProduct vpp where c.customer.customerId=:customerID")
	List<CartProductRepo> listofCartProducts(Long customerID);

}
