package com.tiniycompany.school.repositories;

import com.tiniycompany.school.models.ClientAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientAccountRepository extends JpaRepository<ClientAccount, Integer> {
}