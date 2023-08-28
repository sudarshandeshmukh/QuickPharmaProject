
package com.app.service;

import java.util.List;

import com.app.dto.CartProductRepo2;
import com.app.dto.CartRespDTO;
import com.app.entities.Cart;
import com.app.entities.Customer;
import com.app.entities.Product;

public interface CartService {
	
	List<CartRespDTO> getAllCarts(Long customID);
	
	public Cart addToCart(CartRespDTO dto);
	
	List<CartProductRepo2> getCartAnonymous(Long customerID);

	Cart cartBycustIdProductId(Long customerId, Long productId);

	String deleteCartByProductId(Long cartId);
	
	int getCartQty(Long customerId);
	
	
}
