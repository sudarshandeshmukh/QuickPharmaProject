package com.app.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CartProductRepo {
	
	private Long cartId;
	private Long productId;
	private String productDesc;
	
	private String productName;

	private String pmanufacturer;
	
	private int qty;
	
	
	
	private Long vendorProductId;
	
	private double productPrice ;
	
	
	





	public CartProductRepo(	Long cartId,Long productId, String productDesc, String productName,String pmanufacturer, int qty, Long vendorProductId,double productPrice) {
		super();
		this.cartId=cartId;
		this.productId = productId;
		this.productDesc = productDesc;
		this.productName = productName;
		this.pmanufacturer=pmanufacturer;
		this.qty = qty;
		this.vendorProductId = vendorProductId;
		this.productPrice = productPrice;
	}

}