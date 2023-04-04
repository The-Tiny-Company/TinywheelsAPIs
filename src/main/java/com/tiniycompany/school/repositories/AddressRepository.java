package com.tiniycompany.school.repositories;

import com.tiniycompany.school.models.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}