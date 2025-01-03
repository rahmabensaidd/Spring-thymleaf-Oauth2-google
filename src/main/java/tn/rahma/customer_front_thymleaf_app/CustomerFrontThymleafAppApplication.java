package tn.rahma.customer_front_thymleaf_app;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import tn.rahma.customer_front_thymleaf_app.entities.Customer;
import tn.rahma.customer_front_thymleaf_app.repository.CustomerRepo;

@SpringBootApplication
public class CustomerFrontThymleafAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(CustomerFrontThymleafAppApplication.class, args);
    }
    @Bean
    CommandLineRunner commandLineRunner(CustomerRepo customerRepo) {
        return args -> {
            customerRepo.save(
                    Customer.builder()
                            .nom("rahma").email("rahma@gmail.com").build()
            );
            customerRepo.save(
                    Customer.builder()
                            .nom("hazem").email("hazem@gmail.com").build()
            );
            customerRepo.save(
                    Customer.builder()
                            .nom("najet").email("najet@gmail.com").build()
            );
        };
    }
}
