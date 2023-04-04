package com.tiniycompany.school.repositories;

import com.tiniycompany.school.models.Trajectory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrajectoryRepository extends JpaRepository<Trajectory, Long> {
}