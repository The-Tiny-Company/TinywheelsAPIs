package com.TinyWheels.AgencyBackEnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TinyWheels.AgencyBackEnd.model.Trajectory;


@Repository
public interface TrajectoryRepository extends JpaRepository<Trajectory,Integer>{
}
