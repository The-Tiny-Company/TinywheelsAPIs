package com.TinyWheels.AgencyBackEnd.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Vehicule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false)
    private String matricule;
    private List<String> imgs;
    private int productiondate;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;
    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name = "driver_id")
    private Driver driver;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private VehiculeType vehiculeType;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getMatricule() {
        return matricule;
    }
    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }
    public List<String> getImgs() {
        return imgs;
    }
    public void setImgs(List<String> imgs) {
        this.imgs = imgs;
    }
    public int getProductiondate() {
        return productiondate;
    }
    public void setProductiondate(int productiondate) {
        this.productiondate = productiondate;
    }
    public Status getStatus() {
        return status;
    }
    public void setStatus(Status status) {
        this.status = status;
    }
    public Driver getDriver() {
        return driver;
    }
    public void setDriver(Driver driver) {
        this.driver = driver;
    }
    public VehiculeType getVehiculeType() {
        return vehiculeType;
    }
    public void setVehiculeType(VehiculeType vehiculeType) {
        this.vehiculeType = vehiculeType;
    }


    
}
