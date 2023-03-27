package com.TinyWheels.AgencyBackEnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TinyWheels.AgencyBackEnd.model.Vehicule;


@Repository
public interface VehiculeRepository extends JpaRepository<Vehicule,Integer>{
    
}
