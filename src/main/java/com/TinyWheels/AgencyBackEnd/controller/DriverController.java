package com.TinyWheels.AgencyBackEnd.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TinyWheels.AgencyBackEnd.model.Driver;
import com.TinyWheels.AgencyBackEnd.repository.DriverRepository;

@RestController
@RequestMapping("/api/v1")
public class DriverController {
    @Autowired
    DriverRepository repository;

    @GetMapping("/drivers")
    public ResponseEntity<List<Driver>> getAllDrivers(){
        try{
            List<Driver> drivers = repository.findAll();
            if(drivers.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(drivers,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }   
    }

    @GetMapping("/drivers/{id}")
    public ResponseEntity<Driver> getDriverById(@PathVariable("id") int driverId){
        Optional<Driver> driverData = repository.findById(driverId);
        if(driverData.isPresent()){
            return new ResponseEntity<>(driverData.get(),HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PostMapping("/drivers")
    public ResponseEntity<Driver> createDriver(@RequestBody Driver driver){
        try{
            Driver _driver = repository.save(driver);
            return new ResponseEntity<Driver>(_driver, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/drivers/{id}")
    public ResponseEntity<Driver> updateDriver(@PathVariable("id") int id,@RequestBody Driver driver){
        Optional<Driver> driverData = repository.findById(id);

        if(driverData.isPresent()){
            Driver _driver = driverData.get();
            _driver.setCne(driver.getCne());
            _driver.setEmail(driver.getEmail());
            _driver.setFullname(driver.getFullname());
            _driver.setImg(driver.getImg());
            _driver.setLicenseType(driver.getLicenseType());
            _driver.setPhone(driver.getPhone());
            _driver.setRating(driver.getRating());
            _driver.setStarDate(driver.getStarDate());
            _driver.setStatus(driver.getStatus());
            _driver.setAddress(driver.getAddress());
            _driver.setVehicule(driver.getVehicule());
            return new ResponseEntity<Driver>(repository.save(_driver), HttpStatus.OK);
        }else{
            return new ResponseEntity<Driver>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/drivers/{idDR}")
    public ResponseEntity<HttpStatus> deleteDriver(@PathVariable("idDR") int id){
        try{
            repository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
