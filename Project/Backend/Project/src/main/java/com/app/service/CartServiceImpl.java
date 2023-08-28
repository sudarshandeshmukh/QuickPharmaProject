package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.CartProductRepo;
import com.app.dto.CartProductRepo2;
import com.app.dto.CartRespDTO;
import com.app.entities.Cart;
import com.app.entities.Customer;
import com.app.entities.Product;
import com.app.respository.CartRepo;
import com.app.respository.CustomerRepo;
import com.app.respository.ProductRepo;
import com.app.respository.VendorProductRepo;

@Service
@Transactional
public class CartServiceImpl implements CartService {

	@Autowired
	private CartRepo cartRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private CustomerRepo customerRepo;
	
	@Autowired
	private VendorProductRepo vendorProductRepo;
	
	private Cart cart;
	
	@Autowired
	private ProductRepo productRepo;
	
	@Override
	public List<CartRespDTO> getAllCarts(Long customID) {
		
		List<Cart> cartList = cartRepo.findByCustomer(customID);
				
		return cartList.stream() // Stream<Emp>
				.map(cart -> mapper.map(cart,CartRespDTO.class)) // Stream<DTO>
				.collect(Collectors.toList());
	}

	@Override
	public Cart addToCart(CartRespDTO dto) {
		Cart cart=cartBycustIdProductId(dto.getCustomerId(),dto.getProductId());
		System.out.println("cart------"+cart);
		if(Objects.isNull(cart)){
			Cart cart1=mapper.map(dto, Cart.class);
			cart1.setCustomer(customerRepo.findByCustomerId(dto.getCustomerId()));
			cart1.setProduct(productRepo.findByProductId(dto.getProductId()));
			cart1=cartRepo.save(cart1);
			System.out.println("cart1========="+cart1);
			return cart1;
		}	
		else {
		cart.setQty(cart.getQty()+dto.getQty());
		return cartRepo.save(mapper.map(dto, Cart.class)); 
		}
		
	}
	
	@Override
	public List<CartProductRepo2> getCartAnonymous(Long customerID) {
		
		List<CartProductRepo> list = vendorProductRepo.listofCartProducts(customerID);
		System.out.println("repo--------------"+list);
		List<CartProductRepo2> list2 = new ArrayList<CartProductRepo2>();
		for(int i= 0; i<list.size();i++)
		{
			CartProductRepo2 dto = new CartProductRepo2();
			dto.setProductDesc(list.get(i).getProductDesc());
			dto.setProductPrice(list.get(i).getProductPrice());
			dto.setProductName(list.get(i).getProductName());
			dto.setVendorProductId(list.get(i).getVendorProductId());
			dto.setQty(list.get(i).getQty());
			dto.setProductId(list.get(i).getProductId());
			dto.setPmanufacturer(list.get(i).getPmanufacturer());
			dto.setCartId(list.get(i).getCartId());
			int qty = list.get(i).getQty();
			double price = list.get(i).getProductPrice();
			
			double totalAmount = qty*price;
			
			dto.setTotalAmount(totalAmount);
			
			list2.add(dto);
			System.out.println("repo2--------------"+list2);
		}
		return list2;
	}
	
	@Override
	public Cart cartBycustIdProductId(Long customerId,Long productId) {
		List<Cart> cart=cartRepo.findByCustomerIdAndProductId(customerId,productId);
		System.out.println("List of Cart------"+cart.toString());
		if(cart.size()>=1)
			return cart.get(0);
		return null;
	}
	@Override
	public String deleteCartByProductId(Long cartId) {		
		cartRepo.deleteById(cartId);
		return "deleted successfully";
	}

	@Override
	public int getCartQty(Long customerId) {
		return cartRepo.getQty(customerId);
	}

}
