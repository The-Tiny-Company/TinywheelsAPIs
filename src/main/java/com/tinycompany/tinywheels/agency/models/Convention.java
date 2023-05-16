package com.tinycompany.tinywheels.agency.models;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Convention {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private Date date;
    @ManyToOne
    @JoinColumn(name = "agency_id", nullable = false)
    private Agency Agency;
    @ManyToOne
    @JoinColumn(name = "school_id", nullable = false)

    
    private School School;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public Agency getAgency() {
        return Agency;
    }
    public void setAgency(Agency agency) {
        Agency = agency;
    }
    public School getSchool() {
        return School;
    }
    public void setSchool(School school) {
        School = school;
    }


    
}
