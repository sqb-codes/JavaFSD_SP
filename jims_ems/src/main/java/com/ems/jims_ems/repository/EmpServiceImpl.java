package com.ems.jims_ems.repository;

import com.ems.jims_ems.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpServiceImpl extends JpaRepository<Employee, Long> {
    // save, findAll, findById, deleteById...
}
