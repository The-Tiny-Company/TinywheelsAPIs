package com.TinyWheels.AgencyBackEnd.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TinyWheels.AgencyBackEnd.model.Vehicule;
import com.TinyWheels.AgencyBackEnd.repository.VehiculeRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class VehiculeController {
    @Autowired
    VehiculeRepository repository;
    
    @GetMapping("/vehicules")
    public ResponseEntity<List<Vehicule>> getAllVehicules(){
        try{
            List<Vehicule> vehicules = repository.findAll();
            if(vehicules.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(vehicules,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }   
    }

    @GetMapping("/vehicules/{id}")
    public ResponseEntity<Vehicule> getVehiculeById(@PathVariable("id") int VehiculeId){
        Optional<Vehicule> vehiculeData = repository.findById(VehiculeId);
        if(vehiculeData.isPresent()){
            return new ResponseEntity<>(vehiculeData.get(),HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PostMapping("/vehicules")
    public ResponseEntity<Vehicule> createVehicule(@RequestBody Vehicule vehicule){
        try{
            Vehicule _vehicule = repository.save(vehicule);
            return new ResponseEntity<Vehicule>(_vehicule, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/vehicules/{id}")
    public ResponseEntity<Vehicule> updateVehicule(@PathVariable("id") int id,@RequestBody Vehicule vehicule){
        Optional<Vehicule> vehiculeData = repository.findById(id);

        if(vehiculeData.isPresent()){
            Vehicule _vehicule = vehiculeData.get();
            _vehicule.setImg(vehicule.getImg());
            _vehicule.setMatricule(vehicule.getMatricule());
            _vehicule.setProductiondate(vehicule.getProductiondate());
            _vehicule.setStatus(vehicule.getStatus());
            _vehicule.setVehiculeType(vehicule.getVehiculeType());
            return new ResponseEntity<Vehicule>(repository.save(_vehicule), HttpStatus.OK);
        }else{
            return new ResponseEntity<Vehicule>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/vehicules/{id}")
    public ResponseEntity<HttpStatus> deleteVehicule(@PathVariable("id") int id){
        try{
            repository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
