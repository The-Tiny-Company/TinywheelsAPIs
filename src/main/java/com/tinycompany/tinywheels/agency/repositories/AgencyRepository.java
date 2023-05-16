package com.tinycompany.tinywheels.agency.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tinycompany.tinywheels.agency.models.Agency;

public interface AgencyRepository extends JpaRepository<Agency, Integer> {

}
