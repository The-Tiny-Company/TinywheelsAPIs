package com.tiniycompany.school.repositories;

import com.tiniycompany.school.models.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepository extends JpaRepository<Driver, Integer> {
}