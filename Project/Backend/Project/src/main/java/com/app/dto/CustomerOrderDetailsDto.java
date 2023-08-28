package com.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class CustomerOrderDetailsDto {
	
//	od.quantity,p.productPrice,vp.productName,vp.vendorProductId
	
	private Long quantity;
	
	private double productPrice ;
	
	private String productName;
	
	private Long vendorProductId;
	
	

	public CustomerOrderDetailsDto(Long quantity, double productPrice, String productName, Long vendorProductId) {
		super();
		this.quantity = quantity;
		this.productPrice = productPrice;
		this.productName = productName;
		this.vendorProductId = vendorProductId;
	}
	
	

}
