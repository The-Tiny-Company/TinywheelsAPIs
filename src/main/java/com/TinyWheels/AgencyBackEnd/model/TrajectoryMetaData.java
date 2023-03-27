package com.TinyWheels.AgencyBackEnd.model;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;


//this class Should be Used to Track the Trajectory Such as Distance and Speed last Stop etc ...

@Entity
public class TrajectoryMetaData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "current_address_id")
    private Address currentAddress;
    private double distance;
    private double lastStop;
    private int speed;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public Address getCurrentAddress() {
        return currentAddress;
    }
    public void setCurrentAddress(Address currentAddress) {
        this.currentAddress = currentAddress;
    }
    public double getDistance() {
        return distance;
    }
    public void setDistance(double distance) {
        this.distance = distance;
    }
    public double getLastStop() {
        return lastStop;
    }
    public void setLastStop(double lastStop) {
        this.lastStop = lastStop;
    }
    public int getSpeed() {
        return speed;
    }
    public void setSpeed(int speed) {
        this.speed = speed;
    }
    

    
}
