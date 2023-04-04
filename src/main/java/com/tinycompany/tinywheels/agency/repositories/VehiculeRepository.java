package com.tinycompany.tinywheels.agency.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tinycompany.tinywheels.agency.models.Vehicule;


@Repository
public interface VehiculeRepository extends JpaRepository<Vehicule,Integer>{
    
}
