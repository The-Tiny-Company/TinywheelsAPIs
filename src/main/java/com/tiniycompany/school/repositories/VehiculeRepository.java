package com.tiniycompany.school.repositories;

import com.tiniycompany.school.models.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehiculeRepository extends JpaRepository<Vehicule, Long> {
}