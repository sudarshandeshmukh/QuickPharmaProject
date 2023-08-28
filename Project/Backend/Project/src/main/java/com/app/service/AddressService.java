package com.app.service;

import com.app.dto.AddAddressDto;
import com.app.entities.Address;

public interface AddressService {
	
	Address addAddress(AddAddressDto dto);
	
	Address findAddress(Long addressId);
	
	Address findAddresByCustomerId(Long customerId);
	
	Address updateAddress(Long addressId,Address address);
	
	String deleteAddress(Long addressId);
	
}
