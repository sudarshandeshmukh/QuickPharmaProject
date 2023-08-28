package com.app.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Address;

public interface AddressRepo extends JpaRepository<Address, Long>{
	Address findByAddressId(Long addressId);
	
	@Query("select a from Address a where a.customer.customerId =:customerId")	
	Address findByCustomerId(Long customerId);
	
//	Address findByCustomerId(Long customerId);
}
