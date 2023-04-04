package com.tiniycompany.school.controllers;

import com.tiniycompany.school.models.ClientAccount;
import com.tiniycompany.school.repositories.ClientAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v2/client-accounts")
public class ClientAccountController {

    private final ClientAccountRepository clientAccountRepository;

    @Autowired
    public ClientAccountController(ClientAccountRepository clientAccountRepository) {
        this.clientAccountRepository = clientAccountRepository;
    }

    // Get all client accounts
    @GetMapping
    public ResponseEntity<List<ClientAccount>> getAllClientAccounts() {
        List<ClientAccount> clientAccounts = clientAccountRepository.findAll();
        return ResponseEntity.ok(clientAccounts);
    }

    // Get a client account by ID
    @GetMapping("/{id}")
    public ResponseEntity<ClientAccount> getClientAccountById(@PathVariable int id) {
        ClientAccount clientAccount = clientAccountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client account not found with id " + id));
        return ResponseEntity.ok(clientAccount);
    }

    // Create a client account
    @PostMapping
    public ResponseEntity<ClientAccount> createClientAccount(@RequestBody ClientAccount clientAccount) {
        clientAccount.setPassword(new BCryptPasswordEncoder().encode(clientAccount.getPassword()));
        ClientAccount savedClientAccount = clientAccountRepository.save(clientAccount);
        return new ResponseEntity<>(savedClientAccount, HttpStatus.CREATED);
    }

    // Update a client account
    @PutMapping("/{id}")
    public ResponseEntity<ClientAccount> updateClientAccount(@PathVariable int id, @RequestBody ClientAccount clientAccount) {
        ClientAccount existingClientAccount = clientAccountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client account not found with id " + id));
        existingClientAccount.setEmail(clientAccount.getEmail());
        existingClientAccount.setType(clientAccount.getType());
        if (clientAccount.getPassword() != null && !clientAccount.getPassword().isEmpty()) {
            existingClientAccount.setPassword(new BCryptPasswordEncoder().encode(clientAccount.getPassword()));
        }
        ClientAccount updatedClientAccount = clientAccountRepository.save(existingClientAccount);
        return ResponseEntity.ok(updatedClientAccount);
    }

    // Delete a client account
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<HttpStatus> deleteClientAccount(@PathVariable int id) {
        clientAccountRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
