package com.tiniycompany.school.repositories;

import com.tiniycompany.school.models.Ride;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RideRepository extends JpaRepository<Ride, Long> {
}