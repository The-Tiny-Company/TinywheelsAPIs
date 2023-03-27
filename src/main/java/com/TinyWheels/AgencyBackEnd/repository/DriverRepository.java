package com.TinyWheels.AgencyBackEnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TinyWheels.AgencyBackEnd.model.Driver;


@Repository
public interface DriverRepository extends JpaRepository<Driver,Integer>{
}
