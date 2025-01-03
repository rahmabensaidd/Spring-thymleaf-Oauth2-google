package tn.rahma.customer_front_thymleaf_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.rahma.customer_front_thymleaf_app.entities.Customer;

public interface CustomerRepo extends JpaRepository<Customer,Long> {
}
