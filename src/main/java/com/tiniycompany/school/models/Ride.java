package com.tiniycompany.school.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Ride {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    @JoinColumn(name = "start_adress_id")
    private Address start_adress;

    @OneToOne
    @JoinColumn(name = "destination_adress_id")
    private Address destination_adress;

    @OneToOne
    @JoinColumn(name = "driver_id")
    private Driver driver;

    @OneToMany
    @JoinColumn(name = "pickup_id")
    private List<PickUp> pickup;

    public List<PickUp> getPickup() {
        return pickup;
    }

    public void setPickup(List<PickUp> pickup) {
        this.pickup = pickup;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public Address getDestination_adress() {
        return destination_adress;
    }

    public void setDestination_adress(Address destination_adress) {
        this.destination_adress = destination_adress;
    }

    public Address getStart_adress() {
        return start_adress;
    }

    public void setStart_adress(Address start_adress) {
        this.start_adress = start_adress;
    }

}
