	package com.app.dto;

	import lombok.Getter;
	import lombok.Setter;
	import lombok.ToString;

	@Getter
	@Setter
	@ToString
	public class CartProductRepo2 {
		
		//product desc
		private Long cartId;
		private Long productId;
		private String productDesc;
		
		private String productName;
		private String pmanufacturer;
		private Long vendorProductId;
		
		private int qty;
		
		
		private double productPrice ;
		
		private double totalAmount;
		
//		public CartProductRepo2(String productDesc, int qty, double productPrice) {
//			super();
//			this.productDesc = productDesc;
//			this.qty = qty;
//			this.productPrice = productPrice;
//		}

	
}
