package com.tiniycompany.school.controllers;

import com.tiniycompany.school.models.Vehicule;
import com.tiniycompany.school.repositories.VehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v2/vehicules")
public class VehiculeController {
    @Autowired
    private VehiculeRepository vehiculeRepository;

    // Get List of vehicule
    @GetMapping("")
    public ResponseEntity<List<Vehicule>> getAllVehicules() {
        List<Vehicule> vehicules = vehiculeRepository.findAll();
        return new ResponseEntity<>(vehicules, HttpStatus.OK);
    }

    // Get Vehicule By id
    @GetMapping("/{id}")
    public ResponseEntity<Vehicule> getVehiculeById(@PathVariable("id") int id) {
        Optional<Vehicule> vehicule = vehiculeRepository.findById(id);
        if (vehicule.isPresent()) {
            return new ResponseEntity<>(vehicule.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //Create Vehicule
    @PostMapping("")
    public ResponseEntity<Vehicule> addVehicule(@RequestBody Vehicule vehicule) {
        vehiculeRepository.save(vehicule);
        return new ResponseEntity<>(vehicule, HttpStatus.CREATED);
    }

    //Update Vehicule
    @PutMapping("/{id}")
    public ResponseEntity<Vehicule> updateVehicule(@PathVariable("id") int id, @RequestBody Vehicule newVehicule) {
        Optional<Vehicule> optionalVehicule = vehiculeRepository.findById(id);
        if (optionalVehicule.isPresent()) {
            Vehicule vehicule = optionalVehicule.get();
            vehicule.setMatricule(newVehicule.getMatricule());
            vehicule.setImg(newVehicule.getImg());
            vehicule.setProductiondate(newVehicule.getProductiondate());
            vehicule.setStatus(newVehicule.getStatus());
            vehicule.setVehiculeType(newVehicule.getVehiculeType());
            vehiculeRepository.save(vehicule);
            return new ResponseEntity<>(vehicule, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //Delete Vehicule
    @DeleteMapping("/{id}")
    public ResponseEntity<Vehicule> deleteVehicule(@PathVariable("id") int id) {
        Optional<Vehicule> optionalVehicule = vehiculeRepository.findById(id);
        if (optionalVehicule.isPresent()) {
            vehiculeRepository.delete(optionalVehicule.get());
            return new ResponseEntity<>(optionalVehicule.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
