package com.tinycompany.tinywheels.agency.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tinycompany.tinywheels.agency.models.Convention;
import com.tinycompany.tinywheels.agency.repositories.ConventionRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class ConventionController {
    @Autowired
    private ConventionRepository conventionRepository;

    @GetMapping("/convention")
    public ResponseEntity<List<Convention>> getAll() {
        try {
            List<Convention> conventions = conventionRepository.findAll();
            if (conventions.isEmpty())
                return new ResponseEntity<>(conventions, HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(conventions, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
