package com.tiniycompany.school.repositories;

import com.tiniycompany.school.models.PickUp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PickUpRepository extends JpaRepository<PickUp, Long> {
}