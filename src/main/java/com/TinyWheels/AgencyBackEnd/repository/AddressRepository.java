package com.TinyWheels.AgencyBackEnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.TinyWheels.AgencyBackEnd.model.Address;

public interface AddressRepository extends JpaRepository<Address,Integer>{
    
}
