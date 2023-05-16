package com.tinycompany.tinywheels.agency.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tinycompany.tinywheels.agency.models.Agency;
import com.tinycompany.tinywheels.agency.repositories.AgencyRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class AgencyController {
    @Autowired
    private AgencyRepository agencyRepository;

    @GetMapping("/agency")
    public ResponseEntity<List<Agency>> getAgency() {
        try {
            List<Agency> agencies = agencyRepository.findAll();
            if (agencies.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(agencies, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}