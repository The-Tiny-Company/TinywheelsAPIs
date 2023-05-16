package com.tinycompany.tinywheels.agency.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tinycompany.tinywheels.agency.models.Convention;

public interface ConventionRepository extends JpaRepository<Convention,Integer> {
    
}
