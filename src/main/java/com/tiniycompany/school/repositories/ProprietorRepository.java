package com.tiniycompany.school.repositories;

import com.tiniycompany.school.models.Proprietor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface ProprietorRepository<T extends Proprietor> extends JpaRepository<T, Long> {
}