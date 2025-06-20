package com.ems.jims_ems.services;

import com.ems.jims_ems.model.Employee;
import com.ems.jims_ems.repository.EmpServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpService {

    @Autowired
    private EmpServiceImpl empServiceImpl;

    public List<Employee> getAllEmp() {
        return empServiceImpl.findAll();
        // SELECT * FROM employees;
    }

    public Employee getEmpById(Long id) {
        return empServiceImpl.findById(id).orElse(null);
    }

    public Employee saveEmp(Employee emp) {
        return empServiceImpl.save(emp);
    }

    public void deleteEmp(Long id) {
        empServiceImpl.deleteById(id);
    }
}
