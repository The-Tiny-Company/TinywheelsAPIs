package com.tinycompany.tinywheels.agency.repositories;

import com.tinycompany.tinywheels.agency.models.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address,Integer>{
    
}
