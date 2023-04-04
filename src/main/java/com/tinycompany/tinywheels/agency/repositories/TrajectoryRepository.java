package com.tinycompany.tinywheels.agency.repositories;

import com.tinycompany.tinywheels.agency.models.Trajectory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TrajectoryRepository extends JpaRepository<Trajectory,Integer>{
}
