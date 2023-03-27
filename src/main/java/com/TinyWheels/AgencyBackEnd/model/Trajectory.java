package com.TinyWheels.AgencyBackEnd.model;


import java.sql.Time;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Trajectory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Enumerated(EnumType.STRING)
    private TrajectoryType trajectoryType;
    @Column(nullable = false)
    private String Client; // String For now Tangado Class dial Ecole and Parent 
    @Column(nullable = false)
    private Address startAddress;
    @Column(nullable = false)
    private Address endAddress;
    @Temporal(TemporalType.TIME)
    private Time startTime;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public TrajectoryType getTrajectoryType() {
        return trajectoryType;
    }
    public void setTrajectoryType(TrajectoryType trajectoryType) {
        this.trajectoryType = trajectoryType;
    }
    public String getClient() {
        return Client;
    }
    public void setClient(String client) {
        Client = client;
    }
    public Address getStartAddress() {
        return startAddress;
    }
    public void setStartAddress(Address startAddress) {
        this.startAddress = startAddress;
    }
    public Address getEndAddress() {
        return endAddress;
    }
    public void setEndAddress(Address endAddress) {
        this.endAddress = endAddress;
    }
    public Time getStartTime() {
        return startTime;
    }
    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    
}
