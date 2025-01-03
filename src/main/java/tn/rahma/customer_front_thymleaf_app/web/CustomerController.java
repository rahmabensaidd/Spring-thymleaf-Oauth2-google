package tn.rahma.customer_front_thymleaf_app.web;


import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import tn.rahma.customer_front_thymleaf_app.entities.Customer;
import tn.rahma.customer_front_thymleaf_app.repository.CustomerRepo;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerRepo customerRepo;
    @GetMapping("/customers")
    public String customers(Model model){
        List<Customer> customerList=customerRepo.findAll();
        model.addAttribute("customers",customerList);
        return "customers";// nom de la page
    }
    @GetMapping("/products")
    public String products(Model model){
       return "products" ; //nom de la page
    }


    /**
     * c'est lobjet de spring qui contient les infrmations de session
     * cad lutilisateur authentifié
     */
    @GetMapping("/auth")
    @ResponseBody
    public Authentication authentication(Authentication authentication){
return  authentication;
    }
   /* @GetMapping("/")
    public String index(Model model){
        return "index" ; //nom de la page
    }*/ //pour ne pas afficher index lors de la deconnexion

}
