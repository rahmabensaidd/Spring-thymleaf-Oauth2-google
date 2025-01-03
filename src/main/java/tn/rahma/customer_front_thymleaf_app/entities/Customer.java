package tn.rahma.customer_front_thymleaf_app.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class Customer {
    @Id @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long  id;
    private String nom;
    private String email;


}
